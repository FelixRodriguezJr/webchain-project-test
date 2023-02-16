import { useEffect, useState } from 'react';
import './App.css';

// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }

const App = () => {
  // const name = 'Felix';
  // const isNameShowing = true;
  const [counter, setCounter] = useState(0);

  //Use effects happens as soon as the App function loads;
  useEffect(() => {
    //setCounter(100);
    //alert(`The counter input below has seen a change to ${counter}`);
  }, [counter] );

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{2 + 2}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React</a>
      </header> */}

      {/* {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
        <h1>test</h1>
        <h2>There is no name</h2>
        </>
      )} */}

      {/* <Person 
        name='Felix' 
        lastName={'the Cat'} 
        age={27}
      />
      <Person name="Jane" age={32+4}/>
      <Person />
      <Person />
      <Person /> */}

      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

    </div>
  );
}

export default App;
