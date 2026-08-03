import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

import { Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';
import { Quote, MapPin } from 'lucide-react';
import { stories } from '../data/bethesdaData';

export default function Stories() {
  return (
    <section id="stories" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-badge">
            💬 Real Lives Changed
          </div>
          <h2 className="section-heading" style={{ fontSize: 'clamp(28px, 5vw, 40px)' }}>
            Stories of Hope & Renewal
          </h2>
          <p className="section-subheading">
            Behind every stat is a real human life given dignity, education, and health.
          </p>
        </div>

        <Box sx={{ maxWidth: '420px', margin: '0 auto', paddingBottom: '40px' }}>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCards, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {stories.map((story, idx) => {
              const truncatedQuote = story.quote.length > 80 
                ? story.quote.substring(0, 80) + '...' 
                : story.quote;

              return (
                <SwiperSlide key={idx}>
                  <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={story.image}
                      alt={story.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ backgroundColor: 'var(--bg-secondary, #fff)', p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Chip 
                          label={story.category} 
                          size="small" 
                          sx={{ 
                            backgroundColor: 'var(--brand-light, #e0f2fe)', 
                            color: 'var(--brand-primary, #0284c7)', 
                            fontWeight: 'bold' 
                          }} 
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                          <MapPin size={14} style={{ color: 'var(--brand-primary, #0284c7)' }} />
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>{story.location}</Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1, color: 'var(--text-primary)' }}>
                        {story.name}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                        <Quote size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0, opacity: 0.5, marginTop: '2px' }} />
                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'var(--text-secondary, #475569)' }}>
                          "{truncatedQuote}"
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </div>

      <style>{`
        .mySwiper .swiper-pagination {
          bottom: -30px !important;
        }
        .mySwiper .swiper-pagination-bullet {
          background-color: var(--brand-primary, #0284c7);
        }
        .mySwiper {
          overflow: visible;
        }
      `}</style>
    </section>
  );
}
