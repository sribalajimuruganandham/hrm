import './styles/footer.css';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import phone from './assets/phone.png';
import email  from './assets/email.png';
import Navbar from './navbar';
function App() {
  return (
        <body class="footer">
    <div class="body-sub">
        <div class="main-top">
            <div>
                <h2>HARI RAM MOTORS</h2>
                <p class="title-description">Find your best deals with our best services.</p>
            
            
                <h3 class="social">Follow us on</h3>
                <div class="icons">
                    <img class="iconfacebook" src={facebook}></img>
                    <img class="icon" src={instagram}></img>
                    <img class="icon" src={twitter}></img>
                </div>
            </div>
            
            <div >
                <h3 class="">SERVICES</h3>
                <ui>
                    <li>Online deals</li>
                    <li>Motorbike deals</li>
                    <li>Scooter deals</li>
                    <li>Vechicle service</li>
                </ui>
            </div>
            <div >
                <h3 class="">CONTACT</h3>
                <ui>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>Explore</li>
                        <li>Notification</li>
                    </ui>
                </div>
        </div>
    
        <br></br>
            <div class="bottom">
                <span class="bottom">
                    
                    <img class="icon" src={phone}></img>
                    <p>
                        9898347410
                    </p>
                </span>
                <span class="bottom">
                <img class="icon" src={email}></img>
                    <p>
                        harirammotor@gmail.com
                    </p>
                </span>
            </div>
        </div>
        <p class="rights">All rights reserved since @2022</p>
    </body>
      );
    }
export default App;