import { Link } from 'react-router-dom';
import logo from '../assets/footerLogo.png';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <section className='bg-base-200 text-base-content '>
      <footer className="footer p-10 max-w-[1380px] mx-auto">
        <aside className=''>
          <Link to='/' className="bg-transparent hover:bg-transparent border-none text-xl px-0">
            <img className='max-h-20 border border-dashed border-base-content rounded-md' src={logo} alt="" />
          </Link>
          <p className="max-w-xs">
            RunRoute connects runners and organizers for seamless marathon events. Join us to manage, participate, and excel in your marathon journey.
          </p>
        </aside>
        <nav className=''>
          <h6 className="footer-title">Links</h6>
          <div className="flex gap-3 md:justify-normal justify-center">
            <Link to='https://github.com/sheikhmuhammadantor' target="_blank" className="text-2xl outline outline-2 hover:outline-indigo-800 cursor-pointer delay-100 rounded-full p-1 hover:text-indigo-700"><FaGithub /></Link>
            <Link to='https://www.linkedin.com/in/sheikh-muhammad-antor-570765290/' target="_blank" className="text-2xl outline outline-2 hover:outline-indigo-800 cursor-pointer delay-100 rounded-full p-1 hover:text-indigo-700"><FaLinkedin /></Link>
            <Link to='https://x.com/iamAntorSheikh' target="_blank" className="text-2xl outline outline-2 hover:outline-indigo-800 cursor-pointer delay-100 rounded-full p-1 hover:text-indigo-700"><FaTwitter /></Link>
            <Link to='https://web.facebook.com/sheikhmuhammadantor' target="_blank" className="text-2xl outline outline-2 hover:outline-indigo-800 cursor-pointer delay-100 rounded-full p-1 hover:text-indigo-700"><FaFacebook /></Link>
          </div>
        </nav>
        <nav className=''>
          <h6 className="footer-title">Links</h6>
          <Link to='/aboutUs' className="link link-hover">About</Link>
          <Link to='/contactUs' className="link link-hover">Contact Us</Link>
          <Link to='/support' className="link link-hover">Support</Link>
        </nav>
      </footer>
      <section className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by RunRoute</p>
        </aside>
      </section>
    </section>
  )
}

export default Footer
