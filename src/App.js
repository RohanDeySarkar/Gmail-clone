import React, { useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import Login from './components/Login';

import {Switch, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {selectSendMessageIsOpen} from './features/mailSlice';
import {selectUser, login, logout} from './features/userSlice';

import {auth} from './firebase';

function App() {

  const dispatch = useDispatch();

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(login(
          {
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          }
        ))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (

    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          
          <Switch>
            <Route exact path="/">
              <EmailList />
            </Route>
            <Route exact path="/mail">
              <Mail />
            </Route>
          </Switch>
        </div>

        {sendMessageIsOpen && <SendMail />}
        
      </div>
      )}
    </>
  );
}

export default App;
