// src/components/ImageGallery.js
import React, { useState } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';

const images = [
    { id: 1, src: 'butterfly.jpg', alt: 'Image 1', category: 'Photography' },
    { id: 2, src: 'nature-images.jpg', alt: 'Image 2', category: 'Design' },
    { id: 3, src: 'river.jpg', alt: 'Image 3', category: 'Art' },
    { id: 4, src: 'waterfall.jpg', alt: 'Image 4', category: 'Illustration' },
    { id: 5, src: 'butterfly.jpg', alt: 'Image 5', category: '3D Modelling' },
    { id: 6, src: 'nature-images.jpg', alt: 'Image 6', category: 'Photography' },
    { id: 7, src: 'river.jpg', alt: 'Image 7', category: 'Design' },
    { id: 8, src: 'waterfall.jpg', alt: 'Image 8', category: 'Art' },
    { id: 9, src: 'butterfly.jpg', alt: 'Image 9', category: 'Illustration' },
    { id: 10, src: 'nature-images.jpg', alt: 'Image 10', category: '3D Modelling' },
    { id: 11, src: 'river.jpg', alt: 'Image 11', category: 'Photography' },
    { id: 12, src: 'waterfall.jpg', alt: 'Image 12', category: 'Design' }
];

const ImageGallery = ({ selectedCategory }) => {
    const [modalImage, setModalImage] = useState(null);

    const filteredImages = selectedCategory === 'all'
        ? images
        : images.filter(image => image.category === selectedCategory);

    return (
        <div className="image-gallery">
            {filteredImages.map(image => (
                <ImageCard key={image.id} image={image} onImageClick={setModalImage} />
            ))}
            {modalImage && <Modal image={modalImage} onClose={() => setModalImage(null)} />}
        </div>
    );
};

export default ImageGallery;
