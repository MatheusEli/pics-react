function ImageShow({image}) {
    return <img src={image.urls.small} alt={image.description} />;
}

export default ImageShow; 