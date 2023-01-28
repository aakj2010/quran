import React from 'react'
import logo from '../../Assets/quran-logo.svg'
import bg from '../../Assets/bg.png'
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { env } from '../../config';


function Login() {

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            phonenumber: "",
            password: ""
        },
        validate: (values) => {
            let errors = {};

            if (values.email === "" || values.phonenumber === "") {
                errors.email = "Please enter email or phone number";
            }

            if (values.password === "") {
                errors.password = "Please enter correct password";
            }

            return errors;
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post(`${env.api}/login`, values);
                if (loginData.status === 200) {
                    // alert("Logged in Succesfully");
                    navigate("/homepage");
                    window.localStorage.setItem("app-token", loginData.data.token)
                }
                console.log(loginData);

            } catch (error) {
                alert(error.response.data.message)
                console.log(error);
            }

        }
    });

    return (
        <>
            <div className='login'>

                <div className='pray-login-wrapper item-to-hide container border d-flex align-items-center justify-content-center'
                    style={{ backgroundImage: `url(${bg})` }}>
                    <div className='pray-login'>
                        <div className='pray-title text-center'>
                            <h3>என் இறைவனே!</h3>
                        </div>
                        <div>
                            <p className='pray-p'>
                            நீயே அளவற்ற அருளாளன்; நிகரற்ற  இரக்கமுடையவன்; நீயே அகிலங்களின்
அதிபதி; நீயே அறிவிப்பவன்; நீயே
வழிகாட்டுபவன்; நீயே மன்னிப்பவன்;
நீயே பிழை பொறுப்பவன்; நீயே 
எனக்காகப் பொறுப்பேற்றுக் கொள்பவன்.
நான் உன்னை கொண்டே
திருப்தியடைகிறேன். என்னை நீ
நேர்வழியில் ஆக்குவாயாக.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='container user-login-wrapper d-flex align-items-center justify-content-center '>
                    <div className='user-login d-flex align-items-center justify-content-center' >
                        <div className='mt-3 image-logo'>
                            <img src={logo} alt="" width="80px" height="80px" />
                        </div>
                        <div className="d-flex align-items-center justify-content-center login-title">
                            <h4 className="center mt-2 mb-3 login-title"
                                style={{ color: "rgb(0, 113, 227)" }}>Quran</h4>
                            <p className='login-subtitle' style={{ color: "rgb(0, 113, 227)" }}>drfazl</p>
                        </div>
                        <div>
                            <form onSubmit={formik.handleSubmit}>
                                <div class=" mb-4 col-xs-6">
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option >Select language</option>
                                        <option selected value="English">English</option>
                                        <option value="Tamil">Tamil</option>
                                    </select>
                                </div>

                                <div className="mt-3 col-xs-6">
                                    <input className={`form-control ${formik.errors.email || formik.errors.phonenumber ? `input-error` : ``}`}
                                        type={"text"}
                                        placeholder={"E-mail or Phone Number"}
                                        value={formik.values.email || formik.errors.phonenumber}
                                        onChange={formik.handleChange}
                                        name={`'email' || 'phonenumber`} />
                                    <span style={{ color: 'red' }}>{formik.errors.email || formik.errors.phonenumber}</span>
                                </div>

                                <div className="mt-3 col-xs-6">
                                    <input className={` form-control ${formik.errors.password ? `input-error` : ``}`}
                                        type={"text"}
                                        placeholder={"Password"}
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        name="password" />
                                    <span style={{ color: 'red' }}>{formik.errors.password}</span>
                                </div>

                                <div className="forgot d-flex justify-content-between mt-2 mb-3">
                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="form1Example3"
                                        />
                                        <label className="form-check-label" for="form1Example3">
                                            {" "}
                                            Remember me{" "}
                                        </label>
                                    </div>
                                    <Link className='skip-login' to="/">
                                        <small> Forgot your password?</small>
                                    </Link>
                                </div>

                                <button
                                    // to='/questions'
                                    type={"submit"}
                                    className="form-control btn btn-lg btn-block btn-sm text-light mt-3"
                                    style={{ backgroundColor: "rgb(0, 113, 227)" }}
                                    value="Submit"
                                >
                                    Login
                                </button>

                                <button
                                    // to='/questions'
                                    type={"submit"}
                                    className="form-control btn-google btn-lg btn-block btn-sm mt-3"
                                    value="Submit"
                                >
                                    Login with Google
                                </button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className='mb-3 mt-3 text-center'>
                            <Link className='skip-login' to="/chapter">
                                <small > Skip Login</small>
                            </Link>
                        </div>
                        <div className='mb-3 mt-3 text-center'>
                            <small>
                                <span className='signup-link'>Dont have an Account? </span>
                                <Link className='skip-login' to="/signup">Signup here</Link>
                            </small>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login