import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { motion } from 'framer-motion';
import type { FAQItem } from '../../types';

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = 'Frequently Asked Questions' }: FAQProps) {
  return (
    <Box className="section">
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>
          {title.split(' ').map((word, i) =>
            i === title.split(' ').length - 1 ? (
              <Box key={word} component="span" className="gradient-text">{word}</Box>
            ) : (
              <Box key={word} component="span">{word} </Box>
            ),
          )}
        </Typography>
        {items.map((item, index) => (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
          >
            <Accordion
              sx={{
                background: '#111111',
                '&.Mui-expanded': {
                  borderColor: 'rgba(0,229,255,0.2)',
                  boxShadow: '0 4px 20px rgba(0,229,255,0.08)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}
                sx={{ '& .MuiAccordionSummary-content': { my: 2 } }}
              >
                <Typography variant="body1" sx={{ fontWeight: 600 }}>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
}
