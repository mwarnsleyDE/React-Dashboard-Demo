import React from 'react';
import { Component } from 'react';

class SideBarList extends Component{
  render(){
    const { dimension } = this.props;
    const dimensionList = dimension.map((dimension, i) => {
      return(
        <li key={i}>
          <a href=''>
            {dimension.name}
          </a>
        </li>
      );
    });
    return(
      <ul>
        {dimensionList}
      </ul>
    );
  }
}

export default SideBarList;
