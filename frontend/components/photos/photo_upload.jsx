import React from 'react';

import { withRouter } from 'react-router';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
    this.post = this.post.bind(this);
    this.state = {
      caption: null,
      location: null,
      img_url: null
    };
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  uploadImage(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        this.setState({ img_url: results[0].url })
      }
    });
  }

  post() {
    this.props.postPhoto(this.state);
  }

  render() {
    return (
      <div className='photo-upload-container'>
        {this.state.img_url ?
          <img className='photo-upload-preview' src={this.state.img_url}/>
          : <button className='photo-upload-button' onClick={this.uploadImage}>Add a photo</button>
        }
        <div className='photo-upload-form'>
          <input type='text' value={this.state.caption} onChange={this.update('caption')} placeholder='Caption'></input>
          <input type='text' value={this.state.location} onChange={this.update('location')} placeholder='Location'></input>
        </div>
        <button className='photo-upload-submit' onClick={this.post}>Upload!</button>
      </div>
    );
  }
}

export default withRouter(PhotoUpload);
