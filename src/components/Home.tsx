import { AnimatePresence, delay, motion } from "framer-motion"
import { Icon } from '@iconify/react';

export function Home(){
    const skills= [
        'git',
        'vim',
        'linux',
        'vscode',
        'githubactions',
        'java',
        'cpp',
        'js',
        'ts',
        'postgres',
        'mysql',
        'mongodb',
        'prisma',
        'nodejs',
        'expressjs',
        'nestjs',
        'react',
        'astro',
        'tailwind',
        'aws',
        'azure',
        'gcp',
        'cf',
        'workers',
        'bash',
        'ansible'
    ]
    const socials = [
        {
            icon:<Icon fontSize={30} color="rgb(234 84 85)" icon="mdi:twitter" />,
            link:'https://twitter.com/eitmg'
        },
        {
            icon:<Icon fontSize={30} color="rgb(234 84 85)" icon="mdi:github"/>,
            link:'https://github.com/mahmoudgalalz'
        },
        {
            icon:<Icon fontSize={30} color="rgb(234 84 85)" icon="mdi:linkedin"/>,
            link:'https://linkedin.com/in/mahmoudgalalz',
        }

    ]
    return(
        <>
        <div className="grid md:grid-cols-2 my-40 gap-6">
            <motion.div dragMomentum={false} drag><img draggable="false" className="transform-gpu h-60 w-60 mx-auto sm:h-96 sm:w-96 shadow-lg rounded-full object-cover object-center" src="./avatar.png" alt="my-image"/>
            </motion.div>
            <div className="py-20 px-10 text-4xl text-prime">
                <h1>This is <span className="font-bold text-accent">Mahmoud Galal</span></h1>
                <p className="text-2xl">Software Engineer</p>
                <p className="py-10 text-xl">I usally love to code, hack on open-source and explore new tech</p>
                <div className="flex gap-3">
                {socials.map(social=>{
                    return <a className="hover:scale-125 duration-75" href={social.link}>{social.icon}</a>
                })}
                </div>
                <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="self-end my-10 text-prime bg-sub-main p-2 rounded-lg text-xl"><a href="https://docs.google.com/document/d/1zByxytzss3HBQ3ZSptQygtNBCr3-SJwg/edit?usp=sharing&ouid=108932656628100735222&rtpof=true&sd=true" target='_blank'>Resume</a></motion.button>
            </div>
            
            {/* <ul className="absolute">
                {skills.map(skill=>{
                    return <AnimatePresence>
                        <motion.div drag animate={{ x:100, y:100 }}  transition={{repeat:Infinity, repeatDelay:1}}><li className="p-1 hover:scale-110 duration-150"><img draggable='false' className="h-10" src={`https://skillicons.dev/icons?i=${skill}`}/></li></motion.div>
                    </AnimatePresence> 
                })}
            </ul> */}
        </div>
       
        </>
    )
}