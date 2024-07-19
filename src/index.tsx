import _ from 'lodash';
import './style.css';
import Icon from './15090.jpg';

function component() {
  const element = document.createElement('div');
  var _ = require('lodash');
  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());