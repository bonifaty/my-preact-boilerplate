import {h, render} from 'preact';
import MyComponent from './components/my-component/index';

// eslint-disable-next-line import/no-webpack-loader-syntax
require('file-loader?name=[name].[ext]!./index.html');
require('reset-css/reset.css');

render(
  (
    <div>
      <MyComponent />
    </div>
  ), document.body
);
