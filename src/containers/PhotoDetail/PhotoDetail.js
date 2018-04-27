import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img `
  width: 350px;
  padding: 5px;

  @media screen and (max-width: 350px){
    width: 100%;
  }
`;

const Li = styled.div `
  list-style-type: none;
  cursor: pointer;
`;

class PhotoDetail extends Component {
  render() {
    const { photoUrl } = this.props.photo;
    return(
        <Li>
          <Img src={ photoUrl }  alt="img" ></Img>
        </Li>
    );
  }
}

export default PhotoDetail;
