import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Moment from 'react-moment';
import styled from 'styled-components';
import Like from '../Like/Like';
import { Avatar } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

const Span = styled.span `
  text-decoration: none !important;
  color: 'black' !important;
`;

const Li = styled.div `
  list-style-type: none;
  padding: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none !important;
  color: 'black' !important;
  padding-right: 10px;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;


class PhotoDetail extends Component {
  render() {
    const { likeCount, photoUrl, avatarUrl, username, caption } = this.props.photo;
    const likes = (likeCount === 1) ? '1 like' : `${likeCount} likes`;
    const cardTitle =(
      <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Avatar size="large" src={avatarUrl}  alt={avatarUrl} />
      </div>
    );
    const cardExtra=<Moment fromNow>2018-04-19T12:59-0500</Moment>;
    const cardStyle={maxWidth:500};
    const cardCover=<img src= {photoUrl}  alt="img" ></img>;
    const metaTitle=(
      <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Like />
        <div style={{paddingLeft: '10px'}}>
          {likes}
        </div>
      </div>
    );
    const metaDescription=(
      <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Span>
          <StyledLink to={`/${ username }`}> {username} </StyledLink>
        </Span>
        { caption }
      </div>
    );

    return(
      <div style={{display: 'flex', flexItems: 'center', justifyContent: 'center'}}>
        <Li>
         <Card
           title={ cardTitle }
           extra={ cardExtra }
           style={ cardStyle }
           cover={ cardCover }
           hoverable>
          <Meta
            title={ metaTitle }
            description={ metaDescription }/>
         </Card>
        </Li>
      </div>
    );
  }
}

export default PhotoDetail;
