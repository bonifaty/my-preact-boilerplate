import './my-component.styl'
import { h, Component } from 'preact'

const b = require('b_').with('my-component')

class MyComponent extends Component {
  render (props, state) {
    return (<div className={b()}>
      <h1 className={b('title')}>Here comes my component</h1>
    </div>)
  }
}

export default MyComponent
