import './index.css'
import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div className='home-set'>
          <div>
            <img className='one' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693637453/Ellipse_46_huy5xs.png" alt="half" />
          </div>
          <p className="home-para">Discover the beauty of the tropics</p>
          <div className='half-con'>
            <p className='home-stud'><span className='home-trop'>Tropical<br />Destinations</span>
              <br />For Student
            </p>
            <div className='im'>
              <img className='two' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693638307/Ellipse_49_ac97aa.png" alt="half" />
            </div>
          </div>

          <p className='lor-para'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer<br /> rutrum nisi. A nec nisl vitae</p>
          <div className='dot'>
            <img className='three' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693642672/Subtract_ehqpou.png" alt="circle" />
          </div>
          <button className="button">SIGN UP</button>
          <div className='half-cir'>
            <img className='four' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693644383/Ellipse_47_bqrhc3.png" alt="win" />
          </div>
        </div>
        <div className='can'>
        <div className='five'>
            <div>
          <img className="o" src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693645751/Ellipse_48_d5p3np.png" alt="dot" />
          </div>
          <div>
            <img className="image" src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693642597/Group_171_tyhwyr.png" alt="boy" />
            </div>
            </div>
            <div  className='onoff'>
            <img className='onoff-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693645764/Subtract_1_xqavvj.png" alt="dot" />
            </div>
            </div>
        
      </div>
    )
  }
}

export default Home;
