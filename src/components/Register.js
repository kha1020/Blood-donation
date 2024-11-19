import React, { useState } from 'react';
import './Register.css'; 
import Step0 from './TP-register/Step0'; 
import Step1 from './TP-register/Step1'; 
import Step2 from './TP-register/Step2'; 
import Step3 from './TP-register/Step3'; 
import Step4 from './TP-register/Step4'; 

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0); 

  const handleStepChange = (step) => {
    if (step >= 0 && step <= 4) {
      setCurrentStep(step); // Chuyển đến bước tương ứng
    }
  };

  return (
    <div className="form-container">
      <div className="form-box"> {/* Khung chứa form */}
        {/* Hiển thị hình tròn chỉ cho các bước từ 1 đến 4 */}
        <div className="circle-container">
          {[1, 2, 3, 4].map((step) => (
            <div className="step-item" key={step}>
              <div 
                className={`circle ${currentStep === step ? 'active' : ''}`} 
                onClick={() => handleStepChange(step)}
              >
                {step}
              </div>
              <span className="circle-text">
                {step === 1 && 'Giấy tờ tùy thân'}
                {step === 2 && 'Hồ sơ người hiến máu'}
                {step === 3 && 'Xác thực tài khoản'}
                {step === 4 && 'Tạo mật khẩu'}
              </span>
            </div>
          ))}
        </div>

        {/* Hiển thị từng bước tương ứng */}
        {currentStep === 0 && <Step0 handleStepChange={handleStepChange} />}
        {currentStep === 1 && <Step1 handleStepChange={handleStepChange} />}
        {currentStep === 2 && <Step2 handleStepChange={handleStepChange} />}
        {currentStep === 3 && <Step3 handleStepChange={handleStepChange} />}
        {currentStep === 4 && <Step4 handleStepChange={handleStepChange} />}
      </div>
    </div>
  );
};

export default Register;
