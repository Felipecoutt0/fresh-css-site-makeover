import React from "react";

const PhotoGallery = () => {
  const photos = [
    { src: '/foto1.jpg', alt: '' },
    { src: '/foto2.jpg', alt: '' },
    { src: '/foto4.jpg', alt: '' },
    { src: '/foto05.jpg', alt: '' },
    { src: '/foto06.jpg', alt: '' },
    { src: '/foto07.jpg', alt: '' },
    { src: '/foto08.jpg', alt: '' },
    { src: '/foto09.jpg', alt: '' },
    { src: '/foto10.jpg', alt: '' },
    { src: '/foto11.jpg', alt: '' },
    { src: '/foto12.jpg', alt: '' },
    { src: '/foto13.jpg', alt: '' },
    { src: '/foto14.jpg', alt: '' },
    { src: '/foto15.jpg', alt: '' }
  ];
  

  return (
    <section className="flex justify-center gap-6 p-8 flex-wrap">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="w-40 h-40 bg-white p-2 shadow-lg transform -rotate-2 hover:rotate-1 hover:scale-105 transition-all duration-300 rounded-lg border-8 border-white hover:shadow-xl"
          style={{
            transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`
          }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover rounded"
          />
        </div>
      ))}
    </section>
  );
};

export default PhotoGallery;
