import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { leadershipTeam } from '../data/bethesdaData';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="section" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-badge">
            👥 Executive Leadership
          </div>
          <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 5vw, 40px)' }}>
            Meet Our Leadership Team
          </h2>
          <p className="section-subheading">
            Guided by dedicated leaders serving Bethesda Charitable Trust with integrity and compassion.
          </p>
        </div>

        {/* Minimal Leadership Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '24px' 
          }}
          className="leadership-grid"
        >
          {leadershipTeam.map((member, idx) => (
            <Card
              key={idx}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                bgcolor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-glass)',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: 'var(--shadow-lg)',
                }
              }}
            >
              {/* Photo Header */}
              <Box sx={{ height: 260, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    transition: 'transform 0.5s ease',
                    '&:hover': { transform: 'scale(1.06)' }
                  }}
                />
              </Box>

              {/* Minimal Name & Role */}
              <CardContent sx={{ p: 2, textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    fontSize: '17px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {member.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    color: 'var(--brand-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '12px',
                    mt: 0.5,
                  }}
                >
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
