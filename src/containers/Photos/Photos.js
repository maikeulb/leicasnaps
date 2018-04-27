import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import withErrorHandler from '../../hoc/withErrorHandler';
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
  componentDidMount() {
    this.props.onFetchAllPhotos();
  }

  state = {
    layoutReady: false
  }

  handleLayoutReady = () => {
		if (!this.state.layoutReady) {
      this.setState({ 
        layoutReady: true 
      });
		}
	}

  render() {

    let photos = <Spin />;
    if ( !this.props.loading ) {
      // photos = knuthShuffle(this.props.photos);
    }

    const masonryOptions = {
      transitionDuration: 0,
      fitWidth: false
    };

    let photoDetails = <Spin />;
    if ( !this.props.loading ) {
      photoDetails = photos.map( photo =>
        <PhotoDetail
          key={ photo.id }
          photo={ photo }
        />
      );
    }

    const masonry = (
      <Container>
        <div style={{
					visibility: (this.state.layoutReady)
						? 'visible'
						: 'hidden', 
        }}>
        <Masonry
          elementType={'ul'}
          options={ masonryOptions }
          disableImagesLoaded={ false }
					onLayoutComplete={this.handleLayoutReady}
          updateOnEachImageLoad={ false }
          >
          { photoDetails }
        </Masonry>
      </div>
      </Container>
    );

    return masonry;
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos.photos,
    loading: state.photos.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAllPhotos: () => dispatch( actions.fetchAllPhotos() ),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Photos, axios ) );