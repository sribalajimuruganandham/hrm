import logo from './assets/HR LOGO 1.png';
import './styles/login.css';
import Navbar from './navbar';
function App() {
  return (
    <>
    <Navbar/>
    <div class='main'>
      <img src={logo} class='log'></img>
      <h3>Account Login</h3>
      <h5 >Login to get the best experience with our website</h5>
      <br></br>
      <input class='input' placeholder='      Phone Number'></input>
      <br></br>
      <br></br>
      <br></br>
      <input class='input' placeholder='      Password'></input>
      <br></br>
      <br></br>
      <br></br>
      <button class='input-button'  onClick={event =>  window.location.href='/servicebook'} >Log in with phone number</button>
      <br></br>
      <p>or</p>
      <p>New to hari ram motors ? <a onClick={event =>  window.location.href='/signup'} class="link">New account</a></p>
    </div>
    </>
  );
}

export default App;