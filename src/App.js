
import './Header.css';
import './Toggle.css';
import './card.css';
import NavBar from './componenets/navbar';
import Card from './componenets/card';
import image from "./images/weather.png";





function App() {


  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem dolorem distinctio veritatis necessitatibus magni cupiditate, minima, culpa dolorum fugit libero quasi itaque adipisci! Quis soluta explicabo corrupti hic repellat";
  const header= "libero quasi itaque adipisci! Quis soluta explicabo corrupti hic repellat";
  const link= "https://google.com";

  return (
    <>
       <NavBar />
       <Card header = {header} text = {text}  link = {link} src = {image}/>
       <Card header = {header} text = {text}  link = {link} src = {image}/>
       <Card header = {header} text = {text}  link = {link} src = {image}/>
       
      


    </>
  );
}

export default App;
