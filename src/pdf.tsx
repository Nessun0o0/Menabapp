import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function PDF(ref, rows) {
    const input = ref.current
    html2canvas(input, {allowTaint: true, 	useCORS: true, height:500*rows, windowHeight:500*rows}).then((canvas) => {
        const imgData = canvas.toDataURL("image/png")
        const imgWidth = canvas.width
        const imgHeight = canvas.height
        const pdf = new jsPDF({format:[imgWidth, Math.min(imgHeight, 4000)]})
        let pageHeight = 4000
        let heightLeft = imgHeight
        let position = 0
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save("menabo.pdf")
    })
}

export default PDF