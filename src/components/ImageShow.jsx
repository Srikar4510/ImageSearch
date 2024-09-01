import './ImageShow.css';

function ImageShow({ image }) {
  return (
    <div>
      <img className='image' src={image.urls.small} />
    </div>
  );
}

export default ImageShow;
