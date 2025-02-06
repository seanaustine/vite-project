import './App.css';

function Rectangle() {
  const squareStyle = {
    border: '3px solid black',
    width: '200px',
    height: '200px',
    backgroundColor: 'pink',
    display: 'flex',  
    justifyContent: 'center',  
    alignItems: 'center',  
    fontSize: '16px',
    color: 'black'
  };

  return (
    <div style={squareStyle}>
      <p>CPEITEL</p>
    </div>
  );
}

function Name() {
  const nameStyle = {
    textAlign: 'center',
    fontSize: '20px', 
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '20px',
  };

  return (
    <div style={nameStyle}>
      <p>Sean Austine M. Simon</p>
    </div>
  );
}

function App() {
  return (
    <div style={{
      position: 'absolute',
      top: '30%',  
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    }}>
      <Name />
      <Rectangle />
    </div>
  );
}

export default App;
