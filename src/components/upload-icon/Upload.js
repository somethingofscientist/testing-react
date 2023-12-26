import React, { useState } from 'react';
import styles from './upload.module.css';
import { GoUpload } from 'react-icons/go';

const Upload = () => {
    const [docsFile, setDocsFile] = useState(null);
    const [picFile, setPicFile] = useState(null);

    const handleFileChange = (event, setFile) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hi');
        // Add your submission logic here
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                {/* Default file input without styling */}
                <input
                    type="file"
                    required
                    onChange={(e) => handleFileChange(e, setDocsFile)}
                />

                {/* Styled file input for documents */}
                <div className={styles.input_fields}>
                    <input
                        type="file"
                        id="sahil-input-docs"
                        hidden
                        onChange={(e) => handleFileChange(e, setDocsFile)}
                        required
                    />
                    <label htmlFor="sahil-input-docs" className={styles.upload}>
                        <div className={styles.text}>
                            {docsFile ? docsFile.name : 'Upload Docs Here'}
                        </div>
                        <div className={styles.image}>
                            <GoUpload />
                        </div>
                    </label>
                </div>

                {/* Styled file input for pictures */}
                <div className={styles.input_fields}>
                    <input
                        type="file"
                        id="sahil-input-pic"
                        hidden
                        onChange={(e) => handleFileChange(e, setPicFile)}
                        required
                    />
                    <label htmlFor="sahil-input-pic" className={styles.upload}>
                        <div className={styles.text}>
                            {picFile ? picFile.name : 'Upload Pic Here'}
                        </div>
                        <div className={styles.image}>
                            <GoUpload />
                        </div>
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Upload;
