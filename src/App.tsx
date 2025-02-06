import './App.css';
import { CSSProperties } from 'react';

function Rectangle() {
  const squareStyle: CSSProperties = {
    border: '3px solid black',
    width: 200,
    height: 200,
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: 'black',
  };

  return (
    <div style={squareStyle}>
      <p>CPEITEL</p>
    </div>
  );
}

function Name() {
  const nameStyle: CSSProperties = {
    textAlign: 'center' as const,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  };

  return (
    <div style={nameStyle}>
      <p>Sean Austine M. Simon</p>
    </div>
  );
}

function App() {
  const appStyle: CSSProperties = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100vw',
    height: '100vh',
  };

  return (
    <div style={appStyle}>
      <Name />
      <Rectangle />
    </div>
  );
}

export default App;
