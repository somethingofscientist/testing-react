
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import styles from './Preview.module.css'

const Preview = () => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="file-uploader">
            <input
                type="file"
                onChange={onFileChange}
                accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
            // hidden
            />
           
            {file && (
                <div className="file-preview">
                    {file.type.includes('pdf') ? (
                        <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
                            View PDF
                        </a>
                    ) : (
                        <img src={URL.createObjectURL(file)} alt="File Preview" />
                    )}
                </div>
            )}

        </div>
    );
};

export default Preview;
