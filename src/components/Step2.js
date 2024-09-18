import React, { useState } from "react";

function Step2({ formData, setFormData, prevStep, nextStep }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.address1) tempErrors.address1 = "Address Line 1 is required";
    if (!formData.city) tempErrors.city = "City is required";
    if (!formData.state) tempErrors.state = "State is required";
    if (!formData.zip) tempErrors.zip = "Zip Code is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="step-container">
      <div className="card shadow-sm">
        <div className="card-header text-white">
          <h3  className='text-center'>Address Information</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group  mb-3">
              <label className="form-label  fw-bold">Address Line 1</label>
              <input
                type="text"
                className="form-control"
                value={formData.address1 || ""}
                onChange={(e) =>
                  setFormData({ ...formData, address1: e.target.value })
                }
              />
              {errors.address1 && (
                <small className="text-danger">{errors.address1}</small>
              )}
            </div>
            <div className="form-group mb-3">
              <label className="form-label  fw-bold">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                value={formData.address2 || ""}
                onChange={(e) =>
                  setFormData({ ...formData, address2: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label  fw-bold">City</label>
              <input
                type="text"
                className="form-control"
                value={formData.city || ""}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
              {errors.city && (
                <small className="text-danger">{errors.city}</small>
              )}
            </div>
            <div className="form-group mb-3">
              <label className="form-label  fw-bold">State</label>
              <input
                type="text"
                className="form-control"
                value={formData.state || ""}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
              />
              {errors.state && (
                <small className="text-danger">{errors.state}</small>
              )}
            </div>
            <div className="form-group mb-3">
              <label className="form-label  fw-bold">Zip Code</label>
              <input
                type="text"
                className="form-control"
                value={formData.zip || ""}
                onChange={(e) =>
                  setFormData({ ...formData, zip: e.target.value })
                }
              />
              {errors.zip && (
                <small className="text-danger">{errors.zip}</small>
              )}
            </div>
            <div className="d-flex ">
              <button
                className="btn btn-secondary w-50 me-5 "
                onClick={prevStep}
              > <i className="bi bi-arrow-left-circle me-3"></i>
                Back
                
              </button>
              <button className="btn btn-primary w-50" onClick={handleNext}>
                Next
                <i className="bi bi-arrow-right-circle ms-3"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step2;
