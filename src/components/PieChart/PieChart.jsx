import React, { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { Pie } from "react-chartjs-2";
import { AiOutlinePercentage } from "react-icons/ai";
import styles from './PieChart.module.css';


// RANGES OR SLIDER REUABLE COMPONENT
const SliderInput = ({ label, value, onChange, min, max, placeholder }) => {

  const getGradient = () => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #95F6F0 0%, #4AA09B ${percentage}%, whitesmoke ${percentage}%, whitesmoke 100%)`;
  };

  return (
    <div className={styles.right_container}>
      <div className={styles.label}>
        <div className={styles.text}>
          {label}
        </div>
        <div className={styles.number}>
          <div className={styles.icon}>
            {label === "Loan Amount" ? <MdCurrencyRupee /> : label === "Duration Of Loan" ? <FaRegClock /> : <AiOutlinePercentage />}
          </div>
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value, 10))}
            // onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            min={min}
            max={max}
          />
        </div>
      </div>

      {/* SLIDER */}
      <div className={styles.slider_container}>
        <div className={styles.slider}>
          <input
            className={styles.slider_main}
            type="range"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value, 10))}
            // onChange={(e) => onChange(e.target.value)}
            min={min}
            max={max}
            style={{ background: getGradient() }}
          />
        </div>
        {/* NUMBERS TO BE SHOWN */}
        <div className={styles.slider_number}>
          <div className={styles.icon}>
            {min}
            {label === "Loan Amount" ? <MdCurrencyRupee /> : label === "Duration Of Loan" ? " Months" : <AiOutlinePercentage />}
          </div>
          <div className={styles.icon}>
            {max}
            {label === "Loan Amount" ? <MdCurrencyRupee /> : label === "Duration Of Loan" ? " Months" : <AiOutlinePercentage />}
          </div>
        </div>
      </div>
    </div>
  );
};

// EMI CALCULATIONS
const EMIResults = ({ loanAmount, duration, interest }) => {
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPrincipal, setTotalPrincipal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const interestAmount = (loanAmount * duration * interest) / 100;
    setTotalInterest(interestAmount);
    setTotalPrincipal(loanAmount);
    setTotalAmount(loanAmount + interestAmount);
  }, [loanAmount, duration, interest]);

  return (
    <>
      <div className={styles.EMI_left}>
        {/* <Pie
          data={{
            labels: ['hi', 'hi2'],
            datasets: [{
              data: [totalInterest, totalPrincipal],
              backgroundColor: ['tomato', 'aqua']
            }]
          }}
        /> */}
        <div className={styles.left_text}>
          <div className={styles.left_text_1}>
            Total Interest Amount
          </div>
          <div className={styles.left_text_2}>
            <MdCurrencyRupee /> {totalInterest}
          </div>
        </div>

        <div className={styles.left_text}>
          <div className={styles.left_text_1}>
            Total Principal Amount
          </div>
          <div className={styles.left_text_2}>
            <MdCurrencyRupee /> {totalPrincipal}
          </div>
        </div>

        <div className={styles.left_text}
          style={{
            borderTop: '0.5px solid #6F7978',
            paddingTop: ' 10px'
          }}>
          <div className={styles.left_text_1} >
            Payable Amount
          </div>
          <div className={styles.left_text_2}>
            <MdCurrencyRupee /> {totalAmount}
          </div>
        </div>

        <button>Apply Now</button>
      </div>
    </>
  );
};

// PIE CHARTS
const PieChart = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [duration, setDuration] = useState(12);
  const [interest, setInterest] = useState(12);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Calculator
      </div>
      <div className={styles.main_container}>
        <div className={styles.left}>
          <EMIResults loanAmount={loanAmount} duration={duration} interest={interest} />
        </div>

        <div className={styles.right}>
          <SliderInput label="Loan Amount" value={loanAmount} onChange={setLoanAmount} min={10000} max={2000000} placeholder="10000" />
          <SliderInput label="Duration Of Loan" value={duration} onChange={setDuration} min={12} max={84} placeholder="12 Months" />
          <SliderInput label="Interest Rate" value={interest} onChange={setInterest} min={12} max={24} placeholder="12 %" />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
