import React, {useEffect, useState} from "react";

export default function LoadingChars() {
    const frames = ["/", "-", "\\", "|"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % frames.length);
        }, 100); // Change every 100ms

        return () => clearInterval(interval);
    }, []);

    return <span>{frames[index]}</span>;
}