import { Box, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { PARTNERS } from '../../constants/home';

export default function PartnerLogos() {
  return (
    <Box sx={{ py: 6, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          loop
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <SwiperSlide key={`${partner.name}-${i}`}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 60,
                  opacity: 0.4,
                  filter: 'grayscale(100%) brightness(2)',
                  transition: 'all 0.4s ease',
                  '&:hover': { opacity: 1, filter: 'grayscale(0%) brightness(1)' },
                }}
              >
                <Box
                  component="img"
                  src={partner.logo}
                  alt={partner.name}
                  sx={{ maxHeight: 36, maxWidth: 120, objectFit: 'contain' }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
