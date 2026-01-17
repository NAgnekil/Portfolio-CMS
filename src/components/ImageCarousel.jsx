import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Thumbs,
  EffectFade,
  FreeMode,
  Autoplay
} from 'swiper/modules';
import ImageDisplay from './ImageDisplay';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import '../styles/image-carousel.scss';

const ImageCarousel = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const shouldLoop = images.length > 1;

  const processedImages = images.map((img) => {
    if (img.gatsbyImageData && !img.url) {
      return {
        ...img,
        url: img.gatsbyImageData.images?.fallback?.src || ''
      };
    }
    return img;
  });

  if (!processedImages || processedImages.length === 0) {
    return (
      <div className="image-carousel-wrapper">
        <p>Inga bilder tillgängliga</p>
      </div>
    );
  }

  const handleNext = () => {
    if (mainSwiper) {
      mainSwiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (mainSwiper) {
      mainSwiper.slidePrev();
    }
  };

  const toggleAutoplay = () => {
    if (mainSwiper) {
      if (isPlaying) {
        mainSwiper.autoplay.stop();
      } else {
        mainSwiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleThumbnailClick = (index) => {
    if (mainSwiper) {
      if (shouldLoop) {
        mainSwiper.slideToLoop(index);
      } else {
        mainSwiper.slideTo(index);
      }
    }
  };

  return (
    <div className="image-carousel-wrapper">
      <div className="gallery-container">
        {/* Huvudkarusell */}
        <Swiper
          modules={[Navigation, Thumbs, EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev'
          }}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={setMainSwiper}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="gallery-swiper"
          loop={shouldLoop}
          rewind={!shouldLoop}
          speed={300}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
        >
          {processedImages.map((image, index) => (
            <SwiperSlide key={image.id || index}>
              <div className="gallery-slide">
                <ImageDisplay
                  image={image}
                  alt={`Gallery image ${index + 1}`}
                  className="gallery-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-navigation">
          <button
            className="custom-prev"
            onClick={handlePrev}
            aria-label="Föregående bild"
          >
            ‹
          </button>

          <div className="slide-controls">
            <div className="slide-counter">
              {activeIndex + 1} / {processedImages.length}
            </div>
            <button
              className={`play-pause-btn ${isPlaying ? 'paused' : 'playing'}`}
              onClick={toggleAutoplay}
              aria-label={isPlaying ? 'Pausa karusell' : 'Spela karusell'}
              disabled={
                !shouldLoop && activeIndex === processedImages.length - 1
              }
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
          </div>

          <button
            className="custom-next"
            onClick={handleNext}
            aria-label="Nästa bild"
          >
            ›
          </button>
        </div>
      </div>

      {/* Thumbnail karusell */}
      <div className="thumbnails-container">
        <Swiper
          modules={[Navigation, Thumbs, FreeMode]}
          spaceBetween={10}
          slidesPerView={Math.min(6, processedImages.length)}
          freeMode={true}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
          className="thumbnails-swiper"
          loop={shouldLoop}
          {...(shouldLoop && {
            loopAdditionalSlides: 2
          })}
          breakpoints={{
            320: {
              slidesPerView: Math.min(3, processedImages.length),
              ...(shouldLoop && { loopAdditionalSlides: 2 })
            },
            640: {
              slidesPerView: Math.min(4, processedImages.length),
              ...(shouldLoop && { loopAdditionalSlides: 2 })
            },
            768: {
              slidesPerView: Math.min(5, processedImages.length),
              ...(shouldLoop && { loopAdditionalSlides: 3 })
            },
            1024: {
              slidesPerView: Math.min(6, processedImages.length),
              ...(shouldLoop && { loopAdditionalSlides: 3 })
            }
          }}
        >
          {processedImages.map((image, index) => (
            <SwiperSlide
              key={`thumb-${image.id || index}`}
              virtualIndex={index}
            >
              <div
                className={`thumbnail-item ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleThumbnailClick(index);
                  }
                }}
              >
                <ImageDisplay
                  image={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
