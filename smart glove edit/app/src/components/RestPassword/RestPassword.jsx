 /*import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'


export default function RestPassword() {
  let navg = useNavigate('')
   const [err,setErr]  =   useState('')
  let validationSchema = Yup.object({

    email: Yup.string().email().required('Email is required'),
    newPassword: Yup.string().required('newPassword is required'),


  })
 let  Form3  = useFormik({
  initialValues:{

  email:'',
  newPassword:''

  },
  onSubmit:RestPaawordApi,
  validationSchema:  validationSchema,



 })


  async   function RestPaawordApi(val){


      let res = await axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, val).catch((err)=>{
        setErr(err.res.data.message)
        

      })

      if(res && res.data && res.data.token){

        navg('/Login')
      }
      console.log(res)

     }



  return (
    <>
    
    <h2>ResetPassword</h2>
{err === "" ? "" : <div className='text-danger'>{err}</div>}
<form onSubmit={Form3.handleSubmit}>
  <div className='mb-3'>
    <label htmlFor="email">Email:</label>
    <input onBlur={Form3.handleBlur} onChange={Form3.handleChange} type="email" className='form-control' name="email" id="email" />
    {(Form3.errors.email && Form3.touched.email) && <div className='alert alert-danger'>{Form3.errors.email}</div>}
  </div>
  <div className='mb-3'>
    <label htmlFor="newPassword">New Password:</label>
    <input onBlur={Form3.handleBlur} onChange={Form3.handleChange} type="password" className='form-control' name="newPassword" id="newPassword" />
    {(Form3.errors.newPassword && Form3.touched.newPassword) && <div className='alert alert-danger'>{Form3.errors.newPassword}</div>}
  </div>
</form>

    
    
    
    </>
      
  )
  }*/    




  import axios from 'axios'
import { useFormik } from 'formik'
import React, {  useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

export default function ResetPassword() {


    let navg = useNavigate()
    let [errmsg, setError] = useState("")
    let [loading, setLoading] = useState(true)


    let validationSchema = Yup.object({
        email: Yup.string().required("email Required").email("enter Valid Email"),
        newPassword: Yup.string().matches(/^[A-Z][a-z0-9A-Z!@$%^&*()_-]{6,16}$/, "enter valid newPassword").required("newPassword Required"),
    })

    let formik = useFormik({
        initialValues: {
            email: "",
            newPassword: "",
        },
        onSubmit: UpdatePassword,
        // validate,
        validationSchema
    })
    async function UpdatePassword(val) {
        let req = await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', val).catch((err) => {
            setError(err.response.data.message)
        })
        if(req.data.token){
          navg("/Login")
        }
        console.log(req);
    }
    return (
        <div className='container py-5'>


            {errmsg == "" ? "" : <div className='alert alert-danger'>{errmsg}</div>}

            <form onSubmit={formik.handleSubmit}>




                <div className='mb-3'>
                    <label htmlFor="email"> email:</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" className='form-control' name="email" id="email" />


                    {
                        (formik.errors.email && formik.touched.email) ? <div className='alert alert-danger'>
                            {formik.errors.email}
                        </div> : ""
                    }
                </div>


                <div className='mb-3'>
                    <label htmlFor="newPassword"> newPassword:</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control' name="newPassword" id="newPassword" />

                    {
                        (formik.errors.newPassword && formik.touched.newPassword) ? <div className='alert alert-danger'>
                            {formik.errors.newPassword}
                        </div> : ""
                    }
                </div>


                {loading ? <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Update Password</button> : <button type='button' className='btn bg-main text-white'><i className='fa-solid fa-spinner fa-spin'></i></button>}



            </form>
        </div>
    )
}

