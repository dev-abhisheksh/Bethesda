import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
          navigation={true}
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
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
            const percent = Math.min(100, Math.round((cause.raised / cause.goal) * 100));

            return (
              <SwiperSlide key={cause.id}>
                <Card 
                  className="cause-card"
                  sx={{ 
                    maxWidth: 'none', 
                    borderRadius: 4, 
                    overflow: 'hidden', 
                    transition: '0.3s', 
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } 
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
                      background: 'var(--brand-light, #ecfdf5)',
                      color: 'var(--brand-primary, #10b981)',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      borderRadius: 'var(--radius-full, 9999px)'
                    }}>
                      {cause.category}
                    </div>
                  </div>
                  
                  <CardContent sx={{ pb: 1 }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 700, lineHeight: 1.3 }}>
                      {cause.title}
                    </Typography>
                    
                    {/* Slim Progress Bar */}
                    <div style={{ marginTop: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600', marginBottom: '4px' }}>
                        <span style={{ color: 'var(--brand-primary, #10b981)' }}>{percent}% Funded</span>
                      </div>
                      <div style={{
                        width: '100%',
                        height: '6px',
                        backgroundColor: 'var(--bg-tertiary, #e5e7eb)',
                        borderRadius: 'var(--radius-full, 9999px)',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${percent}%`,
                          height: '100%',
                          backgroundColor: 'var(--brand-primary, #10b981)',
                          borderRadius: 'var(--radius-full, 9999px)',
                        }}></div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                      variant="contained" 
                      fullWidth 
                      onClick={() => onOpenDonate(cause.title)}
                      sx={{ 
                        backgroundColor: 'var(--brand-primary, #10b981)', 
                        color: 'white',
                        textTransform: 'none',
                        fontWeight: 600,
                        py: 1,
                        borderRadius: 'var(--radius-full, 9999px)',
                        '&:hover': { backgroundColor: 'var(--brand-dark, #059669)' }
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
          .swiper-button-next,
          .swiper-button-prev {
            color: var(--brand-primary, #10b981) !important;
          }
          .swiper-pagination-bullet-active {
            background: var(--brand-primary, #10b981) !important;
          }
        `}</style>
      </div>
    </section>
  );
}
