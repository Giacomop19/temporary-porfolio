export default function Intro(){
    return (
        <section className="p-20 text-left">
            <div className="relative">
                <div className="pointer-events-none relative z-10">
                    <div className="relative overflow-hidden w-fit">
                        <div>
                            <p className="pointer-events-auto text-4xl sm:text-6xl text-zinc-100 md:text-8xl font-black font-style:title">
                                Hi, I'm Giacomo<span className="text-indigo-500">.</span>
                            </p>
                            <br></br>
                            <p className="pointer-events-auto text-2xl sm:text-2xl  md:text-4xl font-black font-style:normal" >
                                I am a <span className="text-indigo-500">Software Engineer</span>
                            </p>
                            <br></br>
                            <p className="pointer-events-auto font-regular font-style:normal" >
                                I like bunch of stuff, especially programming and building software.<br></br>
                                When i do not program, i play videogames and i am very cool at gaming too.<br></br>
                                I have gained significant experience in the field of software development <br></br>
                                and i dream one day i can build my own company!
                            </p>
                            <a href="mailto:giacomo.pumapillo@outlook.it?subject=Contact from portfolio">
                                <button className="relative font-regular z-0 flex items-center gap-2 overflow-hidden  rounded-md border-[1px] px-4 py-2 font-medium text-sm transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 pointer-events-auto before:bg-indigo-700 hover:text-white hover:border-indigo-700 mt-4 bg-indigo-500 text-zinc-100 border-indigo-500 md:mt-6">
                                    Email me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ gridTemplateColumns: `repeat(25, 1fr)` }} className="absolute right-0 opacity-90 grid max-w-[75%] -translate-y-[80%] pl-40 hide-on-mobile">
                    {
                        Array(500).fill(0).map((_, index) => (
                        <div key={index} data-index={index} className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-zinc-600">
                            <div key={index} data-index={index} style={{ 
                                gridTemplateColumns: `repeat(25, 1fr)`, 
                                transform: `scale(1) translateY(1px)`, 
                                opacity: 0.5}}
                                className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-400 opacity-50 group-hover:from-indigo-500 group-hover:to-white">
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @media (max-width: 768px){
                    .hide-on-mobile{
                    display: none;
                    }
                }
                `}
                </style>
        </section>
        
    )
}
