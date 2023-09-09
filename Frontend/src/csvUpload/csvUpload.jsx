
import React, { Component } from 'react';

class FileUploadForm extends Component {
  constructor() {
    super();
    this.state = {
      success: null,
      message: '',
    };
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://01f0-110-226-181-89.ngrok-free.app/upload/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ success: data.success, message: data.message });
      } else {
        this.setState({ success: false, message: 'Failed to upload file' });
      }
    } catch (error) {
      console.error('Error:', error);
      this.setState({ success: false, message: 'An error occurred' });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <input type="file" name="file" />
          <input type="submit" value="Upload" />
        </form>
        {this.state.success !== null && (
          <div>
            {this.state.success ? (
              <p className="success">{this.state.message}</p>
            ) : (
              <p className="error">{this.state.message}</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default FileUploadForm;
