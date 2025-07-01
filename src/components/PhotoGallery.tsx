
const PhotoGallery = () => {
  const photos = [
    { src: '/placeholder.svg', alt: 'Foto juntos' },
    { src: '/foto6.jpg', alt: 'Outra foto' },
    { src: '/placeholder.svg', alt: 'Mais uma' },
    { src: '/placeholder.svg', alt: 'Foto treino' },
    { src: '/placeholder.svg', alt: 'Foto pizzaria' }
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
