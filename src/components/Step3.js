import React from 'react';

function Step3({ formData, prevStep, submitForm }) {
  const handleSubmit = () => {
    // Simulate form submission
    setTimeout(() => {
      submitForm();
    }, 1000);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 p-3 text-center card-header text-white">Confirm Your Information</h3>
      <table className="table table-bordered table-striped">
        <tbody>
          <tr>
            <td><strong>Name</strong></td>
            <td>{formData.name}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>{formData.email}</td>
          </tr>
          <tr>
            <td><strong>Phone</strong></td>
            <td>{formData.phone}</td>
          </tr>
          <tr>
            <td><strong>Address Line 1</strong></td>
            <td>{formData.address1}</td>
          </tr>
          <tr>
            <td><strong>Address Line 2</strong></td>
            <td>{formData.address2}</td>
          </tr>
          <tr>
            <td><strong>City</strong></td>
            <td>{formData.city}</td>
          </tr>
          <tr>
            <td><strong>State</strong></td>
            <td>{formData.state}</td>
          </tr>
          <tr>
            <td><strong>Zip Code</strong></td>
            <td>{formData.zip}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-between mt-4 ">
        <button className="btn btn-secondary w-50 me-5" onClick={prevStep}> <i className="bi bi-arrow-left-circle me-3"></i>Back</button>
        <button className="btn btn-success w-50" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Step3;
