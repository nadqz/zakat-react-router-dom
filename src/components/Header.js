import React, {Component} from 'react'
import './HeaderStyle.css'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <div className='heading'>
            <div className='heading-txt'>
                <h1>{this.props.heading}</h1>
                <p><Link className='home-link' to='/'>{this.props.capt}</Link></p>
            </div>
        </div>
        )
    }   
}

export default Header