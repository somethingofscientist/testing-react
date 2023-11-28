import React from 'react'
import styles from './Testing.module.css';



const Testing = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    Hi i am ,
                </div>

                <div className={styles.main_container}>
                    <span>

                        heading_1="Used Car Loan" <br />
                        heading_2="Certified Cars/ Verified Cars" <br />
                        heading_3="Insurance" <br />
                        heading_4="Extended Warranty" <br />
                        heading_5="RC Transfer"<br />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Testing