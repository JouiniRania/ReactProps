import React from 'react';
import './App.css';
import image from './images/image1.jpg';
import componentprofile from './profile/componentprofile';

function App() {
  const profile = {
    fullname: "Jouini Rania",
    bio: "Informatique",
    profession: "Ingenieur"
  };


  const handleName = e => {
    alert(profile.fullname);
  };
 
  return (
    <div className="App">
    <componentprofile profile={profile}>
    <img style={{width:"500px",height:"300px",  border: "1px solid black", marginTop: "50px"}}src={image}/>
    <br></br>
    <a onClick={handleName}>Jouini Rania</a>
    </componentprofile>
    </div>
  );
}

export default App;

