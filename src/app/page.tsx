'use client'
import Profile from "@/components/Profile/Profile";
import Terminal from "@/components/Loading/Terminal";
import {SetStateAction, useState} from "react";
import {AnimatePresence, motion} from "motion/react";

export default function Home() {
    const [show, setShow] = useState(true)

    return (
        <div>
            <AnimatePresence> {/*TODO: Add fading trigger on click, set state to false if on mobile*/}
                {show && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.6 }}
                        className="fixed z-100"
                    >
                        <Terminal setShow={setShow}/>
                  </motion.div>
              )}
          </AnimatePresence>
          <main className="relative w-full min-h-screen bg-black px-90">
            <div className="relative z-10 pt-30">
                <h1 className="text-primary font-light text-center text-5xl mb-45"><span className="font-bold">Hold tight!</span> New website Coming Soon</h1>
                <Profile />
            </div>
          </main>
      </div>
    );
}
