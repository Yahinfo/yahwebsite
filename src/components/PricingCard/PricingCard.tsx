import { Box, Typography, Card, CardContent, Button, Stack, Chip } from '@mui/material';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { PricingPlan } from '../../types';

interface PricingCardProps {
  plan: PricingPlan;
  index?: number;
}

export default function PricingCard({ plan, index = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <Card
        sx={{
          background: plan.popular
            ? `linear-gradient(145deg, #111111, ${plan.color}08)`
            : '#111111',
          border: plan.popular ? `2px solid ${plan.color}40` : '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
          height: '100%',
          position: 'relative',
          overflow: 'visible',
          transition: 'all 0.4s ease',
          '&:hover': { boxShadow: `0 20px 60px ${plan.color}20` },
        }}
      >
        {plan.popular && (
          <Chip
            label="Most Popular"
            sx={{
              position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
              background: `linear-gradient(135deg, ${plan.color}, #8B5CF6)`,
              color: '#050505', fontWeight: 700,
            }}
          />
        )}
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>{plan.name}</Typography>
          <Box sx={{ my: 3 }}>
            <Typography
              variant="h3"
              sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, color: plan.color }}
            >
              {plan.price}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>{plan.period}</Typography>
          </Box>
          <Stack spacing={1.5} sx={{ mb: 4, textAlign: 'left' }}>
            {plan.features.map((f) => (
              <Box key={f} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <FaCheck size={14} color={plan.color} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{f}</Typography>
              </Box>
            ))}
          </Stack>
          <Button
            variant={plan.popular ? 'contained' : 'outlined'}
            fullWidth
            sx={{
              borderRadius: '14px', py: 1.5,
              ...(plan.popular
                ? { background: `linear-gradient(135deg, ${plan.color}, #8B5CF6)` }
                : { borderColor: `${plan.color}40`, color: plan.color }),
            }}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
