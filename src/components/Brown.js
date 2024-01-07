import React, {Component} from 'react'
import './BrownStyle.css'

class Brown extends Component {
  render() {
  return (
    <div className='brown'>
        <div className='brown-container'>
            <div className='brown-left'>
                <h1>{this.props.brown}</h1>
                <h1>{this.props.brown0}</h1>
            </div>
            <div className='brown-right'>
                <p>{this.props.brown1}</p>
                <p>{this.props.brown2}</p>
                <p>{this.props.brown3}</p>
            </div>
        </div>
    </div>
  )
  }
}

export default Brown