import { useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../App';
import { Helmet } from "react-helmet";

function Login() {

    const { user, signInUser, googleSignIn, setEmail } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();
    const location = useLocation();

    if (user?.email) return navigate('/');

    const handelShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handelLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            return toast.error("Password must be 6 character or longer.", {});
        }

        signInUser(email, password)
            .then(() => {
                toast.success('Successfully Sign In !', {})
                e.target.reset()
                if (location?.state) {
                    navigate(location?.state?.from);
                } else {
                    navigate('/')
                }
            })
            .catch(() => {
                toast.error('Login Fail, auth/invalid-credential !', {})
            })
    }

    const handelGoogleLogIn = () => {
        googleSignIn()
            .then(() => {
                toast.success('Successfully Sign In !', {})
                if (location?.state) {
                    navigate(location?.state?.from);
                } else {
                    navigate('/')
                }
            })
            .catch(error => {
                toast.error(`${error.message}`, {})
            })
    }

    const handelForgerPassword = () => {
        setEmail(emailRef.current?.value)
    }


    return (
        <div className="hero bg-base-200 my-8">
            <Helmet>
                <title>RunRoute | Login</title>
            </Helmet>
            <div className="hero-content flex-col my-5">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold my-5">Login now !</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password' placeholder="Password" className="input input-bordered" required autoComplete="off" />
                            <span onClick={handelShowPassword} className='btn btn-sm absolute bottom-12 right-2 text-lg'>
                                {
                                    showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                }
                            </span>
                            <label className="label">
                                <button onClick={handelForgerPassword}><Link to="/reset-password" className="label-text-alt link link-hover">Forgot password?</Link></button>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Log In</button>
                            <p className='mt-3'>Create a new Account ? Place <Link to="/register" className='font-semibold hover:underline'>Register</Link></p>
                            <button type='button' onClick={handelGoogleLogIn} className="btn my-2 btn-warning">Log In With Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
