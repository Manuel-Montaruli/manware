'use client'
import { motion } from "motion/react"
export default function ProfileText() {
    return (
        <div className="w-full">
            <motion.div
                initial={{ x: 70, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
            >
                <div>
                    <h1 className="text-primary text-4xl font-bold">Manuel Montaruli</h1>
                    <h1 className="text-primary text-4xl font-bold mb-12">Software and Data Engineer</h1>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: 70, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            >
                <h1 className="text-primary text-2xl">I'm a 22 y/o MSc IT student, soon to bring innovation to the world.</h1>
            </motion.div>
        </div>
    )
}