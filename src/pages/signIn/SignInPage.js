import React, { useState } from 'react';
import { useFormik } from 'formik';
import basicSchema from './SignInValidation';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';





const SignInPage = () => {

    const [inputError, setInputError] = useState(false)

    let navigate = useNavigate()

    // console.log(users)

    const onSubmit = (action, values) => {



    };


    const { values, handleBlur, handleChange, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });


    const handleEmailCheck = (e) => {

    }


    return (
        <div className='signup-maincontainer'>
            <div className="signup-container">
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            status={inputError ? "error" : ""}
                            className={errors.email && touched.email ? "input-err" : ""}
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            onChangeCapture={(e) => handleEmailCheck(e)}
                        // required
                        />
                        {errors.email && touched.email ? (
                            <p className="error">{errors.email}</p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>

                        <Input.Password
                            type="password"
                            id="password"
                            name="password"
                            className={errors.password && touched.password ? "input-err" : ""}
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        // required
                        />
                        {errors.password && touched.password ? (
                            <p className="error">{errors.password}</p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div>

                        <p className='loginchange'>
                            New user ? Please <a onClick={() => navigate("/")}>Sign Up</a> Now
                        </p>

                    </div>
                    <br></br>
                    <button type="submit" className="btn-signup">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;