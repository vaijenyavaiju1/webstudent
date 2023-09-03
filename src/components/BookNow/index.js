import './index.css'
import { Component} from 'react'

class BookNow extends Component{
    render(){
        return(
            <div className='booknow-dev'>
                <div>
                <div className='oops1'>
                    <img src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693741672/Subtract_ce2730.png" alt="cir"/>
                </div>
                <div className='book-off'>
                    <img className='book-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693738312/Group_167_yczi1f.png" alt="wom" />
                </div>
                </div>
                <div className='oops'>
                    <img src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1693741672/Subtract_ce2730.png" alt="cir"/>
                </div>
                <div className='book-head'>
                    <h1 className='now-heading'>Book Now</h1>
                    <p className='now-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <label className='city' for="city">CITY</label>
                    <input className='city-input' type="text" id="city" placeholder="Placeholder"></input>
                    <div className='city-whole1'>
                        <div>
                        <label className='city' for="arrival">ARRIVAL</label>
                        <input className='small-input' type="text" id="arrival" placeholder="Placeholder"/>
                        </div>
                        <div>
                        <label className='city' for="dep">DEPARTURE</label>
                        <input className='small-input' type="text" id="dep" placeholder="Placeholder"/>
                        </div>
                    </div>
                    <div className='city-whole'>
                    <div>
                            <label className='city' for="room">STAR</label>
                            <div className='city-whole'>
                                <button className='half-city'>-</button>
                                <input placeholder='4' className='middle-city' id="room"/>
                                <button className='half-city1'>+</button>
                            </div>
                        </div>
                        <div>
                            <label className='city' for="room">ROOM</label>
                            <div className='city-whole'>
                                <button className='half-city'>-</button>
                                <input placeholder='1' className='middle-city' id="room"/>
                                <button className='half-city1'>+</button>
                            </div>
                        </div>

                    </div>
                    <button className='book-button'>BOOK NOW</button>
                </div>


            </div>
        )
    }
}

export default BookNow