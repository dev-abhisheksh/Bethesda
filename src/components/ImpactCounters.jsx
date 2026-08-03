import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Utensils, GraduationCap, HeartHandshake, Stethoscope } from 'lucide-react';
import { impactMetrics } from '../data/bethesdaData';

export default function ImpactCounters() {
  const iconMap = {
    Utensils: <Utensils size={28} />,
    GraduationCap: <GraduationCap size={28} />,
    HeartHandshake: <HeartHandshake size={28} />,
    Stethoscope: <Stethoscope size={28} />,
  };

  return (
    <section id="impact" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <style>
        {`
          .swiper-pagination-bullet-active {
            background: var(--brand-primary) !important;
          }
          .impact-swiper {
            padding-bottom: 50px !important;
          }
        `}
      </style>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="section-badge">
            📊 Measured Real-World Impact
          </div>
          <h2 className="section-heading">
            Transforming Compassion into Concrete Results
          </h2>
          <p className="section-subheading">
            Every donation translates directly into meals, education, medical surgeries, and shelter for those who need it most.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="impact-swiper"
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          {impactMetrics.map((item) => (
            <SwiperSlide key={item.id}>
              <Card sx={{
                textAlign: 'center',
                py: 4,
                px: 2,
                borderRadius: 4,
                transition: '0.3s',
                backgroundColor: 'var(--bg-card)',
                boxShadow: 'var(--shadow-sm)',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 }
              }}>
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                  {/* Icon Header */}
                  <Box sx={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                  }}>
                    {iconMap[item.icon]}
                  </Box>

                  {/* Counter Value */}
                  <Typography variant="h3" sx={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(28px, 5vw, 38px)',
                    fontWeight: '800',
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                    letterSpacing: '-0.02em',
                  }}>
                    {item.value.toLocaleString()}{item.suffix}
                  </Typography>

                  {/* Title */}
                  <Typography variant="h6" sx={{
                    fontSize: 'clamp(14px, 2vw, 18px)',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                  }}>
                    {item.label}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
