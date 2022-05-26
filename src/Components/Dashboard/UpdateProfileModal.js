import { async } from '@firebase/util';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const UpdateProfileModal = ({ UpdateProfileModal, setUpdateProfile, refetch }) => {
    const [firebaseUser, loading] = useAuthState(auth)

    const handleUpdate = async (event) => {
        event.preventDefault()
        const number = event.target.number.value
        const age = event.target.age.value
        const presentAd = event.target.presentAd.value
        const permanentAd = event.target.permanentAd.value
        const education = event.target.education.value
        const gpa = event.target.gpa.value
        const year = event.target.year.value
        const institute = event.target.institute.value
        const relation = event.target.relation.value
        const profession = event.target.profession.value
        const facebook = event.target.facebook.value
        const linkedin = event.target.number.value

        const profileData = {number, age, presentAd, permanentAd, education, gpa, year, institute, relation, profession, facebook, linkedin}
        
        fetch(`http://localhost:5000/user/${firebaseUser.email}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profileData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                setUpdateProfile(null)
                toast.success(data?.message)
            })

    }
    return (
        <div>
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg mb-3">Update Your Profile</h3>
                    <form onSubmit={handleUpdate} className="">
                        <div  className='grid grid-cols-2 gap-3'>
                            <div>
                                <label htmlFor="number">Number</label>
                                <br />
                                <input name='number' type="text" id='number' placeholder='Phone number' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>

                            <div>
                                <label htmlFor="age">Age</label>
                                <br />
                                <input name='age' type="text" id='age' placeholder='Your age' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>
                            <div>
                                <label htmlFor="presentAd">Present Address</label>
                                <br />
                                <input name='presentAd' type="text" id='presentAd' placeholder='Present address' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>
                            <div>
                                <label htmlFor="permanentAd">Permanent Address</label>
                                <br />
                                <input name='permanentAd' type="text" id='permanentAd' placeholder='Permanent Address' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>
                            <div>
                                <label htmlFor="education">Education Level</label>
                                <br />
                                <input name='education' type="text" id='education' placeholder='Last Education' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>
                            <div>
                                <label htmlFor="gpa">GPA</label>
                                <br />
                                <input name='gpa' type="text" id='gpa' placeholder='GPA' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>
                            <div>
                                <label htmlFor="year">Passing Year</label>
                                <br />
                                <input name='year' type="text" id='gpa' placeholder='Passing year' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>
                            <div>
                                <label htmlFor="institute">Institute Name</label>
                                <br />
                                <input name='institute' type="text" id='' placeholder='institute' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>
                            <div>
                                <label htmlFor="relation">Relationship</label>
                                <br />
                                <input name='relation' type="text" id='' placeholder='Relationship status' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>
                            <div>
                                <label htmlFor="profession">Profession</label>
                                <br />
                                <input name='profession' type="text" id='' placeholder='Profession' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>
                            <div>
                                <label htmlFor="facebook">Facebook Link</label>
                                <br />
                                <input name='facebook' type="text" id='' placeholder='Facebook profile link' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>
                            <div>
                                <label htmlFor="linkedin">LinkedIn</label>
                                <br />
                                <input name='linkedin' type="text" id='' placeholder='Linkedin profile link' className='border-2 border-dotted rounded-md focus:outline-none p-1 mt-1' />
                            </div>
                        </div>
                        <input className='btn btn-sm bottom-0 mt-4 float-right' type="submit" value="Update"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfileModal;