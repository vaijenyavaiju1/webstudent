import './index.css'
import { Component } from 'react'

class Testimonial extends Component{
    render(){
        return(
            <div>
                <h1 className='test-head'>Testimonial</h1>
                <div className='ano-dev'>
                    <div className='test-dev'>
                        <img className='test-one' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693742328/Ellipse_1_oadhnj.png" alt="boy1"/>
                        <p className='test-para'>Corey Korsgaard</p>
                        <hr className='horr'/>
                        <p className='test-para1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className='test-dev'>
                        <img className='test-one' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693742337/Ellipse_1_1_ya5suk.png" alt="boy1"/>
                        <p className='test-para'>Corey Korsgaard</p>
                        <hr className='horr'/>
                        <p className='test-para1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className='test-dev'>
                        <img className='test-one' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693742345/Ellipse_1_2_bxlhdr.png" alt="boy1"/>
                        <p className='test-para'>Corey Korsgaard</p>
                        <hr className='horr'/>
                        <p className='test-para1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>


            </div>
        )
    }
}

export default Testimonial
