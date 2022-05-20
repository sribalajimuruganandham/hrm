import './styles/servicebook.css';
import profile from './assets/profile.png'
import picture from './assets/picture.webp'
import Navbar from './navbar';
function App() {
  return (
    <>
     <body class="bookservice">
    <div class="bookservice-top">
        <h2>Dashboard</h2>
        <div class="bookservice-top">
            <h2 class="username">username</h2>
            <img src={profile} class="profile"></img>
        </div>
    </div>
    <div class="hero">
        <h1 class="hero-statement">YOUR NEXT SERVICE ON : 173 KMPH</h1>
    </div>
    <br></br>
    <h1>Recently purchased</h1>
    <div class="item">
        <img src={picture} class="picture"></img>
        <br></br>
        <h2>HERO HONDA - 225</h2>
        <p class="description">This new version of the bike.That is give you more explorations.It has most advanced engine</p>
    </div>
    <br></br>
    <br></br>
    <button class="button"> Book service</button>
    <br></br>
    <br></br>
</body>   
    </>
      );
    }
export default App;