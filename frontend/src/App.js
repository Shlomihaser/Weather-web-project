
import './styles/App.css'
import fintekLogo from './assets/fintek-logo.png'
import LeftContainerComp from './components/LeftContainerComp';
import WeatherDataComp from './components/WeatherDataComp';

function App() {
  return (
    <div className="app-container">
      <img className='fintek-logo' alt='Fintek Logo' src={fintekLogo}/>
      <div className='flex-wrapper'>
        <LeftContainerComp/>
        <WeatherDataComp/>
      </div>
    </div>
  );
}

export default App;
