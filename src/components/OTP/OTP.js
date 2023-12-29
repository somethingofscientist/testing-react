import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import styles from './OTP.module.css';

const OTP = () => {
  const [otp, setOtp] = useState('');

  const handleOTPChange = (setOtp) => {
    setOtp(otp);
  }

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