import { useState } from "react";
import Header from "./Header"
import Sidebar from "./Sidebar";
import Data from "./Data";
import logo from "./logo.jpg";
import { auth, provider } from "./firebase";

function App() {
  const [user,setUser] = useState(null)

  const signIn=()=>{
    auth.signInWithPopup(provider).then(({user})=>{
      setUser(user)
    }).catch(error=>{
      alert(error.message);
    })
  }
  return (
    <>
    {
      user ? (
        <>
        <Header photoURL={user.photoURL}/>
            <div className="App">
                <Sidebar/>
                <Data/>
            </div>
         </>
       ):(
         <div className="loginWrap">
              <img src={logo} alt="logo"/>
              <button onClick={signIn}>Login To ZenDrive</button>
         </div>
         )
     }
    </>
  )
}

export default App;
