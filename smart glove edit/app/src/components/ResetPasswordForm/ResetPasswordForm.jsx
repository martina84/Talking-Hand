import React, { useState } from 'react';
import axios from 'axios';
import './ResetPasswordForm.css'; // Import the CSS file

const ResetPasswordForm = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const token = localStorage.getItem('userToken');
  const resetPasswordUrl = 'https://sg.rd-tech.org/mobile_api/reset_password/';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('old_password', oldPassword);
      formData.append('new_password', newPassword);

      const response = await axios.put(resetPasswordUrl, formData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      setSuccessMessage(response.data.detail);
      setOldPassword('');
      setNewPassword('');
      setError(null);
    } catch (error) {
      setError(error.response.data.detail);
    }
  };

  return (
    <div className="reset-password-form-container">
      <div className="reset-password-form">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <div className="input-group">
            <label>Old Password:</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
