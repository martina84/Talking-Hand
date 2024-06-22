// /*import React, { useState } from 'react'
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// import axios from'axios';
// import { useNavigate } from 'react-router-dom';
// import './Register.css';


// export default function Register() {
//   const [errMess, setErr] = useState(null);
//   const Navigate = useNavigate();


//   async function register(val) {
//     let response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', val).catch((err) => {
//       console.log(err.response.data.message);
//       setErr(err.response.data.message);
     
//     });

//     if (response && response.data.message === 'success') 
//     Navigate('/login');
//   }



//   let phoneRegex = '^[0-9\\-\\+]{9,15}$';

//   let x = Yup.object({
//     name: Yup.string().min(8, 'the min letters is 3').max(10, 'the maximum letters is 10').required('name is required'),
//     email: Yup.string().email().required(),
//     phone: Yup.string().matches(phoneRegex).required('phone is required'),
//     password: Yup.string().required('password is required'),
//     rePassword: Yup.string().oneOf([Yup.ref('password')], 'password and repasswoed dose not matches'),
//   });


  


//   let Formik = useFormik({
//     initialValues: {
//       name: '',
//       phone: '',
//       email: '',
//       password: '',
//       rePassword: '',

//     },
    
//     validationSchema: x,
//     onSubmit: register,
    
//   });




//   return (
//     <>
//       <div className="registration-form-container">
//         <div className="registration-form">
//           <h1 className='me-4'>
//             Create An Account
//  </h1>
         
          
//           <form onSubmit={Formik.handleSubmit}>
//             <label className="my-2" htmlFor="name">
//               <span className="icon">
//                 <i className="fa fa-user"></i>
//               </span>
//               Name
//             </label>
//             <input
//               value={Formik.values.name}
//               onBlur={Formik.handleBlur}
//               onChange={Formik.handleChange}
//               className="form-control"
//               type="text"
//               name="name"
//               id="name"
//             />
//             {Formik.errors.name && Formik.touched.name && <p className="text-danger">{Formik.errors.name}</p>}

//             <label className="my-2" htmlFor="phone">
//               <span className="icon">
//                 <i className="fa fa-phone"></i>
//               </span>
//               Phone
//             </label>
//             <input
//               value={Formik.values.phone}
//               onBlur={Formik.handleBlur}
//               onChange={Formik.handleChange}
//               className="form-control"
//               type="tel"
//               name="phone"
//               id="phone"
//             />
//             {Formik.errors.phone && Formik.touched.phone && <p className="text-danger">{Formik.errors.phone}</p>}

//             <label className="my-2" htmlFor="email">
//               <span className="icon">
//                 <i className="fa fa-envelope"></i>
//               </span>
//               Email
//             </label>
//             <input
//               value={Formik.values.email}
//               onBlur={Formik.handleBlur}
//               onChange={Formik.handleChange}
//               className="form-control"
//               type="email"
//               name="email"
//               id="email"
//             />
//             {Formik.errors.email && Formik.touched.email && <p className="text-danger">{Formik.errors.email}</p>}

//             <label className="my-2" htmlFor="password">
//               <span className="icon">
//                 <i className="fa fa-lock"></i>
//               </span>
//               Password
//             </label>
//             <input
//               value={Formik.values.password}
//               onBlur={Formik.handleBlur}
//               onChange={Formik.handleChange}
//               className="form-control"
//               type="password"
//               name="password"
//               id="password"
//             />
//             {Formik.errors.password && Formik.touched.password && <p className="text-danger">{Formik.errors.password}</p>}

//             <label className="my-2" htmlFor="rePassword">
//               <span className="icon">
//                 <i className="fa fa-lock"></i>
//               </span>
//               Re-enter Password
//             </label>
//             <input
//               value={Formik.values.rePassword}
//               onBlur={Formik.handleBlur}
//               onChange={Formik.handleChange}
//               className="form-control"
//               type="password"
//               name="rePassword"
//               id="rePassword"
//             />
//             {Formik.errors.rePassword && Formik.touched.rePassword && (
//               <p className="text-danger">{Formik.errors.rePassword}</p>
//             )}
//             {errMess != null && <p>{errMess}</p>}
//             <button disabled={!Formik.isValid && Formik.touched} type="submit" className="btn btn-outline-success mt-3">
//               Sign up
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }
// */  
 




// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaEnvelope, FaPhone, FaLock, FaBirthdayCake, FaVenusMars, FaImage } from 'react-icons/fa';
// import './Register.css';

// export default function Register() {
//   const [errMess, setErrMess] = useState(null);
//   const navigate = useNavigate();

//   async function register(values) {
//     try {
//       const response = await axios.post('https://sg.rd-tech.org/mobile_api/registration/', values);
//       if (response.data.token) {
//         localStorage.setItem('userToken', response.data.token);
//         navigate('/Login');
//       }
//     } catch (error) {
//       console.error(error);
//       setErrMess(error.response?.data.code || 'An error occurred');
//     }
//   }

//   const validationSchema = Yup.object({
//     name: Yup.string().max(30, 'Name cannot exceed 30 characters').required('Name is required'),
//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     phone: Yup.string().max(20, 'Phone cannot exceed 20 characters').required('Phone is required'),
//     gender: Yup.string().oneOf(['M', 'F'], 'Invalid gender').required('Gender is required'),
//     password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').max(20, 'Password cannot exceed 20 characters'),
//     birthday: Yup.date().required('Birthday is required'),
//     image: Yup.mixed().nullable(),
//   });

//   const initialValues = {
//     email: 'ahmedalaatalaat1@gmail.com',
//     name: 'Ahmed Elkady',
//     phone: '01025641555',
//     gender: 'M',
//     password: '12345678',
//     birthday: '1999-10-01',
//     image: null,
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: register,
//   });

//   return (
//     <div className="registration-form-container">
//       <div className="registration-form">
//         <h1>Create An Account</h1>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name"><FaUser className="icon" /> Name</label>
//             <input
//               value={formik.values.name}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               type="text"
//               name="name"
//               id="name"
//             />
//             {formik.errors.name && formik.touched.name && <p className="text-danger">{formik.errors.name}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="email"><FaEnvelope className="icon" /> Email</label>
//             <input
//               value={formik.values.email}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               type="email"
//               name="email"
//               id="email"
//             />
//             {formik.errors.email && formik.touched.email && <p className="text-danger">{formik.errors.email}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="phone"><FaPhone className="icon" /> Phone</label>
//             <input
//               value={formik.values.phone}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               type="tel"
//               name="phone"
//               id="phone"
//             />
//             {formik.errors.phone && formik.touched.phone && <p className="text-danger">{formik.errors.phone}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="gender"><FaVenusMars className="icon" /> Gender</label>
//             <select
//               value={formik.values.gender}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               name="gender"
//               id="gender"
//             >
//               <option value="M">Male</option>
//               <option value="F">Female</option>
//             </select>
//             {formik.errors.gender && formik.touched.gender && <p className="text-danger">{formik.errors.gender}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="password"><FaLock className="icon" /> Password</label>
//             <input
//               value={formik.values.password}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               type="password"
//               name="password"
//               id="password"
//             />
//             {formik.errors.password && formik.touched.password && <p className="text-danger">{formik.errors.password}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="birthday"><FaBirthdayCake className="icon" /> Birthday</label>
//             <input
//               value={formik.values.birthday}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               type="date"
//               name="birthday"
//               id="birthday"
//             />
//             {formik.errors.birthday && formik.touched.birthday && <p className="text-danger">{formik.errors.birthday}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="image"><FaImage className="icon" /> Image</label>
//             <input
//               onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
//               className="form-control"
//               type="file"
//               name="image"
//               id="image"
//             />
//           </div>

//           {errMess && <p className="text-danger">{errMess}</p>}

//           <button type="submit" className="btn btn-primary mt-3">
//             Sign up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaUser, FaEnvelope, FaPhone, FaLock, FaBirthdayCake, FaVenusMars, FaImage } from 'react-icons/fa';
// import './Register.css';

// export default function Register() {
//   const [errMess, setErrMess] = useState(null);
//   const navigate = useNavigate();

//   async function register(values) {
//     try {
//       const response = await axios.post('https://sg.rd-tech.org/mobile_api/registration/', values);
//       if (response.data.token) {
//         localStorage.setItem('userToken', response.data.token);
//         navigate('/Login');
//       }
//     } catch (error) {
//       console.error(error);
//       setErrMess(error.response?.data.code || 'An error occurred');
//     }
//   }

//   const validationSchema = Yup.object({
//     name: Yup.string().max(30, 'Name cannot exceed 30 characters').required('Name is required'),
//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     phone: Yup.string().max(20, 'Phone cannot exceed 20 characters').required('Phone is required'),
//     gender: Yup.string().oneOf(['M', 'F'], 'Invalid gender').required('Gender is required'),
//     password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').max(20, 'Password cannot exceed 20 characters'),
//     birthday: Yup.date().required('Birthday is required'),
//     image: Yup.mixed().nullable(),
//   });

//   const initialValues = {
//     email: '',
//     name: '',
//     phone: '',
//     gender: '',
//     password: '',
//     birthday: '',
//     image: null,
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: register,
//   });

//   return (
//     <div className="registration-form-container">
//       <div className="registration-form">
//         <h1>Create An Account</h1>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name"><FaUser className="icon" /> Name</label>
//             <input
//               value={formik.values.name}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               type="text"
//               name="name"
//               id="name"
//             />
//             {formik.errors.name && formik.touched.name && <p className="text-danger">{formik.errors.name}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="email"><FaEnvelope className="icon" /> Email</label>
//             <input
//               value={formik.values.email}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               type="email"
//               name="email"
//               id="email"
//             />
//             {formik.errors.email && formik.touched.email && <p className="text-danger">{formik.errors.email}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="phone"><FaPhone className="icon" /> Phone</label>
//             <input
//               value={formik.values.phone}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               type="tel"
//               name="phone"
//               id="phone"
//             />
//             {formik.errors.phone && formik.touched.phone && <p className="text-danger">{formik.errors.phone}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="gender"><FaVenusMars className="icon" /> Gender</label>
//             <select
//               value={formik.values.gender}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               name="gender"
//               id="gender"
//             >
//               <option value="M">Male</option>
//               <option value="F">Female</option>
//             </select>
//             {formik.errors.gender && formik.touched.gender && <p className="text-danger">{formik.errors.gender}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="password"><FaLock className="icon" /> Password</label>
//             <input
//               value={formik.values.password}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               type="password"
//               name="password"
//               id="password"
//             />
//             {formik.errors.password && formik.touched.password && <p className="text-danger">{formik.errors.password}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="birthday"><FaBirthdayCake className="icon" /> Birthday</label>
//             <input
//               value={formik.values.birthday}
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               className="form-control"
//               type="date"
//               name="birthday"
//               id="birthday"
//             />
//             {formik.errors.birthday && formik.touched.birthday && <p className="text-danger">{formik.errors.birthday}</p>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="image"><FaImage className="icon" /> Image</label>
//             <input
//               onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
//               className="form-control"
//               type="file"
//               name="image"
//               id="image"
//             />
//           </div>

//           {errMess && <p className="text-danger">{errMess}</p>}

//           <button type="submit" className="btn btn-primary mt-3">
//             Sign up
//           </button>
//         </form>
//         <p className="login-link mt-3 mb-0">
//           I have already an account? <Link to="/login">Login</Link>
//         </p>
        
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaBirthdayCake, FaVenusMars, FaImage } from 'react-icons/fa';
import './Register.css';

export default function Register() {
  const [errMess, setErrMess] = useState(null);
  const navigate = useNavigate();

  async function register(values) {
    try {
      const response = await axios.post('https://sg.rd-tech.org/mobile_api/registration/', values);
      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);
        navigate('/Login');
      }
    } catch (error) {
      console.error(error);
      setErrMess(error.response?.data.code || 'An error occurred');
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string().max(30, 'Name cannot exceed 30 characters').required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().max(20, 'Phone cannot exceed 20 characters').required('Phone is required'),
    gender: Yup.string().oneOf(['M', 'F'], 'Invalid gender').required('Gender is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').max(20, 'Password cannot exceed 20 characters'),
    birthday: Yup.date().required('Birthday is required'),
    image: Yup.mixed().nullable(),
  });

  const initialValues = {
    email: '',
    name: '',
    phone: '',
    gender: '',
    password: '',
    birthday: '',
    image: null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: register,
  });

  return (
    <div className="registration-form-container">
      <div className="registration-form">
        <h1>Create An Account</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"><FaUser className="icon" /> Name</label>
            <input
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="form-control"
              type="text"
              name="name"
              id="name"
            />
            {formik.errors.name && formik.touched.name && <p className="text-danger">{formik.errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email"><FaEnvelope className="icon" /> Email</label>
            <input
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="form-control"
              type="email"
              name="email"
              id="email"
            />
            {formik.errors.email && formik.touched.email && <p className="text-danger">{formik.errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone"><FaPhone className="icon" /> Phone</label>
            <input
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="form-control"
              type="tel"
              name="phone"
              id="phone"
            />
            {formik.errors.phone && formik.touched.phone && <p className="text-danger">{formik.errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="gender"><FaVenusMars className="icon" /> Gender</label>
            <select
              value={formik.values.gender}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="form-control"
              name="gender"
              id="gender"
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            {formik.errors.gender && formik.touched.gender && <p className="text-danger">{formik.errors.gender}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password"><FaLock className="icon" /> Password</label>
            <input
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="form-control"
              type="password"
              name="password"
              id="password"
            />
            {formik.errors.password && formik.touched.password && <p className="text-danger">{formik.errors.password}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="birthday"><FaBirthdayCake className="icon" /> Birthday</label>
            <input
              value={formik.values.birthday}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="form-control"
              type="date"
              name="birthday"
              id="birthday"
            />
            {formik.errors.birthday && formik.touched.birthday && <p className="text-danger">{formik.errors.birthday}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="image"><FaImage className="icon" /> Image</label>
            <input
              onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
              className="form-control"
              type="file"
              name="image"
              id="image"
            />
          </div>

          {errMess && <p className="text-danger">{errMess}</p>}

          <button type="submit" className="btn btn-primary mt-3">
            Sign up
          </button>
        </form>
        <p className="login-link mt-3 mb-0">
          I have already an account? <Link to="/login">Login</Link>
        </p>
        
      </div>
    </div>
  );
}