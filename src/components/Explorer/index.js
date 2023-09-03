import './index.css'
import { Component } from 'react'

class Explorer extends Component{
    render(){
        return(
                <div className='whole'>
                <div  className='whole-arr'>
                <div className='dev'>
                    <div>
                    <div className='dev1'>
                    <img   src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693653500/Ellipse_56_fie5zd.png" alt="half" />
                    </div>
                    <div>
                    <p className="line-para">Get 20% off for student</p>
                    <div className='line-dev'>
                        <h1 className='arr-stud'>Student discounts available.</h1>
                        <img src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693638307/Ellipse_49_ac97aa.png" alt="half" />
                        </div>
                    
                    <p className="line">Get ready for some fun in the sun!</p>
                    <ul className='dev-ul'>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Massa quis natoque sit quam</li>
                        <li>Eros non pellentesque elit</li>
                        <li>tortor id euismod habitant</li>
                        <li>Sed suspendisse id in ultrices</li>
                    </ul>
                    <button className="dev-button">Explore more</button>
                    </div>
                    </div>
                </div>
                <div className='half-whole'>
                    <img src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693737364/Ellipse_54_wwdag2.png" alt="one"/>
                </div>
                </div>
                <div className='img-canof'>
                    <img className='im-wh' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693737073/Mask_group_gfad1o.png" alt="women"/>
                    </div>
            </div>
        )
    }
}

export default Explorer