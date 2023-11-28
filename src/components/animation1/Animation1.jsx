import React, { useState } from 'react';
import styles from './Animation.module.css';

const Animate1 = () => {
    const [isRow2Hovered, setIsRow2Hovered] = useState(false);
    const [isRow3Hovered, setIsRow3Hovered] = useState(false);
    const [isRow4Hovered, setIsRow4Hovered] = useState(false);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>heading</div>

                <div className={styles.main_container}>
                    <div className={styles.col}>
                        <div className={styles.row}>
                            <div
                                className={`${styles.image} ${isRow2Hovered ? styles.hiddenImage : ''
                                    }`}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/business-people-raise-success-trophies-with-five-star-rating-vector-illustration-flat-style_954303-625.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.heading_1}>Heading Of Card</div>
                            <div className={styles.text1}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                            </div>
                            <div className={styles.text2}>
                                atque magnam consequuntur similique, est esse nisi voluptates velit amet
                                aliquam. Fugit, rem quibusdam? Magni veniam perferendis, sunt corrupti
                                possimus repellendus.
                            </div>
                        </div>
                        <div
                            className={styles.row2}
                            onMouseEnter={() => setIsRow2Hovered(true)}
                            onMouseLeave={() => setIsRow2Hovered(false)}
                        >
                            <div className={styles.image2}>
                                <img
                                    src="https://img.freepik.com/premium-vector/business-people-raise-success-trophies-with-five-star-rating-vector-illustration-flat-style_954303-625.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.heading_1}>Heading Of Card</div>
                            <div className={styles.text1}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                            </div>
                            <div className={styles.text2}>
                                atque magnam consequuntur similique, est esse nisi voluptates velit amet
                                aliquam. Fugit, rem quibusdam? Magni veniam perferendis, sunt corrupti
                                possimus repellendus.
                            </div>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.row}>
                            <div
                                className={`${styles.image} ${isRow3Hovered ? styles.hiddenImage : ''
                                    }`}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/business-people-raise-success-trophies-with-five-star-rating-vector-illustration-flat-style_954303-625.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.heading_1}>Heading Of Card</div>
                            <div className={styles.text1}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                            </div>
                            <div className={styles.text2}>
                                atque magnam consequuntur similique, est esse nisi voluptates velit amet
                                aliquam. Fugit, rem quibusdam? Magni veniam perferendis, sunt corrupti
                                possimus repellendus.
                            </div>
                        </div>
                        <div
                            className={styles.row2}
                            onMouseEnter={() => setIsRow3Hovered(true)}
                            onMouseLeave={() => setIsRow3Hovered(false)}
                        >
                            <div className={styles.image2}>
                                <img
                                    src="https://img.freepik.com/premium-vector/business-people-raise-success-trophies-with-five-star-rating-vector-illustration-flat-style_954303-625.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.heading_1}>Heading Of Card</div>
                            <div className={styles.text1}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                            </div>
                            <div className={styles.text2}>
                                atque magnam consequuntur similique, est esse nisi voluptates velit amet
                                aliquam. Fugit, rem quibusdam? Magni veniam perferendis, sunt corrupti
                                possimus repellendus.
                            </div>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.row}>
                            <div
                                className={`${styles.image} ${isRow4Hovered ? styles.hiddenImage : ''
                                    }`}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/business-people-raise-success-trophies-with-five-star-rating-vector-illustration-flat-style_954303-625.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.heading_1}>Heading Of Card</div>
                            <div className={styles.text1}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                            </div>
                            <div className={styles.text2}>
                                atque magnam consequuntur similique, est esse nisi voluptates velit amet
                                aliquam. Fugit, rem quibusdam? Magni veniam perferendis, sunt corrupti
                                possimus repellendus.
                            </div>
                        </div>
                        <div
                            className={styles.row2}
                            onMouseEnter={() => setIsRow4Hovered(true)}
                            onMouseLeave={() => setIsRow4Hovered(false)}
                        >
                            <div className={styles.image2}>
                                <img
                                    src="https://img.freepik.com/premium-vector/business-people-raise-success-trophies-with-five-star-rating-vector-illustration-flat-style_954303-625.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.heading_1}>Heading Of Card</div>
                            <div className={styles.text1}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                            </div>
                            <div className={styles.text2}>
                                atque magnam consequuntur similique, est esse nisi voluptates velit amet
                                aliquam. Fugit, rem quibusdam? Magni veniam perferendis, sunt corrupti
                                possimus repellendus.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Animate1;
