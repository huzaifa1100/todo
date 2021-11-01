import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <section className="ftco-section">
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-4 p-md-5">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-user-o"></span>
                            </div>
                            <h3 className="text-center mb-4">Create a new Account</h3>
                            <form action="#" className="login-form">
                                <div className="form-group">
                                    <input type="email" className="form-control rounded-left" placeholder="Email" required />
                                </div>
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control rounded-left" placeholder="UserName"
                                        required />
                                </div>
                                <div className="form-group d-flex">
                                    <input type="password" className="form-control rounded-left" placeholder="Password"
                                        required />
                                </div>
                                <div className="form-group d-flex">
                                    <input type="password" className="form-control rounded-left" placeholder="Confirm Password"
                                        required />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block rounded submit p-3 px-5">Signup</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className='text-white'>Have an account? <Link to="/login" className="text-white">Click here to Login!</Link></p>
            </div>
        </section>
    );

}


export default Signup;