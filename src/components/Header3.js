import React, {Component} from 'react'
import './HeaderStyle.css'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";

class Header3 extends Component {
  render() {
    return (
        <div className='heading'>
            <div className='heading-txt'>
                <h1>{this.props.heading}</h1>
                <p style={{position:'relative'}}>
                    <Link className='home-link' to='/'>Home</Link>
                    <BsArrowRight size={24} style={{color:'rgb(147,132,103)', margin:'0 1rem', position:'relative'}} />
                    <Link className='home-link' to='/kalkulator'>Kalkulator</Link></p>
            </div>
        </div>
        )
    }   
}

export default Header3