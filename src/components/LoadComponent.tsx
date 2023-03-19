import { easeIn, motion } from "framer-motion";
import { LoadAnimation } from "./LoadAnimation";

export function LoadComponent({children}){
    return (
        <LoadAnimation>
        <motion.div
            className=""
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0}}
            transition={{
                duration:0.8,
                delay:.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
                {children}
            </motion.div>
            </LoadAnimation>
    )
}