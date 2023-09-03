import './index.css'
import { Component } from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

import Popup from 'reactjs-popup'


class Header extends Component{
    render(){
        return(
            <div className='header'>
                <div className='container'>
                <ul className="head-top">
                <li className="head-item">
                Home
                </li>
                <li className="head-item">
                About
                </li>
                <li className="head-item">
                Schedules
                </li>
                <li className="head-item">
                Memborship
                </li>
                <li className="head-item">
                Pricing
                </li>
                </ul>
                <ul className="head-top">
                <li className="head-item1">
                Offers
                </li>
                <li>
                <button type="button" className="btn">
                Courses
                </button>
                </li>
                </ul>
                <div className='hmr-one'>
                <Popup
          trigger={
            <button type="button" className="hamburger-btn">
              <GiHamburgerMenu size={25} className="hamburger" />
            </button>
          }
        >
          {close => (
            <div className="modal-container">
              <div className="nav-link-container">
              <ul className="head-top1">
                <li className="head-item">
                Home
                </li>
                <li className="head-item">
                About
                </li>
                <li className="head-item">
                Schedules
                </li>
                <li className="head-item">
                Memborship
                </li>
                <li className="head-item">
                Pricing
                </li>
                <li className="head-item">
                Offers
                </li>
                <li>
                <button type="button" className="btn">
                Courses
                </button>
                </li>
                </ul>
              </div>
              <div className='arr-dev'>
              <button type="button" className="close-btn">
                <AiOutlineCloseCircle size={18} onClick={() => close()} />
              </button>
              </div>
            </div>
          )}
        </Popup>
        </div>
                </div>
            </div>
    )
    }
}

export default Header