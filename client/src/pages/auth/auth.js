import React from 'react';

import SignUp from '../../components/signup/signup';
import SignIn from '../../components/signin/signin';

var styles = {
    auth_wrapper: {
        display: 'flex',
        justifyContent: 'space-around'
    }
};

function Auth() {
    return (
        <div style={styles.auth_wrapper}>
            <SignUp />
            <SignIn />
        </div>
    );
}


export default Auth;