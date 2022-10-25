import React from "react";
import firebase from "firebase/compat/app";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@mui/material";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};
export default Home;

const SignInButton = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <Button variant="contained" onClick={signInWithGoogle}>
      <p>Sign in with Google</p>
    </Button>
  );
};
const SignOutButton = () => {
  return (
    <Button variant="contained" onClick={() => auth.signOut()}>
      <p>Sign Out</p>
    </Button>
  );
};
const UserInfo = () => {
  return (
    <div className="userinfo">
      <img src={auth.currentUser.photoURL} alt="" />
      <p>{auth.currentUser.displayName}</p>
    </div>
  );
};
