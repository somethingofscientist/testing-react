import { useState } from 'react';
import styles from './Cursor.module.css';

const Cursor = () => {
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX)
        setCursorY(e.pageY)
    })


    // console.log('hi', cursorX, cursorY)
    return (
        <>
            {/* <div
                className={styles.cursor}
                style={{
                    left: cursorX + 'px',
                    top: cursorY + 'px',
                }}
            >
            </div> */}


            <div className={styles.container}>
                <div className={styles.circles1}></div>
                <div className={styles.page_content}>
                    <h1>heading</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam beatae esse! Magni provident libero quibusdam. Quas sequi, dignissimos nulla sed aut nemo laborum sunt et facere mollitia ex eaque.
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem aperiam consectetur odit sed, doloremque sit hic nobis quisquam voluptatem deserunt fugit explicabo dolor dolorum rem provident ullam sequi? Iure!
                        </p>
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam beatae esse! Magni provident libero quibusdam. Quas sequi, dignissimos nulla sed aut nemo laborum sunt et facere mollitia ex eaque.
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem aperiam consectetur odit sed, doloremque sit hic nobis quisquam voluptatem deserunt fugit explicabo dolor dolorum rem provident ullam sequi? Iure!
                        </p>
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam beatae esse! Magni provident libero quibusdam. Quas sequi, dignissimos nulla sed aut nemo laborum sunt et facere mollitia ex eaque.
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem aperiam consectetur odit sed, doloremque sit hic nobis quisquam voluptatem deserunt fugit explicabo dolor dolorum rem provident ullam sequi? Iure!
                        </p>
                    </p>

                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, atque provident eum exercitationem quae sapiente numquam. Animi corporis ratione perferendis id eius veritatis? Sequi iste possimus ipsam, quod impedit nihil?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, atque provident eum exercitationem quae sapiente numquam. Animi corporis ratione perferendis id eius veritatis? Sequi iste possimus ipsam, quod impedit nihil?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, atque provident eum exercitationem quae sapiente numquam. Animi corporis ratione perferendis id eius veritatis? Sequi iste possimus ipsam, quod impedit nihil?
                        </li>

                        <ol>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi ad consectetur atque blanditiis temporibus nobis? Labore, iste maiores sint, eveniet, magnam repellendus numquam obcaecati officia ipsam sequi temporibus. Libero?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi ad consectetur atque blanditiis temporibus nobis? Labore, iste maiores sint, eveniet, magnam repellendus numquam obcaecati officia ipsam sequi temporibus. Libero?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi ad consectetur atque blanditiis temporibus nobis? Labore, iste maiores sint, eveniet, magnam repellendus numquam obcaecati officia ipsam sequi temporibus. Libero?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi ad consectetur atque blanditiis temporibus nobis? Labore, iste maiores sint, eveniet, magnam repellendus numquam obcaecati officia ipsam sequi temporibus. Libero?
                            </li>
                        </ol>
                    </ul>
                </div>
            </div>


        </>

    );
};

export default Cursor;
