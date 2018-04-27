import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar } from 'antd';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Img = styled.img `
  width: 350px;
  padding: 5px;

  @media screen and (max-width: 350px){
    width: 100%;
  }
`;

const Footer = styled.div `
  padding-top: 10px;
`;

const Li = styled.div `
  list-style-type: none;
  cursor: pointer;
`;

const Span = styled.span `
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: space-between;
`;

class PhotoDetail extends Component {
  render() {
    const { photoUrl, displayName, avatarUrl, userId } = this.props.photo;
    return(
      <div>
        <li>
          <Img src={ photoUrl }  alt="img" ></Img>
              <Footer>
                <Span>
                  <StyledLink to={`/users/${userId}`}>
                  <div>
                    <span style={{paddingRight:"10px", paddingBottom:"2px"}}>{ displayName } </span>
                    <span style={{paddingRight:"5px"}}><Avatar size="large" shape="square" src={avatarUrl} alt=""/></span>
                  </div>
              </StyledLink>
               </Span>
           </Footer>
         </li>
      </div>
    );
  }
}

export default PhotoDetail;
