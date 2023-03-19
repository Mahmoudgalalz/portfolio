import { motion } from "framer-motion";
import { Home } from "./Home";
import { createRoot } from 'react-dom/client';
import { createElement } from "react";
import { Test } from "./Test";

export function Menu(){
    const Elements = [
    {
        id:"Home",
        component:<Home/>
    },
    {
        id:"Test",
        component:<Test/>
    }
    ]
    const root = createRoot(document.getElementById('root'))
    function onPan(event, info) {
        const {component} = Elements.find(element => element.id === event.target.id)
        root.render(component)
      }
    return (
        <>
            <motion.div className="gap-4 m-8 p-2 px-5 rounded-3xl w-fit mx-auto bg-sub-main shadow-xl flex ">
                <motion.div id="Home" whileHover={{scale:1.2}} whileTap={{scale:.9}} onPanEnd={onPan}  drag className="bg-prime w-10 h-10 rounded-lg"/>
                <motion.div id="Test" onPanEnd={onPan} drag className=" bg-prime w-10 h-10 rounded-lg"/>
                <motion.div drag className=" bg-prime w-10 h-10 rounded-lg"/>
            </motion.div>
        </>
    )
}