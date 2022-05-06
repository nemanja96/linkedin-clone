import React, {useState} from 'react'
import './Login.css'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(""); 
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(prevState => !prevState);
    }

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error));
    }

    const register = () => {
        if(!name) {
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName : name,
                photoURL : profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
            })
        })
        .catch(error => alert(error));
    }

  return (
    <div className='login'>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png" />
        <h3>Make the most of your professional life</h3>

        <div className='form'>
            { show && <label for="name">Full name (require if registering)</label> }
            { show && <input value={name} onChange={e => setName(e.target.value)} type="text" name="name"/> }
            { show && <label for="photo">Profile photo URL</label> }
            { show && <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" name="photo" /> }
            <label for="email">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email"/>
            <label for="password">Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" />
            {show ? <button type='submit' onClick={register}>Agree &amp; Join</button> : <button type="submit" onClick={loginToApp}>Sign in</button> }
            <p>{ show ? "Already on LinkedIn?" : "New to LinkedIn?"} <span onClick={handleClick} className="switcher">{ show ? "Sign in" : "Join now"}</span></p>
        </div>

       

        {/* <p>Already registered?{" "}<span className='login__register' onClick={loginToApp}>Login</span></p> */}
    </div>   
  )
}


export default Login