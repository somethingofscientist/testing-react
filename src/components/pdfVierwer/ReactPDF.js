import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
// import '@react-pdf-viewer/core/lib/styles/index.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const ReactPDF = () => {
    const myfile = "https://fintech-docs.s3.ap-south-1.amazonaws.com/dev/consumer/1705672847.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAV32INGXX3QBP7OO6%2F20240120%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240120T115145Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=07f12c3b4b1d186659b8feb69a10663a2ed9e34d9846c0bde44bea72dd724acb"


    return (
        <div>
            <div style={{ width: '100%', height: '500px' }}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={myfile} />
                </Worker>
            </div>
        </div>
    )
}

export default ReactPDF