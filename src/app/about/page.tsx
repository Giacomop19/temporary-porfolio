export default function About() {
    return (
        <section className="p-20 text-left">
            <div className="flex items-center gap-8 mb-12">
                <p className="pointer-events-auto text-3xl sm:text-3xl font-black text-zinc-100 md:text-5xl font-black font-style:header">
                    About<span className="text-indigo-500">.</span>
                </p>
                <div className="w-full h-[1px] bg-zinc-700" style={{flexDirection:"row-reverse"}}></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
                <div className="space-y-4">
                    <div className="relative overflow-hidden w-fit">
                        <p className="text-lg text-zinc-100">
                            Nerdy dude with obsession for fixing stuff. <br></br>
                            A videogamer <br></br>
                            An engineer for whom technology is love before a profession<br></br>
                            A dreamer , reader and lover of tasty food!
                        </p>
                    </div>
                    <div className="relative overflow-hidden w-fit">
                        <p className="text-lg text-zinc-100">
                            I specialize in full stack development with Java SpringBoot and frontend frameworks such as Angular or NextJS <br></br>
                            but i can build with whatever tool fits for the right job.
                        </p>
                    </div>
                    <div className="relative overflow-hidden w-fit">
                        <p className="text-lg text-zinc-100">
                            I am actually working for Avaloq in Switzerland, and i am feeling good.<br></br>
                        </p>
                    </div>
                    <div className="relative overflow-hidden w-fit">
                        <p className="text-lg text-zinc-100">
                            Outside of work i love videogames, cooking and hiking especially with my dog Zelda! <br></br>
                            I am also studying Computer Science and a bit of business fundamentals.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative overflow-hidden w-fit">
                        <div className="opacity: 1; transform: none;">
                            <div>
                                <h4 className="flex items-center mb-6">
                                    <svg stroke="currentColor" 
                                        fill="currentColor" 
                                        
                                        viewBox="0 0 1024 1024" 
                                        className="text-indigo-500 text-2xl" 
                                        height="1em" 
                                        width="1em" 
                                        xmlns="http://www.w3.org/2000/svg">
                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path>
                                    </svg>
                                    <span className="font-bold ml-2">Use at work</span>
                                </h4>
                                <div className="flex flex-wrap gap-2 mb-12">
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">TypeScript</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">Angular</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">React</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">Redux</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">Java</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">SpringBoot</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">OpenApi</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">Swagger</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">OracleDB</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">MongoDB</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">Gitlab</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">Jira</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden w-fit">
                    <div className="opacity: 1; transform: none;">
                            <div>
                                <h4 className="flex items-center mb-6">
                                <svg 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                
                                    viewBox="0 0 1024 1024" 
                                    className="text-indigo-500 text-2xl" 
                                    height="1em" 
                                    width="1em" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>
                                    <span className="font-bold ml-2">Use for fun</span>
                                </h4>
                                <div className="flex flex-wrap gap-2 mb-12">
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">React Native</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">NextJs</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">GraphQL</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">Expo</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">NodeJs</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">Express</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">Terraform</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">Python</span>
                                    <span className="text-xs px-2 py-1 rounded bg-zinc-700">Django</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        
    </section>
    );
}