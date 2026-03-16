'use client'
import Image from "next/image";
import { motion } from "motion/react"

export default function ProfilePicture() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 17
            }}
            className="rounded-full outline-4 outline-primary overflow-hidden"
        >
            <motion.div
                whileHover={{ scale: 1.10 }}
                transition={{ type: "spring", stiffness: 200, damping: 17 }}
            >
                <motion.div
                    animate={{ rotate: [0, 360] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear"}}
                >
                    <Image src={"/assets/pfp.png"} alt={"sesso"} width={500} height={500}/>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}