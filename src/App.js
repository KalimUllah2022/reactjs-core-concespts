/** @format */

import logo from "./logo.svg";
import "./App.css";
function App() {
  // const number = 55555;
  const spekers = [
  {Name: 'Dr. Mizanur Rahman', Job: 'Malaysia'},
  {Name: 'MO Hafizur Rahman', Job: 'Bangladesh'},
  {Name: 'MO Mofizur Rahman', Job: 'Quaqata'},
  {Name: 'HM Kalim Ullah', Job: 'Software Engineer'}
]
  const names = ['Jahangir', 'Abdullah', 'Imran', 'Saiful', 'Mozib', 'Kalim Ullah', 'Yasin Arfat'];
  return (
    <div className='App'>
      {
        names.map(name=> <li>{name}</li>)
      }
      {/* {
        names.map(name=> <Person name={name}></Person>)
      } */}
      {
        spekers.map(speker=> <Person name={speker.Name}></Person>)
      }
      {/* <Person name={name[0]} speker="Quran"></Person>
      <Person name="BppRazz" singer={ name[2]}></Person>
      <Person name="Jahangir" job="Software Engineer"></Person> */}
      <h5>New Components. YAY.</h5>
      <p id='toto'>Rock mama. Rect mama.</p>
      <Friend phone="01777"></Friend>
    </div>
  );
}
function Person(props) { 
  return (
    <div className="person">
      <h1>{ props.name}</h1>
      <p>{props.speker} {props.singer} { props.job}</p>
    </div>
  )
}
function Friend(props) { 
  // console.log(props)
  return (
    <div className="friend">
      <h1>Ali Hasan</h1>
      <p>Phone: { props.phone}</p>
    </div>

  )
}





export default App;
