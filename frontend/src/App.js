
import './styles/AppStyle.css'
import fintekLogo from './assets/fintek-logo.png'
import IntroComp from './components/IntroComp'
import WeatherDataComp from './components/WeatherDataComp';

function App() {
  return (
    <div className="app-container">
      <IntroComp/>
      <WeatherDataComp/>

    </div>
  );
}

export default App;
