"use client"
import React, {useState} from "react"


const PdfDownload = () => {

    const [pdfUrl] = useState('./Cv-Giacomo.pdf');
    const [pdfName] = useState('Cv-Giacomo.pdf');

    const handleDownloadPdf = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfName;
        link.click();
        
    }
    return (
        <button 
            style={{marginLeft:"auto"}} 
            className="relative font-regular z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px] px-4 py-2 font-bold transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 pointer-events-auto before:bg-indigo-700 hover:text-white hover:border-indigo-700 mt-4 bg-indigo-500 text-zinc-100 border-indigo-500"
            onClick={handleDownloadPdf}
            >
            <p style={{fontSize:14}}>My resume</p>
        </button>  
    )
}
export default PdfDownload;

