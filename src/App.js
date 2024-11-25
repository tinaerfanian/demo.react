import logo from './logo.svg';
import './App.css';
import ButtonComponant from './Componants/ButtonComponant';
import ImageComponent from './Componants/ImageComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponant label="kill the monsters"/>
        <ImageComponent src="https://static.bandainamcoent.eu/high/the-witcher/the-witcher-3-wild-hunt/00-page-setup/tw3-new-header-mobile.jpg" /> 
      </header>
    </div>
  
      
   
  );
}

export default App;
