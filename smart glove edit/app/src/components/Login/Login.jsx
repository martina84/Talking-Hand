/*import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

import './LoginForm.css'; 

export default function Login() {
  
  const navigate = useNavigate();
  const [errMess, setErrMess] = useState(null);

  async function login(values) {
    try {
      const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values);
      if (response.data.message === 'success') {
        localStorage.setItem('userToken', response.data.token);
        
        navigate('/');
      }
    } catch (error) {
      setErrMess(error.response.data.message);
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: login,
  });

  return (
    <div className="login-form-container">
      <div className="login-form"> 
        <h1>Login <i class="fa fa-user-circle" aria-hidden="true"></i>
</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">
              <i className="icon fa fa-envelope"></i> 
              Email
            </label>
            <input
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={formik.touched.email && formik.errors.email ? 'error' : ''}
              type="email"
              name="email"
              id="email"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="error-message">{formik.errors.email}</p>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="password">
              <i className="icon fa fa-lock"></i> 
              Password
            </label>
            <input
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={formik.touched.password && formik.errors.password ? 'error' : ''}
              type="password"
              name="password"
              id="password"
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error-message">{formik.errors.password}</p>
            )}
          </div>

          {errMess && <p className={`error-message ${errMess ? 'error-message-animation' : ''}`}>{errMess}</p>}

          <button type="submit" className="submit-btn">Login</button>
          <Link to={'/forgetPassword'} className='mt-2 bolder d-flex '> <button  className='btn btn-outlin-primary m-3 ' >Forget password </button></Link>
         
        </form>
      </div>
    </div>
  );
} */  

import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext'; // Adjust the path accordingly
import './LoginForm.css';

export default function Login() {
  const navigate = useNavigate();
  const { setUserToken } = useContext(UserContext); // Use the context
  const [errMess, setErrMess] = useState(null);

  async function login(values) {
    try {
      const response = await axios.get('https://sg.rd-tech.org/mobile_api/login', {
        params: {
          email: values.email,
          password: values.password,
        },
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('userToken', token);
        setUserToken(token); // Update the context
        navigate('/');
      } else {
        setErrMess('Authentication failed: Incorrect email or password.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrMess('An error occurred while trying to log in.');
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').max(20, 'Password cannot exceed 20 characters'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: login,
  });

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h1>Login <i className="fa fa-user-circle" aria-hidden="true"></i></h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">
              <i className="icon fa fa-envelope"></i>
              Email
            </label>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={formik.touched.email && formik.errors.email ? 'error' : ''}
              type="email"
              name="email"
              id="email"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="error-message">{formik.errors.email}</p>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="password">
              <i className="icon fa fa-lock"></i>
              Password
            </label>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={formik.touched.password && formik.errors.password ? 'error' : ''}
              type="password"
              name="password"
              id="password"
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error-message">{formik.errors.password}</p>
            )}
          </div>

          {errMess && <p className={`error-message ${errMess ? 'error-message-animation' : ''}`}>{errMess}</p>}

          <button type="submit" className="submit-btn">Login</button>
          <Link to='/resetPassword' className='mt-2 bolder d-flex'>
            <button className='btn btn-outline-primary m-3'>Forget password</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
