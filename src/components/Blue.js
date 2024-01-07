import React, {Component} from 'react'
import './BlueStyle.css'

class Blue extends Component {
  render() {
  return (
    <div className='blue'>
        <div className='blue-container'>
            <div className='blue-left'>
                <h1>{this.props.blue}</h1>
                <h1>{this.props.blue0}</h1>
            </div>
            <div className='blue-right'>
                <p>{this.props.blue1}</p>
                <p>{this.props.blue2}</p>
                <p>{this.props.blue3}</p>
            </div>
        </div>
    </div>
  )
  }
}

export default Blue