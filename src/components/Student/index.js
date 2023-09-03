import './index.css'
import { Component } from 'react'

class Student extends Component{
    render(){
        return(
            <div>
                <h1 className='student-head'>Student Special: Discounted rates on tropical getaways!</h1>
                <p className='student-para'>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
                <div className='stud-dev'>
                    <div className='stu-mir'>
                        <p className='stu-h'>Privacy Policy</p>
                        <p className='stu-h'>Terms of Use</p>
                        <p className='stu-h'>Sales and Refunds</p>
                        <p className='stu-h'>Legal</p>
                    </div>
                    <div className='stu-mir'>
                        <p className='stu-h'>About</p>
                        <p className='stu-h'>Schedules</p>
                        <p className='stu-h'>Pricing</p>
                        <p className='stu-h'>Membership</p>
                        <p className='stu-h'>Joins</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Student