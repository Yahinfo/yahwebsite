import { Box, Typography, Card, CardContent, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { getIcon } from '../../utils';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = getIcon(service.icon);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card
        sx={{
          background: '#111111',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
          height: '100%',
          transition: 'all 0.4s ease',
          '&:hover': {
            borderColor: `${service.color}40`,
            boxShadow: `0 20px 60px ${service.color}15`,
            '& .service-icon': { transform: 'rotate(10deg) scale(1.1)' },
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box
            className="service-icon"
            sx={{
              width: 56, height: 56, borderRadius: '16px',
              background: `linear-gradient(135deg, ${service.color}20, ${service.color}05)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              mb: 2, color: service.color, fontSize: '1.5rem',
              transition: 'transform 0.4s ease',
            }}
          >
            <Icon />
          </Box>
          <Typography variant="h6" sx={{ mb: 1 }}>{service.title}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            {service.description}
          </Typography>
          <Stack spacing={0.5}>
            {service.features.map((f) => (
              <Typography key={f} variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ width: 4, height: 4, borderRadius: '50%', background: service.color }} />
                {f}
              </Typography>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}
