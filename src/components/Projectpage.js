import "./Projectpage.css"

import React, { Component } from 'react'

class Projectpage  extends Component {
    render(){
  return (
    <div className="projectpage-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>

        </div>
    </div>
  )
    }
}

export default Projectpage