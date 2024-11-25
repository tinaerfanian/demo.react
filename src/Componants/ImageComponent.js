import React, { Component } from 'react';

class ImageComponent extends Component {
    render() {
        return (
            <img 
                src={this.props.src} 
    
            />
        );
    }
}

export default ImageComponent;
