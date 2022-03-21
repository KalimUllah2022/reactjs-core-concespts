/** @format */

import logo from "./logo.svg";
import "./App.css";
const kali = {
  Name: 'Kalim Ullah', Profession: 'Software Engineer'
}
const number = 55555;
function App() {
  return (
    <div className='App'>
      <h1>Kalim Ullah</h1>
      <Person></Person>
      <h5>New Components. YAY</h5>
      <Friend></Friend>
      <Kali></Kali>
      <p>Name: { kali.Name}</p>
      <i>Name: {kali.Profession}</i>
      <br />
      <span>Total: {11111 + number}</span>
    </div>
  );
}
function Person() {
  return (
    <div className='person'>
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Cricket</p>
    </div>
  );
}

function Friend() {
  return (
    <div class='container'>
      <a href="https://youtube.com">Click Hire!</a>
      <h3>Name: Ajay Devgun</h3>
      <p>Job: Maramari</p>
    </div>
  )
}

function Kali() { 
  return (
    <div class="myDiv">
      <a href="https://youtube.com">Click Hire!</a>
      <p>Lorem Ipsum</p>
    </div>
  )
}

export default App;
