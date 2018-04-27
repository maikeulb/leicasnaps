import React from 'react';
import {Icon} from 'antd';

const hasLiked=true

class Like extends React.Component {

  state = {
    submittingLike: false
  };

  render() {
    const likeIcon= (hasLiked) ? "heart" : "heart-o";
    const color= (hasLiked) ? {color:"#e95950"} : {color:""};

    return(
      <Icon type= {likeIcon} style={color}/>
    );
  }

}


export default Like;
