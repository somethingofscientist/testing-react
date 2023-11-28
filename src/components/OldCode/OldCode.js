import styles from './PieChart.module.css';
import { MdCurrencyRupee } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlinePercentage } from "react-icons/ai";


import React, { useState } from "react";

const PieChart = () => {
  const [loanAmount, setLoanAmount] = useState(null);
  const [duration, setDuration] = useState(null);
  const [interest, setInterest] = useState(null);

  const getGradient1 = () => {
    return `linear-gradient(to right, #95F6F0 0%, #4AA09B ${loanAmount}%, whitesmoke ${loanAmount}%, whitesmoke 100%)`;
  };
  const getGradient2 = () => {
    return `linear-gradient(to right, #95F6F0 0%, #4AA09B ${duration}%, whitesmoke ${duration}%, whitesmoke 100%)`;
  };
  const getGradient3 = () => {
    return `linear-gradient(to right, #95F6F0 0%, #4AA09B ${interest}%, whitesmoke ${interest}%, whitesmoke 100%)`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Calculator
      </div>
      <div className={styles.main_container}>
        <div className={styles.left}>
          <h1>
            LEFT
          </h1>
        </div>

        <div className={styles.right}>

          <div className={styles.right_container}>
            <div className={styles.label}>
              <div className={styles.text}>
                Loan Amount
              </div>
              <div className={styles.number}>
                <div className={styles.icon}>
                  <MdCurrencyRupee />
                </div>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder='10000'
                />
              </div>
            </div>

            {/* SLIDER */}
            <div className={styles.slider_container}>
              <div className={styles.slider}>
                <input
                  className={styles.slider_main}
                  type="range"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  style={{ background: getGradient1() }}
                />
              </div>
              {/* NUMBERS TO BE SHOWN */}
              <div className={styles.slider_number}>
                <div className={styles.icon}>
                  <MdCurrencyRupee />
                  10,000
                </div>
                <div className={styles.icon}>
                  <MdCurrencyRupee />
                  20,00,000
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right_container}>
            <div className={styles.label}>
              <div className={styles.text}>
                Duration Of Loan
              </div>
              <div className={styles.number}>
                <div className={styles.icon}>
                  <FaRegClock />
                </div>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder='12 Months'
                />
              </div>
            </div>

            {/* SLIDER */}
            <div className={styles.slider_container}>
              <div className={styles.slider}>
                <input
                  className={styles.slider_main}
                  type="range"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  style={{ background: getGradient2() }}
                />
              </div>
              {/* NUMBERS TO BE SHOWN */}
              <div className={styles.slider_number}>
                <div className={styles.icon}>
                  12
                  Months
                </div>
                <div className={styles.icon}>
                  84
                  Months
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right_container}>
            <div className={styles.label}>
              <div className={styles.text}>
                Interest Rate
              </div>
              <div className={styles.number}>
                <div className={styles.icon}>
                  <AiOutlinePercentage />
                </div>
                <input
                  type="number"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  placeholder='12 %'
                  min={1}
                  max={24}
                />
              </div>
            </div>

            {/* SLIDER */}
            <div className={styles.slider_container}>
              <div className={styles.slider}>
                <input
                  className={styles.slider_main}
                  type="range"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  style={{ background: getGradient3() }}
                />
              </div>
              {/* NUMBERS TO BE SHOWN */}
              <div className={styles.slider_number}>
                <div className={styles.icon}>
                  12
                  <AiOutlinePercentage />
                </div>
                <div className={styles.icon}>
                  24
                  <AiOutlinePercentage />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PieChart;