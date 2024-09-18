import React, { useState } from "react";

function Step1({ formData, setFormData, nextStep }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone is required";
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
          <h3 className="text-center"> Personal Information</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group mb-3">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your full name"
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="form-group mb-3">
              <label className="form-label  fw-bold">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email address"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form-group mb-4">
              <label className="form-label  fw-bold">Phone</label>
              <input
                type="text"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                value={formData.phone || ""}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleNext}
            >
              Next <i className="bi bi-arrow-right-circle ms-3"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step1;
