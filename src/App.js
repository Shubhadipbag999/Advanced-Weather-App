import WeatherApp from './pages/WeatherApp';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/weather">
        <WeatherApp />
      </Route>
    </Switch>

  );
}

export default App;
