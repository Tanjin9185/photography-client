import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Team from './Components/Team/Team';
import Galarey from './Components/Galarey/Galarey';
import LoadServices from './Components/LoadServices/LoadServices';
import Services from './Components/Services/Services';
import AddService from './Components/AddService/AddService';

function App() {
  return (
    <div>
      <h1 className="text-4xl">Tanjin</h1>
      <AboutMe></AboutMe>
      <Team></Team>
      <Galarey></Galarey>
      <LoadServices></LoadServices>
      <Services></Services>
      <AddService></AddService>

    </div>
  );
}

export default App;
