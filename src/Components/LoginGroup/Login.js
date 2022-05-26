import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import googleLogo from '../../Assets/google2.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../Hooks/useToken';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();

    const token = useToken(user || googleUser)
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    let signErrorMessage;
    if (error || googleError) {
        signErrorMessage = <p className='text-red-500'>{error?.message || googleError?.message}</p>
    }

    if (token && !error) {
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    const handleForgotPassword = () => {
        console.log(getValues);
        const email = getValues("email")
        console.log(email);
        if (!email.length || !/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
            return toast.error("Provide a valid email");
        }
        sendPasswordResetEmail(getValues("email"))
        toast.success("Password Reset email is sent");
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className='flex justify-center my-16'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">Login</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" class="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            {
                                signErrorMessage
                            }
                            <input className='btn w-full max-w-xs rounded-3xl my-3' type="submit" value="Login" />
                            <p>Need an account? <Link className='text-primary' to={'/register'}>Register</Link></p>
                            <p onClick={handleForgotPassword} className='cursor-pointer text-primary '>Forgot password ?</p>

                        </form>
                        <div class="divider">OR</div>

                        <button onClick={() => signInWithGoogle()} className='btn rounded-3xl'><img className='w-8 inline-block mr-3' src={googleLogo} alt="" /> Login With Google</button>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;