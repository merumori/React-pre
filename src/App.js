import './App.css';
import Usestat from './usestat.js';
import Pro from './props.js';
import MyComponent from './useeffect.js';
import Effect from './useeffect.js';
import InputComponent from './input.js';
import InputDisplayComponent from './fach.js';



function App() {
  return (
    <>
    <Usestat />
    <Pro name='mori meru' mobile='9723530567' study='mca' />
    <Effect />
    <InputComponent />
    <InputDisplayComponent />
    </>
    
    
  );
}

export default App;
