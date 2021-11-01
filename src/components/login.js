
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";



const Login = () => {

    const history = useHistory();

    const [state, setState] = useState(
        {
            username: "",
            password: ""
        }
    );

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (state.username === 'admin') {
            if (state.password === 'admin') {
                history.push("/");
            }
            else {
                alert('You have entered wrong password. Right one is : admin');
            }
        }
        else {
            alert('You have entered wrong username. Right one is : admin');
        }

    };

    return (
        <section className="ftco-section">
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-4 p-md-5">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-user-o"></span>
                            </div>
                            <h3 className="text-center mb-4">Have an account?</h3>
                            <form onSubmit={handleSubmit} className="login-form">
                                <div className="form-group">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        className="form-control rounded-left"
                                        placeholder="Username"
                                        value={state.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group d-flex">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="form-control rounded-left"
                                        placeholder="Password"
                                        value={state.password}
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block rounded submit p-3 px-5">Get
                                        Started</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <p className='text-white'>Dont have an account ? <Link to="/signup" className="text-white">Click here to SignUp!</Link></p>
            </div>
        </section>
    );

};


export default Login;