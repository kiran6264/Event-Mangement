import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { auth } from '../../Firebase/firebase';
import { useAuth } from '../../App';
import { Helmet } from "react-helmet";

function Register() {

  const { user, createUser, googleSignIn } = useAuth()
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  if (user?.email) return navigate('/');

  const handelShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const url = e.target.url.value;
    const password = e.target.password.value;
    const upperRegex = /[A-Z]/;
    const lowerRegex = /[a-z]/;

    const profile = {
      displayName: name,
      photoURL: url
    }

    if (password.length < 6) {
      return setError("Password must be 6 character or longer.")
    }

    if (!upperRegex.test(password)) {
      setError("Password Must have one Uppercase letter")
      return toast.error('Invalid Password !', {})
    }

    if (!lowerRegex.test(password)) {
      setError("Password Must have one Lowercase letter")
      return toast.error('Invalid Password !', {})
    }

    createUser(email, password)
      .then(() => {
        setError('')
        e.target.reset()
        toast.success('Successfully Register !', {})
        navigate('/');
        // Profile Update ;
        updateProfile(auth?.currentUser, profile)
          .then(() => {
            toast.success("Profile Update Successful !");
            e.target.reset();
          })
          .catch(() => {
            toast.error("Something Error Happen !")
          })
      })
      .catch(err => {
        setError(err.message);
      })
  }

  const handelGoogleLogIn = (e) => {
    googleSignIn()
      .then(() => {
        toast.success('Successfully Sign In !', {})
        navigate('/');
      })
      .catch(error => {
        toast.error(`${error.message}`, {})
      })
  }

  return (
    <div className="hero bg-base-200 my-8">
      <Helmet>
        <title>RunRoute | Register</title>
      </Helmet>
      <div className="hero-content flex-col my-5">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold my-5">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name='url' placeholder="URL" autoComplete='on' className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name='password' placeholder="Password" className="input input-bordered" required autoComplete="off" />
              <span onClick={handelShowPassword} className='btn btn-sm absolute bottom-2 right-2 text-lg'>
                {
                  showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                }
              </span>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary mb-1 disabled:btn-neutral disabled:opacity-60 disabled:text-gray-500">Register</button>
              {
                error && <small className='text-red-500'>{error}</small>
              }
              <p className='mt-2'>Already have an Account ? Place <Link to="/login" className='font-semibold hover:underline'>Log In</Link></p>
              <button type='button' onClick={handelGoogleLogIn} className="btn my-2 btn-warning">Register With Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
