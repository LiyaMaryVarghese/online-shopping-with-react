import {signInWithGooglePopup,
     createUserDocumentFromAuth,
}from '../../utils/firebase/firebase.util';
import SignUpForm from '../../component/sign-up/sign-up.component';
import SignIn from '../../component/sign-in/sign-in.component';
import './authentictaion.styles.scss';

const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div className='authentication-container'>
            
            <SignIn />
            <SignUpForm />
        </div>
    );
};

export default Authentication;