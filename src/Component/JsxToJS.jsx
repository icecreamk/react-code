import React, { Component } from 'react';
var img_001 = require('../assets/images/001.png');
var img_002 = require('../assets/images/002.png');


class ReactElement extends Component {
  render() {
    return (
      <div>
        <img style={{'vertical-align': 'middle'}} alt="" src={img_001} />
        &nbsp;&nbsp;《== babel&nbsp;&nbsp;
        <img style={{'vertical-align': 'middle'}} alt="" src={img_002} />
        <ol>
        	<li>标签作为第一个参数传递，首字母小写当作原生dom，首字母大写当作组件</li>
        	<li>attrs 作为key-value对象第二个参数</li>
        	<li>余下参数表示子元素</li>
        </ol>
      </div>
    );
  }
}

export default ReactElement;