import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import FlightMostTraveledDestinationsPage from "./pages/FlightMostTraveledDestinationsPage/FlightMostTraveledDestinationsPage";

import './styles/resetStyles.scss';
import './styles/fonts.scss';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/find-flight-most-traveled-destinations/:originCityCode/:period" element={<FlightMostTraveledDestinationsPage/>}></Route>
            </Routes>
        </Router>
    </Provider>
  );
}

export default App;
