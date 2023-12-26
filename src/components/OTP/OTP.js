import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import styles from './OTP.module.css';

const OTP = () => {
  const [otp, setOtp] = useState('');
  const handleOTPChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      <div className={styles.OTP_container}>
        <OtpInput
          value={otp}
          onChange={(e) => handleOTPChange(setOtp)}
          numInputs={4}
          separator={<span>-</span>}
          inputStyle={styles.otpInput}
          renderInput={(props) => <input {...props} />}
        />
      </div>
    </>
  )
}

export default OTP