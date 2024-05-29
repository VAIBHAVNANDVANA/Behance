// src/components/ImageCard.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const ImageCard = ({ image, onImageClick }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(getRandomInt(1000));
    const [views] = useState(getRandomInt(5000));

    const handleLike = () => {
        setLiked(!liked);
        setLikes(likes + (liked ? -1 : 1));
    };

    return (
        <div className="image-card">
            <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
                onClick={() => onImageClick(image)}
            />
            <div className="image-stats">
                <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
                    <FontAwesomeIcon icon={faHeart} /> {likes}
                </button>
                <div className="view-count">
                    <FontAwesomeIcon icon={faEye} /> {views}
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
