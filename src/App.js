import Homepage from "./assets/components/homepage";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init();
  return (
    <Homepage/>
  );
}

export default App;
