import logo from '../assets/footerLogo.png';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../App';
import { useEffect, useState } from 'react';
import { RiSunLine } from 'react-icons/ri'
import { IoIosMoon } from 'react-icons/io'
import toast from 'react-hot-toast';

function Navbar() {

  const { user, signOutUser } = useAuth()
  const [theme, setTheme] = useState("dark");

  const handelSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Sign Out Successfully', {})
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    html.setAttribute("data-theme", theme);
  }, [theme]);

  const handelChangeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  }

  const links = <div className='hidden lg:flex'>
    <li><Link to='/' className="text-lg font-medium underline">Home</Link></li>
    <li><NavLink to="/aboutUs" className="text-lg font-medium underline">About Us</NavLink></li>
    <li><NavLink to="/contactUs" className="text-lg font-medium underline">Contact</NavLink></li>
    <li><NavLink to="/support" className="text-lg font-medium underline">Support</NavLink></li>
  </div>

  const smLinks = <>
    <li><NavLink to='/' className="btn btn-outline text-lg w-full">Home</NavLink></li>
    <li><NavLink to="/aboutUs" className="btn btn-outline text-lg w-full">About Us</NavLink></li>
    <li><NavLink to="/contactUs" className="btn btn-outline text-lg w-full">Contact</NavLink></li>
    <li><NavLink to="/support" className="btn btn-outline text-lg w-full">Support</NavLink></li>
  </>


  return (
    <section className='w-full bg-base-100 block fixed top-0 z-50 left-1/2 translate-x-[-50%]'>
      <div className="navbar bg-base-100 max-w-[1535px] mx-auto px-6">
        <div className="flex-1">
          <Link to="/">
            <img className='max-h-20 border border-dashed border-base-content rounded-md' src={logo} alt="" />
          </Link>
          <span onClick={handelChangeTheme} className="btn btn-sm text-2xl hidden md:block ml-2">
            {
              (theme === "dark") ? <RiSunLine /> : <IoIosMoon />
            }
          </span>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* <li><NavLink to="/">Home</NavLink></li> */}
            <li><NavLink to="/marathons" className="sm:text-lg font-medium underline">Marathons</NavLink></li>
            {
              user ? <li><NavLink to="/dashboard/addMarathon" className="text-lg font-medium underline hidden sm:flex">Dashboard</NavLink></li> : ''
            }
            {links}
          </ul>
          <div>
            {
              user ?
                <div className="relative group">
                  <label htmlFor="my-drawer-4" className="drawer-button btn px-1 outline-cyan-500 outline-2 outline outline-offset-1 border-none hover:outline-cyan-400 w-12 h-12 rounded-full overflow-hidden">
                    <img className="max-w-full max-h-full" src={user?.photoURL} alt="" />
                  </label>
                  <div className="absolute top-12 right-0 bg-white shadow-lg border rounded w-60 p-2 hidden group-hover:block z-20">
                    <ul>
                      <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer font-semibold">{user?.displayName}</li>
                      <br />
                      <li><NavLink to="/dashboard/addMarathon" className="btn btn-outline text-lg w-full">Dashboard</NavLink></li>
                      {smLinks}
                      <Link onClick={handelSignOut} className="btn btn-outline text-lg w-full">Log Out</Link>
                    </ul>
                  </div>
                </div> :
                <div className='flex items-center'>
                  <Link to="/login" className="btn btn-sm sm:btn-md mr-1">Login</Link>
                  <div className="relative group">
                    <label htmlFor="my-drawer-4" className="drawer-button btn px-1 outline-cyan-500 outline-2 outline outline-offset-1 border-none hover:outline-cyan-400 w-12 h-12 rounded-full overflow-hidden">
                      <img className="max-w-full max-h-full" src='/favicon.png' alt="" />
                    </label>
                    <div></div>
                    <div className="absolute top-12 right-0 bg-white shadow-lg border rounded w-60 p-2 hidden group-hover:block z-20">
                      <ul>
                        {smLinks}
                      </ul>
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
