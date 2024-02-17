import React, { useContext, useRef } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { TbFidgetSpinner } from 'react-icons/tb';
import { toast } from 'react-toastify';



const Login = () => {

    const {  loading,signIn,googleSignIn,resetPassword, setLoading } = useContext(AuthContext)
      
    const navigate= useNavigate();
    const location= useLocation();
    const emailRef= useRef()

    const from= location.state?.from?.pathname || '/' ;

    const handleLogin = (event) => {
        event.preventDefault();
        const email= event.target.email.value;
        const password= event.target.password.value;
        console.log(email,password)

        signIn(email,password)
        .then( (result) =>{
          
          const loggedUser= result.user;
          console.log(loggedUser)
          alert('congratulation!! user successfully login')
         // setError('')
          event.target.reset ();
         navigate(from ,{replace: true})

        })

        .catch( (error)=>{
           console.log(error.message)
          // setError(' sorry!! user name or password do not match')
           //setSuccess('')
        })
     }

    


    const handleGoogleSignIn = () => {
        console.log('google diye login koro')
        googleSignIn()
        .then( (result) => {
          const user= result.user;
          console.log(user)
        //  setSuccess('congratulations!!  user successfully login by google')
          navigate(from ,{replace: true})

        } )
        .catch( (error) => {
            setLoading(false)
         console.log('error' ,  error.message)
         alert(error.message)
        } );
     }

     const handleResetPassword = () => {
         console.log( 'password bhule gechen!!!!! ' )
          const email= emailRef.current.value;
//return console.log(email)
          resetPassword(email)
          .then(() => {
            toast.success('Please check your email for reset link')
            setLoading(false)
          })
          .catch(err => {
            setLoading(false)
            console.log(err.message)
            toast.error(err.message)
          })
    
     }

 
    return (
        <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Log In</h1>
            <p className='text-sm text-gray-400'>
              Sign in to access your account
            </p>
          </div>
          <form onSubmit={handleLogin}
            noValidate=''
            action=''
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  ref={emailRef}
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-sm mb-2'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  id='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                />
              </div>
            </div>
  
            <div>
              <button
                type='submit'
                className='bg-rose-500 w-full rounded-md py-3 text-white'
              >
                {
                    loading ? (<TbFidgetSpinner className='m-auto animate-spin' size={24} ></TbFidgetSpinner> ) : 'Continue'
                }
                
              </button>
            </div>
          </form>
          <div className='space-y-1'>
            <button onClick={handleResetPassword}  className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
              Forgot password?
            </button>
          </div>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Login with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
          <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
            <FcGoogle size={32} />
  
            <p  onClick={handleGoogleSignIn} >Continue with Google</p>
          </div>
          <p className='px-6 text-sm text-center text-gray-400'>
            Don't have an account yet?{' '}
            <Link
              to='/signup'
              className='hover:underline hover:text-rose-500 text-gray-600'
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    );
};

export default Login;
