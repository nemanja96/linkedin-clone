import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { auth } from './firebase';
import Widgets from './Widgets';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
     {!user ? (
     <Login />
     ):(
      <>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>
       )}
    </div>
  );
}

export default App;
