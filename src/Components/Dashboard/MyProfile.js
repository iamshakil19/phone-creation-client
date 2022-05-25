import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import editLogo from '../../Assets/edit.png'
import fbLogo from '../../Assets/fb.png'
import inLogo from '../../Assets/in.png'
import twitterLogo from '../../Assets/twitter.png'
import placeholder from '../../Assets/placeholder.jpg'
import Loading from '../Shared/Loading';

const MyProfile = () => {

    const [user, loading] = useAuthState(auth)
    const { photoURL, displayName, email } = user
    const [myData, setMyData] = useState({})

    const { myEmail, age, education, facebook, gpa, institute, linkedin, name, pYear, permanentA, phone, presentA, profession, relation, twitter } = myData

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data[0])
                setMyData(data[0])
            })
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-5 mt-5'>
            <h2 className='text-2xl font-bold text-slate-700'>My Profile</h2>
            <div class="divider"></div>

            <label for="my-modal" class="modal-button cursor-pointer"><img src={editLogo} alt="" className='w-5 inline' /><span className='ml-1 font-bold'>Edit</span></label>


            <div className='mx-auto w-72 md:w-[500px]'>
                <div>
                    <div className='grid grid-cols-2'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                {
                                    photoURL ?
                                        <img src={photoURL} alt="" />
                                        :
                                        <img src={placeholder} alt="" />
                                }
                            </div>
                        </div>
                        <div className='flex items-center'>
                            {
                                facebook ?
                                    <a href={facebook}> <img className='w-8 mx-2' src={fbLogo} alt="" /> </a>
                                    :
                                    <a href=""> <img className='w-8 mx-2' src={fbLogo} alt="" /> </a>
                            }
                            <a href=""> <img className='w-8 mx-2' src={inLogo} alt="" /> </a>
                            <a href=""> <img className='w-8 mx-2' src={twitterLogo} alt="" /> </a>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                        <div className='mb-3'>
                            <p className='font-bold'>Name</p>
                            <p className='text-[16px]'>{displayName}</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Email</p>
                            <p className='text-[16px]'>{email}</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Phone</p>
                            <p className='text-[16px]'>
                                {
phone ? phone : "..."
                                }
                            </p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Age</p>
                            <p className='text-[16px]'>23</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Present Address</p>
                            <p className='text-[16px]'>Mirpur 13, Dhaka</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Permanent Address</p>
                            <p className='text-[16px]'>Barishal, Bangladesh</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Education Level</p>
                            <p className='text-[16px]'>SSC</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>GPA</p>
                            <p className='text-[16px]'>3.92</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Passing Year</p>
                            <p className='text-[16px]'>2017</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Institute Name</p>
                            <p className='text-[16px]'>Bagdha High School and collage</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Relationship</p>
                            <p className='text-[16px]'>Single</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Profession</p>
                            <p className='text-[16px]'>Developer</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;