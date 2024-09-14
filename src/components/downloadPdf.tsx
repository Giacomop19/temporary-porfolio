"use client"
import React, {useState} from "react"


const PdfDownload = () => {

    const [pdfUrl] = useState('../shared/Cv-Giacomo.pdf');
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
            className="transition ease-in-out delay-150 bg-transparent hover:bg-indigo-600 hover:scale-110 duration-300 border border-indigo-600 text-white py-2 px-3 rounded-md"
            onClick={handleDownloadPdf}
            >
            <p style={{fontSize:13}}>My Resume</p>
        </button>  
    )
}
export default PdfDownload;

