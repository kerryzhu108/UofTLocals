import React from "react";

import "../css/InputInfo.css";
import { uploadImage } from "../apis/profile";

class ImageUploader extends React.Component {

    async uploadImage(event) {
        event.preventDefault();
        const imageData = new FormData(event.target);
        const upload = await uploadImage(imageData, this.props.type, this.props.userid)
        this.props.updateImage(upload.url)
    }

    render() {
        return (
            <div>
                <p>{ this.props.desc || "Upload a picture to add or change your profile image"}</p>
                <form onSubmit={this.uploadImage.bind(this)}>
                    <div>
                        <input id="uploadInput" name="image" type="file" />
                    </div>
                    <button id="confirmButtonStudent" type="submit">Upload</button>
                </form>
            </div>
        )
    }
}

export default ImageUploader;
