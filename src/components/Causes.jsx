import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import { causes } from '../data/bethesdaData';
import { Heart } from 'lucide-react';

export default function Causes({ onOpenDonate }) {
  return (
    <section id="causes" className="section causes-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="section-badge">
            🤝 Urgent Humanitarian Causes
          </div>
          <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 5vw, 36px)' }}>
            Choose a Cause & Directly Impact a Life Today
          </h2>
          <p className="section-subheading" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}>
            Your generous contributions fund transparent, audited programs with real-time updates and measurable outcomes.
          </p>
        </div>

        <Swiper
          effect="coverflow"
          slidesPerView={1}
          spaceBetween={24}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, EffectCoverflow]}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          style={{ padding: '20px 0 60px' }}
        >
          {causes.map((cause) => {
            return (
              <SwiperSlide key={cause.id}>
                <Card 
                  className="cause-card"
                  sx={{ 
                    maxWidth: 'none', 
                    borderRadius: 4, 
                    overflow: 'hidden',
                    bgcolor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-glass)',
                    boxShadow: 'var(--shadow-md)',
                    transition: '0.3s', 
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 'var(--shadow-lg)' } 
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      sx={{ height: 'clamp(150px, 30vw, 200px)' }}
                      image={cause.image}
                      alt={cause.title}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '4px 12px',
                      background: 'var(--brand-light)',
                      color: 'var(--brand-primary)',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      {cause.category}
                    </div>
                  </div>
                  
                  <CardContent sx={{ pb: 1, bgcolor: 'var(--bg-card)' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 700, lineHeight: 1.3, color: 'var(--text-primary)' }}>
                      {cause.title}
                    </Typography>
                  </CardContent>
                  
                  <CardActions sx={{ p: 2, pt: 0, bgcolor: 'var(--bg-card)' }}>
                    <Button 
                      variant="contained" 
                      fullWidth 
                      onClick={() => onOpenDonate(cause.title)}
                      sx={{ 
                        backgroundColor: 'var(--brand-primary)', 
                        color: 'white',
                        textTransform: 'none',
                        fontWeight: 600,
                        py: 1,
                        borderRadius: 'var(--radius-full)',
                        '&:hover': { backgroundColor: 'var(--brand-primary-hover, #047857)' }
                      }}
                      startIcon={<Heart size={16} />}
                    >
                      Support
                    </Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <style>{`
          .swiper-pagination-bullet-active {
            background: var(--brand-primary) !important;
          }
        `}</style>
      </div>
    </section>
  );
}
