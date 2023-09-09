import './App.css';
import { SocialIcon } from 'react-social-icons'

function App() {
  return (
    <div className="coverPage">
      <div className="wrapper">
        <h1>Página Web en construcción<span className="dot">.</span></h1>
        <p>Mientras contactanos en:</p>
        <div className="icons">
          <SocialIcon className="aux" url="https://instagram.com/aluminioitalia" bgColor="black"/>
          <SocialIcon className="aux" network="whatsapp" url="https://wa.me/542213511106" bgColor="black" />
        </div>        
        <img src="/icoitalia.png" alt="Flowers in Chania" />
      </div>
    </div>
  );
}

export default App;
