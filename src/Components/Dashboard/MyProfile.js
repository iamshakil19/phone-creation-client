import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    return (
        <div>
            <h2>This is my profile</h2>
        </div>
    );
};

export default MyProfile;