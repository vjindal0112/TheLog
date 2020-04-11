import Link from "next/link";
import { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { FeedItem, NavBar, Button, Popup, Post, Spacer } from "../components";

export default function Index() {
  const [popupShown, setPopupShown] = useState(false);
  const { userId } = useContext(AppContext);
  const loggedIn = userId !== ""

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
        <Popup onClickOverlay={() => setPopupShown(false)}>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              Password:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Popup>
      )}
    </div>
  );
}
