import React, {Component} from 'react'
import './BlackStyle.css'

class Black extends Component {
  render() {
    return (
        <div className='blank'>
            <div className='blank-container'>
                <div className='left'>
                    <h1>{this.props.blank}</h1>
                    <h1>{this.props.blank0}</h1>
                </div>
                <div className='right'>
                    <p>{this.props.blank1}</p>
                    <p>{this.props.blank2}</p>
                    <p>{this.props.blank3}</p>
                </div>

            </div>

        </div>
    )
  }
}

export default Black