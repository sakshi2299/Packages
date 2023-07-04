import ImageGallery from 'react-image-gallery';
import React from 'react';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  }

];

export default function Gallery() {
  return (
    <div><ImageGallery fullscreen items={images}/> </div>
  )
}

