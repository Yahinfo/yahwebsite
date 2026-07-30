import {
  Box, Typography, Stepper, Step, StepLabel, StepContent, StepConnector, stepConnectorClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { getIcon } from '../../utils';
import type { TimelineItem } from '../../types';

const ColorConnector = styled(StepConnector)(() => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: 'rgba(0,229,255,0.2)',
    borderLeftWidth: 2,
  },
}));

interface TimelineProps {
  items: TimelineItem[];
}

export default function TimelineComponent({ items }: TimelineProps) {
  return (
    <Stepper orientation="vertical" connector={<ColorConnector />} sx={{ pl: 0 }}>
      {items.map((item, index) => {
        const Icon = getIcon(item.icon);
        return (
          <Step key={item.title} active expanded>
            <StepLabel
              StepIconComponent={() => (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: 'spring' }}
                >
                  <Box
                    sx={{
                      width: 44, height: 44, borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(0,229,255,0.2), rgba(139,92,246,0.2))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'primary.main', fontSize: '1.1rem',
                      border: '1px solid rgba(0,229,255,0.2)',
                    }}
                  >
                    <Icon />
                  </Box>
                </motion.div>
              )}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{item.title}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body2" sx={{ color: 'text.secondary', pb: 3, pl: 1 }}>
                {item.description}
              </Typography>
            </StepContent>
          </Step>
        );
      })}
    </Stepper>
  );
}
