import React from 'react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative">
        <img src={imageUrl} alt="Enlarged product" className="max-w-screen-md max-h-screen-md" />
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-white text-2xl">&times;</button>
      </div>
    </div>
  );
};

export default ImageModal;
