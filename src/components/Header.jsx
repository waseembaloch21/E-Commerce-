import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

function Header() {
  const { user, setUser } = useContext(UserContext);
  console.log("user is logged in==>", user);

  const handleLogoutUser = async () =>{
   await signOut(auth);
  }

  return (
    <Link>
      <header className="bg-cyan-400 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img src='https://marketplace.canva.com/EAFzjXx_i5w/1/0/1600w/canva-blue-illustrative-e-commerce-online-shop-logo-fZejT2DpGCw.jpg' alt=""
         className='inline-block m-2 h-10 w-10 rounded-full ring-2'/>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-serif text-indigo-500">E-Commerce</span>
          </a>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/"} className="mr-5 cursor-pointer underline text-black font-bold font-serif hover:text-gray-900">Home</Link>
            <Link to={'about'} className="mr-5 cursor-pointer underline text-black font-bold font-serif hover:text-gray-900">About</Link>
            <Link to={'contactUs'} className="mr-5 cursor-pointer underline text-black font-bold font-serif hover:text-gray-900">Contact us</Link>
            <Link to={'products'} className="mr-5 cursor-pointer underline text-black font-bold font-serif hover:text-gray-900">Product</Link>
          </nav>

          {user?.isLogin? ( 
              <img src={user?.userInfo?.photoURL} alt="" className='inline-block m-2 h-10 w-10 rounded-full ring-2 ring-white'/>
            ) : (
              <Link to={'signup'} className="focus:outline-none font-serif text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Sign Up
              </Link>
            )}
            {user.isLogin ? (
            <button onClick={handleLogoutUser}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium font-serif rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
          ) : (
          <Link to={'signin'} className="focus:outline-none font-serif text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
            Log in
          </Link>
          )}
        </div>
      </header>
    </Link>

  )
}

export default Header;