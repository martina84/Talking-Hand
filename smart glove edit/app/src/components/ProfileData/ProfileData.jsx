import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaVenusMars, FaBirthdayCake, FaPhone, FaImage } from 'react-icons/fa';
import './userProfile.css';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    gender: '',
    birthday: '',
    phone: '',
    image: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const token = localStorage.getItem("userToken"); 
  const getProfileUrl = 'https://sg.rd-tech.org/mobile_api/profile/';
  const updateProfileUrl = 'https://sg.rd-tech.org/mobile_api/profile/';
  const deleteProfileUrl = 'https://sg.rd-tech.org/mobile_api/profile/';

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(getProfileUrl, {
          headers: { Authorization: `Token ${token}` },
        });
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, image: e.target.files[0] });
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('gender', profile.gender);
    formData.append('birthday', profile.birthday);
    formData.append('phone', profile.phone);
    if (profile.image) {
      formData.append('image', profile.image);
    }

    try {
      const response = await axios.put(updateProfileUrl, formData, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Profile updated successfully');
      setProfile(response.data); 
    } catch (error) {
      setError(error);
      alert('Failed to update profile');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(deleteProfileUrl, {
        headers: { Authorization: `Token ${token}` },
      });
      alert('Profile deleted successfully');
      setProfile({
        name: '',
        gender: '',
        birthday: '',
        phone: '',
        image: null,
      }); // Reset profile state
    } catch (error) {
      setError(error);
      alert('Failed to delete profile');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="registration-form-container">
      <form className="registration-form">
        <h1>User Profile</h1>
        <div>
          <label>
            <FaUser className="icon" />
            Name:
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            <FaVenusMars className="icon" />
            Gender:
            <select name="gender" value={profile.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <FaBirthdayCake className="icon" />
            Birthday:
            <input type="date" name="birthday" value={profile.birthday} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            <FaPhone className="icon" />
            Phone:
            <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            <FaImage className="icon" />
            Image:
            <input type="file" name="image" onChange={handleFileChange} />
          </label>
        </div>
        <button type="button" onClick={handleUpdate}>Update Profile</button>
        <button type="button" onClick={handleDelete}>Delete Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
