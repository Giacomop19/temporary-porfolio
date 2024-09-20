export default function Projects(){
    return (
        <section className="p-20 text-left">
            <div className="flex items-center gap-8 mb-12">
                <div className="w-full h-[1px] bg-zinc-700" style={{flexDirection:"row-reverse"}}></div>
                <p className="pointer-events-auto text-3xl sm:text-3xl font-black text-zinc-100 md:text-5xl font-black font-style:header">
                    Projects<span className="text-indigo-500">.</span>
                </p>
            </div>
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
                {/* ---- HELPER APP ----- */}
                <div style={{opacity: 1, transform: "none"}}>
                    <div className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden">
                        <img src="./images/helper_project.png" alt="" />
                    </div>
                    <div className="mt-6">
                        <div className="relative overflow-hidden w-full">
                            <div style={{opacity: 1 ,transform: "none"}}>
                                <div className="flex items-center gap-2 w-full">
                                    <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">Helper app</h4>
                                    <div className="w-full h-[1px] bg-zinc-600"></div>
                                        <a target="_blank" rel="nofollow" href="https://github.com/Giacomop19/Helper">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                                        </a>
                                        {/* <a target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32ZM770.87 824.869l-52.2 52.2c-4.7 4.7-1.9 12.8 4.7 13.6l179.4 21c5.1.6 9.5-3.7 8.9-8.9l-21-179.4c-.8-6.6-8.9-9.4-13.6-4.7l-52.4 52.4-256.2-256.2c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.4c-3.1 3.1-3.1 8.2 0 11.3l256.1 256.3Z" transform="matrix(1 0 0 -1 0 1024)"></path></svg>
                                        </a> */}
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden w-fit">
                            <div style={{opacity: 1, transform: "none"}}>
                                <div className="flex flex-wrap gap-4 text-sm text-indigo-300 my-2">React Native - NodeJs - Express - MongoDB</div>
                            </div>
                            <div className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-500" style={{left: "100%"}}></div>
                        </div>
                        <div className="relative overflow-hidden w-fit">
                            <div style={{opacity: 1, transform: "none"}}>
                                <p className="text-zinc-300 leading-relaxed">A mobile application that helps people find any services around them in a very quick time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---- SCAN RECEIPT APP ----- */}
                <div style={{opacity: 1, transform: "none"}}>
                <div className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden">
                        <img src="./images/digital_receipt_webpage.png" alt="" />
                    </div>
                    <div className="mt-6">
                        <div className="relative overflow-hidden w-full">
                            <div style={{opacity: 1 ,transform: "none"}}>
                                <div className="flex items-center gap-2 w-full">
                                    <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">Scan Receipt app</h4>
                                    <div className="w-full h-[1px] bg-zinc-600"></div>
                                        <a target="_blank" rel="nofollow" href="https://github.com/Giacomop19/receipt-project">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                                        </a>
                                        {/* <a target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32ZM770.87 824.869l-52.2 52.2c-4.7 4.7-1.9 12.8 4.7 13.6l179.4 21c5.1.6 9.5-3.7 8.9-8.9l-21-179.4c-.8-6.6-8.9-9.4-13.6-4.7l-52.4 52.4-256.2-256.2c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.4c-3.1 3.1-3.1 8.2 0 11.3l256.1 256.3Z" transform="matrix(1 0 0 -1 0 1024)"></path></svg>
                                        </a> */}
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden w-fit">
                            <div style={{opacity: 1, transform: "none"}}>
                                <div className="flex flex-wrap gap-4 text-sm text-indigo-300 my-2">ReactJs - Django - PIL - GraphQL</div>
                            </div>
                            <div className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-500" style={{left: "100%"}}></div>
                        </div>
                        <div className="relative overflow-hidden w-fit">
                            <div style={{opacity: 1, transform: "none"}}>
                                <p className="text-zinc-300 leading-relaxed">An application used for digitalizing receipts instead of printing them, use case may be in-store purchase.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---- DEVMATE APP ----- */}
                <div style={{opacity: 1, transform: "none"}}>
                <div className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden">
                        <img src="" alt="" />
                    </div>
                    <div className="mt-6">
                        <div className="relative overflow-hidden w-full">
                            <div style={{opacity: 1 ,transform: "none"}}>
                                <div className="flex items-center gap-2 w-full">
                                    <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">DevMate app</h4>
                                    <div className="w-full h-[1px] bg-zinc-600"></div>
                                        <a target="_blank" rel="nofollow" href="https://www.github.com">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                                        </a>
                                        {/* <a target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32ZM770.87 824.869l-52.2 52.2c-4.7 4.7-1.9 12.8 4.7 13.6l179.4 21c5.1.6 9.5-3.7 8.9-8.9l-21-179.4c-.8-6.6-8.9-9.4-13.6-4.7l-52.4 52.4-256.2-256.2c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.4c-3.1 3.1-3.1 8.2 0 11.3l256.1 256.3Z" transform="matrix(1 0 0 -1 0 1024)"></path></svg>
                                        </a> */}
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden w-fit">
                            <div style={{opacity: 1, transform: "none"}}>
                                <div className="flex flex-wrap gap-4 text-sm text-indigo-300 my-2">System design not built yet</div>
                            </div>
                            <div className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-500" style={{left: "100%"}}></div>
                        </div>
                        <div className="relative overflow-hidden w-fit">
                            <div style={{opacity: 1, transform: "none"}}>
                                <p className="text-zinc-300 leading-relaxed">A social network used from Developers that helps each other find collaborators for their own projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div style={{opacity: 1, transform: "none"}}>
                <div className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden">
                        <img src="" alt="" />
                    </div>
                    <div className="mt-6">
                        <div className="relative overflow-hidden w-full"></div>
                        <div className="relative overflow-hidden w-fit"></div>
                        <div className="relative overflow-hidden w-fit"></div>

                    </div>
                </div> */}
            </div>
        </section>
    )
}