export default function Experience(){
    return (
        <section className="p-20 text-left">
            <div className="flex items-center gap-8 mb-12" style={{flexDirection:"row-reverse"}}>
                <div className="w-full h-[1px] bg-zinc-700"></div>
                    <h2>
                        <div className="relative overflow-hidden w-fit">
                            <div style={{opacity: 1, transform: "none"}}><span className="text-3xl md:text-5xl font-black text-end">Experience<span className="text-indigo-500">.</span></span></div>
                                <div className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-500" style={{left: "100%"}}></div>
                        </div>
                    </h2>
                </div>
                <div className="mb-6 border-b pb-6 border-zinc-700">
                    <div className="flex items-center justify-between mb-2">
                        <div className="relative overflow-hidden w-fit">
                            <div style={{opacity: 1, transform: "none"}}><span className="font-bold text-xl">Relewant</span></div>
                            <div className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-500" style={{left: "100%"}}></div>
                        </div>
                        <div className="relative overflow-hidden w-fit">
                            <div style={{opacity: 1, transform: "none"}}><span className="font-bold">11/2023 - Present</span></div>
                            <div className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-500" style={{left: "100%"}}></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="relative overflow-hidden w-fit">
                            <div style={{opacity: 1, transform: "none"}}><span className="text-indigo-300 font-bold">Software Engineer</span></div>
                                <div className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-500" style={{left: "100%"}}></div>
                        </div>
                        <div className="relative overflow-hidden w-fit">
                            <div style={{opacity: 1, transform: "none"}}><span className="font-bold">Switzerland</span></div>
                            <div className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-500" style={{left: "100%"}}></div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden w-fit">
                        <div style={{opacity: 1, transform: "none"}}>
                            <p className="mb-6 text-zinc-300 leading-relaxed">I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.</p>
                        </div>
                        <div className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-500" style={{left: "100%"}}></div>
                    </div>
                    <div className="relative overflow-hidden w-fit">
                        <div style={{opacity: 1, transform: "none"}}>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs px-2 py-1 rounded bg-zinc-700">Angular</span>
                                <span className="text-xs px-2 py-1 rounded bg-zinc-700">Java</span>
                                <span className="text-xs px-2 py-1 rounded bg-zinc-700">SpringBoot</span>
                                <span className="text-xs px-2 py-1 rounded bg-zinc-700">OracleDB</span>
                                <span className="text-xs px-2 py-1 rounded bg-zinc-700">OpenApi</span>
                                <span className="text-xs px-2 py-1 rounded bg-zinc-700">Maven</span>
                                <span className="text-xs px-2 py-1 rounded bg-zinc-700">Docker</span>
                            </div>
                        </div>
                        <div className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-500" style={{left: "100%"}}>
                    </div>
                </div>
            </div>
        </section>
    )
}