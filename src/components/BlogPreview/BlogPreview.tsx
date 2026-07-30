import { Box, Typography, Card, CardContent, CardMedia, Chip, Grid, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaClock, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { formatDate } from '../../utils';
import type { BlogPost } from '../../types';

interface BlogPreviewProps {
  posts: BlogPost[];
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  const featured = posts.find((p) => p.featured) || posts[0];
  const rest = posts.filter((p) => p.id !== featured.id).slice(0, 3);

  return (
    <Box className="section">
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography variant="h3">
            Latest from our <Box component="span" className="gradient-text">Blog</Box>
          </Typography>
          <Button component={Link} to="/blog" endIcon={<FaArrowRight />} sx={{ color: 'primary.main' }}>
            View All
          </Button>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card
                className="img-zoom hover-lift"
                sx={{
                  borderRadius: '20px', overflow: 'hidden', height: '100%',
                  border: '1px solid rgba(255,255,255,0.06)',
                  '&:hover': { borderColor: 'rgba(0,229,255,0.2)', boxShadow: '0 20px 60px rgba(0,229,255,0.1)' },
                }}
              >
                <CardMedia
                  component="img"
                  height="280"
                  image={featured.image}
                  alt={featured.title}
                  sx={{ transition: 'transform 0.6s ease' }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Chip label={featured.category} size="small" sx={{ mb: 2, background: 'rgba(0,229,255,0.1)', color: 'primary.main' }} />
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>{featured.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>{featured.excerpt}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                    <FaClock size={12} />
                    <Typography variant="caption">{formatDate(featured.date)} · {featured.readTime}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              {rest.map((post, index) => (
                <Grid size={{ xs: 12 }} key={post.id}>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        display: 'flex', borderRadius: '16px', overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.06)',
                        transition: 'all 0.3s ease',
                        '&:hover': { borderColor: 'rgba(0,229,255,0.15)', transform: 'translateX(4px)' },
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 140, objectFit: 'cover' }}
                        image={post.image}
                        alt={post.title}
                      />
                      <CardContent sx={{ flex: 1, py: 2 }}>
                        <Chip label={post.category} size="small" sx={{ mb: 1, fontSize: '0.65rem', height: 22, background: 'rgba(139,92,246,0.1)', color: 'secondary.main' }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, lineHeight: 1.4 }}>{post.title}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{post.readTime}</Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
