import React, { Component } from 'react';

import axios from '../../axios';

import PhotoDetail from '../PhotoDetail/PhotoDetail';

import { Spin } from 'antd';
import styled from 'styled-components';

const Container= styled.div `
  margin-left: 60px;
  margin-right: 0px;

  @media screen and (max-width: 700px){
    margin-left: 0;
    margin-right: 0;
  }
`;

class Photos extends Component {
  render() {
    const photos = [{
      id: 1,
      photoUrl: 'https://c1.staticflickr.com/7/6116/6334953021_7453f3f3d1_b.jpg',
      avatarUrl: 'https://c1.staticflickr.com/7/6116/6334953021_7453f3f3d1_b.jpg',
      displayName: 'rick',
      userId: 'k3j4l3kj4'
    }];

    const photoDetails = photos.map( photo =>
        <PhotoDetail
          key={ photo.id }
          photo={ photo }
        />
      );

    const feed = (
      <Container>
          { photoDetails }
      </Container>
    );

    return feed;
  }
}

export default Photos
