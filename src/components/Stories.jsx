import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';
import { Quote, MapPin, Calendar, Heart } from 'lucide-react';
import { stories } from '../data/bethesdaData';

export default function Stories() {
  return (
    <section id="stories" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="section-badge">
            💬 Real Lives Transformed
          </div>
          <h2 className="section-heading" style={{ fontSize: 'clamp(26px, 5vw, 42px)' }}>
            Stories of Hope & Renewal
          </h2>
          <p className="section-subheading">
            Behind every metric is a real human life blessed with dignity, healthcare, and education. Swipe vertically to explore their journeys.
          </p>
        </div>

        {/* Vertical Swiper Container Wrapper */}
        <Box 
          sx={{ 
            maxWidth: '820px', 
            margin: '0 auto', 
            height: { xs: '580px', sm: '540px', md: '500px' },
            position: 'relative'
          }}
        >
          <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={24}
            mousewheel={true}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay, Mousewheel]}
            className="stories-vertical-swiper"
            style={{ width: '100%', height: '100%' }}
          >
            {stories.map((story, idx) => (
              <SwiperSlide key={idx} style={{ height: '100%' }}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    borderRadius: 4, 
                    overflow: 'hidden', 
                    bgcolor: 'var(--bg-card)', 
                    border: '1px solid var(--border-glass)',
                    boxShadow: 'var(--shadow-lg)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Left Side (or Top on Mobile) Image Box */}
                  <Box 
                    sx={{ 
                      width: { xs: '100%', sm: '42%' }, 
                      height: { xs: '200px', sm: '100%' }, 
                      position: 'relative',
                      flexShrink: 0
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={story.image}
                      alt={story.name}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Box 
                      sx={{ 
                        position: 'absolute', 
                        top: 16, 
                        left: 16,
                        display: 'flex',
                        gap: 1
                      }}
                    >
                      <Chip 
                        label={story.category} 
                        size="small" 
                        sx={{ 
                          backgroundColor: 'var(--brand-primary)', 
                          color: '#ffffff', 
                          fontWeight: 700,
                          fontSize: '12px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                        }} 
                      />
                    </Box>
                  </Box>

                  {/* Right Side Full Detailed Content */}
                  <CardContent 
                    sx={{ 
                      flexGrow: 1, 
                      p: { xs: 2.5, sm: 3.5 }, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between',
                      overflowY: 'auto'
                    }}
                  >
                    <div>
                      {/* Name & Metadata */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
                        <div>
                          <Typography variant="h5" sx={{ fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 3vw, 26px)' }}>
                            {story.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '13px', display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.3 }}>
                            <Calendar size={13} style={{ color: 'var(--brand-primary)' }} /> {story.age}
                          </Typography>
                        </div>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, backgroundColor: 'var(--bg-tertiary)', px: 1.5, py: 0.5, borderRadius: '9999px' }}>
                          <MapPin size={13} style={{ color: 'var(--brand-primary)' }} />
                          <Typography variant="caption" sx={{ fontWeight: 700, color: 'var(--text-secondary)' }}>
                            {story.location}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Prominent Quote Block */}
                      <Box 
                        sx={{ 
                          p: 2, 
                          borderRadius: 3, 
                          backgroundColor: 'var(--brand-light)', 
                          borderLeft: '4px solid var(--brand-primary)', 
                          mb: 2,
                          display: 'flex',
                          gap: 1.5,
                          alignItems: 'flex-start'
                        }}
                      >
                        <Quote size={22} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                        <Typography variant="body2" sx={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5, fontSize: 'clamp(13px, 2vw, 15px)' }}>
                          "{story.quote}"
                        </Typography>
                      </Box>

                      {/* Full Detailed Story Paragraph */}
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '14px' }}>
                        {story.storyText}
                      </Typography>
                    </div>

                    {/* Bottom Micro Impact Tag */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2, pt: 1.5, borderTop: '1px dashed var(--border-color)' }}>
                      <Heart size={14} fill="var(--brand-primary)" color="var(--brand-primary)" />
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Verified Bethesda Impact Story
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

      </div>

      {/* Vertical Swiper Custom CSS Adjustments */}
      <style>{`
        .stories-vertical-swiper .swiper-pagination {
          right: -24px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          left: auto !important;
          width: auto !important;
        }
        .stories-vertical-swiper .swiper-pagination-bullet {
          background: var(--brand-primary) !important;
          opacity: 0.4;
          width: 8px;
          height: 8px;
          margin: 6px 0 !important;
        }
        .stories-vertical-swiper .swiper-pagination-bullet-active {
          opacity: 1 !important;
          height: 20px !important;
          border-radius: 4px !important;
          background: var(--brand-primary) !important;
        }
        .stories-vertical-swiper .swiper-button-next,
        .stories-vertical-swiper .swiper-button-prev {
          color: var(--brand-primary) !important;
          background: var(--bg-card);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
          left: 50% !important;
          transform: translateX(-50%) !important;
        }
        .stories-vertical-swiper .swiper-button-prev {
          top: -24px !important;
        }
        .stories-vertical-swiper .swiper-button-prev::after {
          content: '▲' !important;
          font-size: 12px !important;
        }
        .stories-vertical-swiper .swiper-button-next {
          top: auto !important;
          bottom: -24px !important;
        }
        .stories-vertical-swiper .swiper-button-next::after {
          content: '▼' !important;
          font-size: 12px !important;
        }
        @media (max-width: 640px) {
          .stories-vertical-swiper .swiper-pagination {
            right: 6px !important;
          }
          .stories-vertical-swiper .swiper-button-next,
          .stories-vertical-swiper .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
