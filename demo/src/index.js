import React, {Component} from 'react'
import {render} from 'react-dom'

import RTI from '../../src/withStyles'

class Demo extends Component {
  render() {
    return <div>
      <h1>React Telephone Input Demo</h1>
      <RTI
        defaultCountry="ur"
        defaultCountry="us"
        flagsImagePath="./images/flags.png"
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
