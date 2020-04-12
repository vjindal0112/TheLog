import Link from "next/link";
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppContext';
import { FeedItem, NavBar, Button, Popup, Post, Spacer } from "../components";
import { auth } from '../firebase';

export default function Index() {
  const [popupShown, setPopupShown] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  // const { userId } = useContext(AppContext);
  // const loggedIn = userId !== ""
  const loggedIn = false;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAuthError('');
    auth().createUserWithEmailAndPassword(emailInput, passwordInput).catch(function(error) {
      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
      setAuthError(error.message);
    });
  }

  useEffect(() => {
    // Update the document title using the browser API
    auth().onAuthStateChanged(function(user: firebase.User) {
      if (user) {
        localStorage.setItem('userId', user.uid);
        if(authError == '') {
          setPopupShown(false);
        }
      } else {
        localStorage.setItem('userId', null);
      }
    });
  });

  return (
    <div>
      <NavBar
        loggedIn={loggedIn}
        onClickSignUp={() => setPopupShown(true)}
        onClickSignIn={() => setPopupShown(true)}
      />
      <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
        <Post/>
        <Spacer height="1rem" />
        <FeedItem name="Varun Jindal" handle="vjindal" tasks={["watched 280 lecture", "worked out", "created a web app!"]} date='today' time='30 minutes ago' streakCount={256}/>
      </div>
      {popupShown && (
        <Popup onClickOverlay={() => 'sdf'}>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="text" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <p>{authError}</p>
        </Popup>
      )}
    </div>
  );
}
