import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../redux/features/auth/authAPI';

const Register = () => {
    const [message,setMessage] =useState('');
    const [username,setUsername] = useState('');
        const [email,setEmail] =useState('');
        const [password,setPassword] = useState('');

        const [registerUser, { isLoading }] = useRegisterUserMutation();
        const navigate = useNavigate();




        const handleLRegister = async(e) => {
            e.preventDefault();
            const data = {
                username,
                email,
                password
            }
            try {
                await registerUser(data).unwrap();
                alert("Registration successful!");
                navigate('/login');
            } catch (error) {
                setMessage("Registration failed");
              }

        }
    
  return (
    <section className='h-screen flex items-center justify-center'>
    <div className='max-w5 border shadow bg-primary-dark mx-auto p-8'>
        <h2 className='text-2xl font-semibold pt-5'>Please Register</h2>
        <form onSubmit={handleLRegister} className='space-y-5 max-w-sm mx-auto pt-8'>
            <input type="text" name='username' id='username'
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username ' required
            className='w-full bg-gray-100 focus:outline-none px-5 py-3'/>
            <input type="email" name='email' id='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Address' required
            className='w-full bg-gray-100 focus:outline-none px-5 py-3'/>
            <input type="password" name='password' id='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' required
            className='w-full bg-gray-100 focus:outline-none px-5 py-3'/>

            {
                message && <p className='text-white'>{message}</p>

            }

            <button type='submit' 
            className='w-full mt-5 bg-white text-primary hover:bg-gray-400 font-medium py-3 rounded-md'>Register</button>



        </form>
        <p className='my-5 italic text-white text-sm text-center'> Have an account? Please  
            <Link to="/login" className='text-white px-1 underline'> Login </Link> here.</p>
    </div>
</section>
  )
}

export default Register