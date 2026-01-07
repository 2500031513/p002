import React, { Component } from 'react';
import './App.css'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: "Aditya kotha",
        Role: "Developer",
        bio: "I am a passionate developer with experience in building web applications.",
        status: [{label:"Posts",value: "84"},
          {label:"Followers",value: "2.5K"},
          {label:"Following",value: "190"}]
        
      }
    };
  }
  render() {
    const {data} = this.state;
    const BASEURL = import.meta.env.BASE_URL;
    return (
      <div className='app'>
         <div className='profile'>
          <img  src={BASEURL + "public/adityakotha.jpg"} alt='Profile' />
          <div className='info'>
             <legend className='name'>{data.name}</legend>
             <legend className='role'>{data.Role}</legend>
             <legend className='bio'>{data.bio}</legend>
             <button className='follow'>Follow</button>
             <button className='message'>Message</button>
          </div>
          
        </div> 
        <div className='status'>
          {data.status.map((item, index) => (
            <div key={index} className='status-item'>
              <legend className='value'>{item.value}</legend>
              <legend className='label'>{item.label}</legend>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;