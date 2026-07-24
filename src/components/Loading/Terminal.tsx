import React, {useEffect, useRef, useState} from "react";
import Typed from "typed.js";

const colors = {
    green: "text-[#70C24E]",
    blue: "text-[#41C4D1]",
};

interface Portal {
    key: number;
    node: HTMLElement;
    content: React.ReactNode;
}

export interface SequenceStep {
    typed: string;                                                          //The string being typed
    instant?: React.ReactElement<React.ComponentProps<'span'>, 'span'>;     //The string that appears instantly after the typed string
    typeSpeed?: number;                                                     //The type speed of the typed string
}

export default function Terminal ({
     defaultTypeSpeed = 50,
     delayBeforeInstant = 100,
     delayAfterInstant = 100,
     showCursor = true,
 }){
    const staticRef = useRef<HTMLSpanElement>(null);
    const typedRef = useRef<HTMLSpanElement>(null);
    const typedInstance = useRef<Typed | null>(null);
    // Track every pending setTimeout to cancel them all on unmount
    const timeoutIds = useRef<ReturnType<typeof setTimeout>[]>([]);
    const steps = getSteps();
    const [staticContent, setStaticContent] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const schedule = (fn: () => void, ms: number) => {
            const id = setTimeout(fn, ms);
            timeoutIds.current.push(id);
            return id;
        };

        const runStep = (index: number) => {
            if (index >= steps.length || !typedRef.current) return;
            const step: SequenceStep = steps[index];

            typedInstance.current = new Typed(typedRef.current, {
                strings: [step.typed],
                typeSpeed: step.typeSpeed ?? defaultTypeSpeed,
                showCursor,
                onComplete: () => {
                    // Move the finished text into the static span, then explicitly
                    // clear the typed span, destory does it asynchronously
                    if (staticRef.current) {
                        setStaticContent((prev) => [...prev,
                            <span key={index*2}>{step.typed}</span>
                        ]);
                    }
                    if (typedRef.current) {
                        typedRef.current.textContent = '';
                    }
                    typedInstance.current?.destroy();

                    schedule(() => {
                        if (step.instant && staticRef.current) {
                            //Print instant string
                            setStaticContent((prev) => [...prev,
                                <span key={index*2 + 1}>{step.instant}</span>
                            ]);
                        }

                        schedule(() => {
                            runStep(index + 1);
                        }, delayAfterInstant);
                    }, delayBeforeInstant);
                },
            });
        };

        runStep(0);

        return () => {
            typedInstance.current?.destroy();
            timeoutIds.current.forEach(clearTimeout);
            timeoutIds.current = [];
        };
    }, [steps]);

    return (
        <div className="bg-black text-white w-screen h-screen font-jetbrains text-sm">
            <span ref={staticRef}>
                {staticContent}
            </span>
            <span ref={typedRef} />
        </div>
    )
}

function commandPrefix(folderName: string) {
    return (
        <span className={"font-bold"}>
            <span className={colors.green}>user@manware</span>{" "}
            <span className={colors.blue}>{folderName}</span>
        </span>
    );
}

const getSteps: () => SequenceStep[] = () => {
    const steps: SequenceStep[] = [{typed: "ciao", instant: commandPrefix("~"), typeSpeed: 100},{typed: "COSA", instant: commandPrefix("~/gaygaygay"), typeSpeed: 300}]
    return steps;
}