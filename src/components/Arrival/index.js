import './index.css'
import { Component } from 'react'

class Arrival extends Component{
    render(){
        return(
            <div className='over-dev'>
                <div className='arrival-img'>
                    <img src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693656291/Subtract_it1agt.png" alt="com"/>
                </div>
                <div className='img-ar'>
                    <img  src="https://res.cloudinary.com/dbpsrpa2n/image/upload//c_thumb,w_60,h_60,g_auto/v1693656478/Subtract-1_uqjewl.png" alt="com"/>
                </div>
                
                <div  className='arr-one'>
                <div className='arr-con'>
                <div>
                    <div className='arrival-card'>
                        <img src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693652432/avatar_rqgowh.png" alt="girl"/>
                        <div>
                            <h1 className='arrival-head'>Jenny Wilson</h1>
                            <p className='arrival-para'>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='arrival-card'>
                        <img src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693653105/avatar_1_ixpeny.png" alt="girl"/>
                        <div>
                            <h1 className='arrival-head'>Jenny Wilson</h1>
                            <p className='arrival-para'>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='arrival-card'>
                        <img src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693653114/avatar_2_xstgnt.png" alt="girl"/>
                        <div>
                            <h1 className='arrival-head'>Jenny Wilson</h1>
                            <p className='arrival-para'>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>
                </div>
                </div>
               
                <div className='dev'>
                    <div>
                    <div className='dev1'>
                    <img   src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693653500/Ellipse_56_fie5zd.png" alt="half" />
                    </div>
                    <div>
                    <p className='arr-trop'><span className='arr-stud'>Tropical Adventure</span>
                    <br />For Student
                    </p>
                    <p className='dev-para'>Student Tropical Vacation: Relax and Recharge</p>
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
                </div>


            </div>
        )
    }
}

export default Arrival