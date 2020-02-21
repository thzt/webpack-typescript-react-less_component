import React, { Component } from 'react';
import { Button } from 'antd';

import { text } from './data.json';
import './index.less';

class Comp extends Component {
  render = () => {
    return <Button>{text}</Button>;
  };
}

export default Comp;
