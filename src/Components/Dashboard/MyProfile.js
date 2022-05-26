import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import editLogo from '../../Assets/edit.png'
import fbLogo from '../../Assets/fb.png'
import inLogo from '../../Assets/in.png'
import twitterLogo from '../../Assets/twitter.png'
import placeholder from '../../Assets/placeholder.jpg'
import Loading from '../Shared/Loading';
import UpdateProfileModal from './UpdateProfileModal';
import { useQuery } from 'react-query';

const MyProfile = () => {
    const [updateProfile, setUpdateProfile] = useState(null)
    const [firebaseUser, loading] = useAuthState(auth)
    const { photoURL, displayName, email } = firebaseUser

    const { data: user, isLoading, refetch } = useQuery('user', () => fetch(`http://localhost:5000/user/${email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
const {number, age, presentAd, permanentAd, education, point, year, institute, relation, profession, facebook, linkedin} = user


    return (
        <div className='px-5 mt-5'>
            <h2 className='text-2xl font-bold text-slate-700'>My Profile</h2>
            <div class="divider"></div>

            <label onClick={() => setUpdateProfile(user)} for="update-modal" class="modal-button cursor-pointer"><img src={editLogo} alt="" className='w-5 inline' /><span className='ml-1 font-bold'>Edit</span></label>

            <div className='mx-auto w-72 md:w-[500px]'>
                <div>
                    <div className='grid grid-cols-2'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                <img src={
                                    photoURL ? photoURL : placeholder
                                } alt="" />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <a href={ facebook ? facebook : 'https://www.facebook.com/' }> <img className='w-8 mx-2' src={fbLogo} alt="" /> </a>
                            <a href={ linkedin ? linkedin : "https://www.linkedin.com/" }> <img className='w-8 mx-2' src={inLogo} alt="" /> </a>
                            <a href="https://twitter.com"> <img className='w-8 mx-2' src={twitterLogo} alt="" /> </a>
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
                            <p className='text-[16px]'>{ number ? number : <span className='text-sm'>Not available</span> }</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Age</p>
                            <p className='text-[16px]'>{ age ? age : <span className='text-sm'>Not available</span> }</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Present Address</p>
                            <p className='text-[16px]'>{ presentAd ? presentAd : <span className='text-sm'>Not available</span> }</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Permanent Address</p>
                            <p className='text-[16px]'>{ permanentAd ? permanentAd : <span className='text-sm'>Not available</span> }</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Education Level</p>
                            <p className='text-[16px]'>{ education ? education : <span className='text-sm'>Not available</span> }</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>GPA</p>
                            <p className='text-[16px]'>{ point ? point : <span className='text-sm'>Not available</span> }</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Passing Year</p>
                            <p className='text-[16px]'>{ year ? year : <span className='text-sm'>Not available</span> }</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Institute Name</p>
                            <p className='text-[16px]'>{ institute ? institute : <span className='text-sm'>Not available</span> }</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Relationship</p>
                            <p className='text-[16px]'>{ relation ? relation : <span className='text-sm'>Not available</span>}</p>
                        </div>
                        <div className='mb-3'>
                            <p className='font-bold'>Profession</p>
                            <p className='text-[16px]'>{ profession ? profession : <span className='text-sm'>Not available</span> }</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                updateProfile && <UpdateProfileModal
                    updateProfile={updateProfile}
                    setUpdateProfile={setUpdateProfile}
                    refetch={refetch}
                ></UpdateProfileModal>
            }
        </div>
    );
};

export default MyProfile;