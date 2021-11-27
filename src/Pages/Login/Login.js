
import { useState } from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, handleUserLogin, setError, error } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .catch((error) => setError(error.message));
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = () => {
        handleUserLogin(email, password);
    };

    return (
        <div>
            <div className="container  d-flex justify-content-center my-5 py-5">
                <div>
                    <h1>Please Log in To Proceed </h1>
                    <div className='row'>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onChange={handleEmail} required  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <p> {error}</p>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 col-md-6 ">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onChange={handlePassword} required  type="password" className="form-control " id="exampleInputPassword1" />
                            
                        </div>
                    </div>
                    <button onClick={handleLogin} type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={handleGoogleLogin} className="btn btn-success m-2">Google Sign in</button>
                    <div>
                        <p>New Here?</p><Link to='/sign'>
                            <button type="submit" className="btn btn-info">Register Now</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
