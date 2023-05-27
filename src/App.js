import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Depbar from './components/Depbar';
import Chat from './components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser , logout } from './features/userSlice';
import Login from './login/Login';
import { auth } from './firebase';
import DetailForm from './login/detailform';

import { selectDepName, selectStudentYear } from './features/appSlice';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName, 

        }))
      }
      else {
        dispatch(logout());
      }
    })

  }, [dispatch] );


  const studentyear = useSelector(selectStudentYear)
  const departmentName = useSelector(selectDepName)


if(departmentName && studentyear ){

  return (
    <div className="App">

      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ): (
        <Login />
        // <DetailForm />
      )}

    </div>
  )

}
else {
  return (
    <div className="App">

      {user ? (
        <>
          <Depbar />
          <Sidebar />
          <Chat />
        </>
      ): (
        <Login />
        // <DetailForm />
      )}

    </div>
  );
}



  // return (
  //   <div className="App">

  //     {user ? (
  //       <>
  //         <Depbar />
  //         <Sidebar />
  //         <Chat />
  //       </>
  //     ): (
  //       <Login />
  //       // <DetailForm />
  //     )}

  //   </div>
  // );
}

export default App;
