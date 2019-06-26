import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

export class CameraComponent extends Component {
    onTakePhoto (dataUri) {
        // Do stuff with the dataUri photo...
        console.log('photo taken');
    }

    render () {
        return (
            <div className="CameraComponent">
                <Camera
                    onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
                />
            </div>
        );
    }
}
