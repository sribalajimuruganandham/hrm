import logo from './assets/HR LOGO 1.png';
import './styles/signin.css';
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
      <input class='input' placeholder='      Username'></input>
      <br></br>
      <br></br>
      <br></br>
      <input class='input' placeholder='      Phone Number'></input>
      <br></br>
      <br></br>
      <br></br>
      <input class='input' placeholder='      E-mail'></input>
      <br></br>
      <br></br>
      <br></br>
      <input class='input' placeholder='      Password'></input>
      <br></br>
      <br></br>
      <br></br>
      <button class='input-button'>Log in with phone number</button>
      <br></br>
      <p>or</p>
      <p>Already have an account ? <a class="link"  onClick={event =>  window.location.href='/login'} >login</a></p>
    </div>
    </>
  );
}

export default App;