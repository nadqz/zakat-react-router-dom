import React, {Component} from 'react'
import './BlackTransStyle.css'

class BlackTrans extends Component {
  render() {
    return (
        <div className='black'>
            <div className='black-container'>
                <div className='left'>
                    <h1>{this.props.black}</h1>
                    <h1>{this.props.black0}</h1>
                </div>
                <div className='right'>
                    <p>{this.props.black1}</p>
                    <p>{this.props.black2}</p>
                    <p>{this.props.black3}</p>
                </div>

            </div>

        </div>
    )
  }
}

export default BlackTrans