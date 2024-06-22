/*import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function ForgetPassword() {
  const Navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [status, setStatus] = useState(true);

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
  });

  const validationSchema2 = Yup.object({
    restCode: Yup.string().required('Code is required').matches(/^[0-9]{5,6}$/, 'Enter valid code'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', values);
        console.log(res);
        if (res.data.statusMsg === 'success') {
          setStatus(false);
        } else {
          setErr(res.data.message);
        }
      } catch (error) {
        console.error(error);
        setErr("An error occurred while processing your request. Please try again later.");
      }
    },
  });

  const formik2 = useFormik({
    initialValues: {
      restCode: ''
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, values);
        console.log(response);
        if (response.data.status === 'Success') {
          Navigate('/restPaaword');
        } else {
          setErr(response.data.message);
        }
      } catch (error) {
        console.error(error);
        setErr("An error occurred while processing your request. Please try again later.");
      }
    },
    validationSchema: validationSchema2
  });

  return (
    <>
      {err && <div className='alert alert-danger'>{err}</div>}
      {status ? (
        <form onSubmit={formik.handleSubmit}>
          <label className='my-3' htmlFor="email">Email</label>
          <input
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className='form-control'
            type="email"
            name="email"
            id="email"
          />
          {formik.touched.email && formik.errors.email && <div className='text-danger'>{formik.errors.email}</div>}
          <button type='submit' className='btn btn-outline-primary px-4 m-3'>Send</button>
        </form>
      ) : (
        <form onSubmit={formik2.handleSubmit}>
          <label className='my-3' htmlFor="resetCode">Reset Code</label>
          <input
            value={formik2.values.restCode}
            onBlur={formik2.handleBlur}
            onChange={formik2.handleChange}
            className='form-control'
            type="text"
            name="restCode"
            id="restCode"
          />
          {formik2.touched.restCode && formik2.errors.restCode && <div className='text-danger'>{formik2.errors.restCode}</div>}
          <button type='submit' className='btn btn-outline-primary px-4 m-3'>Verify Code</button>
        </form>
      )}
    </>
  );
}*/


import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
export default function ForgetPassword() {
    let [errmsg, setErr] = useState("")
    let nav = useNavigate()
    let [changForm, setChangeForm] = useState(true)
    let validationSchema = Yup.object({
        email: Yup.string().required("email Required").email("enter Valid Email"),
    })
    let validationSchema2 = Yup.object({
        resetCode: Yup.string().required("resetCode Required").matches(/^[0-9]{4,6}$/),
    })

    let form1 = useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: forgotPasswordsAPi,
        validationSchema
    })
    let form2 = useFormik({
        initialValues: {
            resetCode: ""
        },
        onSubmit: verifyResetCode,
        validationSchema: validationSchema2
    })

    async function verifyResetCode(Val) {

        let req = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', Val).catch((err) => {
            setErr(err.response.data.message)
        })
        if (req.data.status == 'Success') {
            nav('/RestPaaword')
        }
        console.log(req);
    }
    async function forgotPasswordsAPi(value) {
        let req = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', value).catch((err) => {
            console.log(err);
            setErr(err.response.data.message)
        })
        if (req.data.statusMsg == 'success') {
            setChangeForm(false)
            setErr("")
        }
        console.log(req);
    }
    return (
        <div className='w-75 mx-auto my-5'>
            {errmsg != '' ? <div className='alert alert-danger'>{errmsg}</div> : ""}
            {changForm ? <form onSubmit={form1.handleSubmit}>
                <label htmlFor="email">Enter Your Email  to Send Code</label>
                <input className='form-control' onChange={form1.handleChange} onBlur={form1.handleBlur} type="text" name="email" id="email" />
                {form1.errors.email && form1.touched.email ? <p className='text-danger'>{form1.errors.email}</p> : ""}
                <button type='submit' className='btn bg-main text-white'>send Code </button>
            </form> :
                <form onSubmit={form2.handleSubmit}>


                    <label htmlFor="resetCode">Enter Verify Code</label>
                    <input value={form2.values.resetCode} onChange={form2.handleChange} onBlur={form2.handleBlur} type="text" className='form-control' name="resetCode" id="resetCode" />
                    {form2.errors.resetCode && form2.touched.resetCode ? <p className='text-danger'>{form2.errors.resetCode}</p> : ""}


                    <button type="submit" className='btn bg-main'>confirm Code</button>

                </form>}


        </div>
    )
}

