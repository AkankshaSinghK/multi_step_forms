import React, { useState, useEffect } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import ThankYou from './components/ThankYou';
import './App.css';  // Custom CSS for additional styling

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    address1: '', address2: '', city: '', state: '', zip: ''
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const submitForm = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="container mt-5 form-container">
      <h2 className="form-header mt-3">Multi-Step Form</h2>

      {!formSubmitted && (
        <>
          <ul className="nav nav-tabs justify-content-center step-tabs">
            <li className="nav-item">
              <button className={`nav-link ${currentStep === 1 ? 'active' : ''}`} disabled={currentStep !== 1}>
                Step 1
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${currentStep === 2 ? 'active' : ''}`} disabled={currentStep !== 2}>
                Step 2
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${currentStep === 3 ? 'active' : ''}`} disabled={currentStep !== 3}>
                Step 3
              </button>
            </li>
          </ul>

          <div className="step-content p-4">
            {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
            {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />}
            {currentStep === 3 && <Step3 formData={formData} prevStep={prevStep} submitForm={submitForm} />}
          </div>
        </>
      )}

      {formSubmitted && <ThankYou />}
    </div>
  );
}

export default App;
