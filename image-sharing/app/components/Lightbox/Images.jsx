'use client';
import Image from 'next/image';

const Images = (props) => {
  const { images, onClick } = props;
  const handleClickImage = (index) => {
    onClick(index);
  };
  return (
    <div className="max-w-7xl m-8 grid grid-cols-4 gap-4">
      {images.data.map((image, index) => (
        <div
          key={index}
          className="w-full h-80 cursor-pointer"
          onClick={() => handleClickImage(index)}
        >
          <Image
            key={image.id}
            alt="gallery"
            src={image.imageUrl}
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            className="rounded-lg border shadow-lg"
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
