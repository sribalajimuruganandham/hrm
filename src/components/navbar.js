import logo from './assets/Hero Logo 2.png';
import './styles/navbar.css';
function App() {
  return (
    <div class='navbar-main'>
        <img src={logo} class='logo'></img>
        <p>HOME</p>
        <p>EXPLORE</p>
        <p>CONTACT</p>
        <p>ABOUT US</p>
        <button class='login-button' onClick={event =>  window.location.href='/login'}>Log in</button>
    </div>
  );
}

export default App;