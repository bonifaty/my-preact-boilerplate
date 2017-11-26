import { h, render } from 'preact'
import MyComponent from './components/my-component/index'

require('file-loader?name=[name].[ext]!./index.html')
require('reset-css/reset.css')

render(
  (
    <div>
      <MyComponent />
    </div>
  ), document.body
)
