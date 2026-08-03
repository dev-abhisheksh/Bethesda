import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardMedia, Typography, Box } from '@mui/material';
import { galleryItems } from '../data/bethesdaData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Gallery() {
  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="section-badge">
            📸 Field Action Gallery
          </div>
          <h2 className="section-heading">
            Witnessing Compassion in Action
          </h2>
          <p className="section-subheading">
            A glance into our daily efforts on the ground across schools, mobile clinics, and care homes.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          style={{ paddingBottom: '40px' }}
          className="gallery-swiper"
        >
          {galleryItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Card sx={{ 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                position: 'relative', 
                height: 'clamp(180px, 30vw, 260px)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={item.img}
                  alt={item.title}
                  sx={{
                    transition: 'transform 0.5s ease',
                    '&:hover': { transform: 'scale(1.08)' },
                    objectFit: 'cover'
                  }}
                />
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  paddingTop: '60px',
                  color: '#ffffff'
                }}>
                  <Typography variant="caption" sx={{ fontWeight: '700', color: 'var(--brand-accent)', textTransform: 'uppercase', mb: 0.5 }}>
                    {item.category}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: 'clamp(14px, 4vw, 18px)', fontWeight: '700', color: '#ffffff', lineHeight: 1.2 }}>
                    {item.title}
                  </Typography>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .gallery-swiper .swiper-pagination-bullet {
          background: var(--text-secondary);
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: var(--brand-primary);
        }
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: var(--brand-primary);
          transform: scale(0.7);
        }
      `}} />
    </section>
  );
}
