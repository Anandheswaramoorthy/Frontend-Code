import About from "./About";
import Home from "./Home";
import HomeClass from "./ClassComponents/HomeClass";
import ContactClass from "./ClassComponents/ContactClass";
import Greeting from "./Greeting";


function App() {

  let name = "Anandh";
  let age = 25;
  return (
    <>
    <h1>Hello Everyone</h1>
    <h3>Welcome to React!</h3>
    <Home />
    <HomeClass />
    <ContactClass />
    <About />
    <Greeting fn={name} age={age} color="blue" />
    </>
  )
}
export default App;