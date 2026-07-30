import { useState } from 'react';
import {
  Box, Typography, Container, Grid, Card, CardContent, CardMedia, Chip, TextField,
  Button, Stack, InputAdornment, Snackbar, Alert,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../../constants/content';
import { formatDate } from '../../utils';
import { subscribeNewsletter } from '../../services/api';

export default function Blog() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const filtered = BLOG_POSTS.filter((p) => {
    const matchCat = category === 'All' || p.category === category;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = BLOG_POSTS.find((p) => p.featured);

  const handleSubscribe = async () => {
    if (!email) return;
    const result = await subscribeNewsletter(email);
    setSnack({ open: true, message: result.message, severity: result.success ? 'success' : 'error' });
    if (result.success) setEmail('');
  };

  return (
    <Box className="scan-line" sx={{ position: 'relative', minHeight: '100vh' }}>
      {/* Cyber header glow */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300, background: 'linear-gradient(180deg, rgba(0,229,255,0.05), transparent)', pointerEvents: 'none' }} />

      <Container maxWidth="lg" sx={{ py: 6, position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 4, fontFamily: '"Space Grotesk", monospace' }}>
            // CYBER_INTEL_BLOG
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Tech Insights & <Box component="span" className="gradient-text">Security</Box>
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {featured && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <Card
                  className="img-zoom hover-lift"
                  sx={{
                    mb: 4, borderRadius: '20px', overflow: 'hidden',
                    border: '1px solid rgba(0,229,255,0.15)',
                    boxShadow: '0 0 40px rgba(0,229,255,0.08)',
                  }}
                >
                  <CardMedia component="img" height="350" image={featured.image} alt={featured.title} />
                  <CardContent sx={{ p: 3 }}>
                    <Chip label="Featured" size="small" sx={{ mb: 2, background: 'rgba(0,229,255,0.15)', color: 'primary.main', fontWeight: 700 }} />
                    <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>{featured.title}</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>{featured.excerpt}</Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>{featured.author}</Typography>
                      <FaClock size={12} color="rgba(255,255,255,0.5)" />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>{formatDate(featured.date)} · {featured.readTime}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            <Grid container spacing={3}>
              {filtered.map((post, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={post.id}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <Card
                      className="img-zoom hover-lift"
                      sx={{
                        borderRadius: '16px', overflow: 'hidden', height: '100%',
                        border: '1px solid rgba(255,255,255,0.06)',
                        transition: 'all 0.4s ease',
                        '&:hover': { borderColor: 'rgba(0,229,255,0.2)', boxShadow: '0 10px 40px rgba(0,229,255,0.1)' },
                      }}
                    >
                      <CardMedia component="img" height="180" image={post.image} alt={post.title} />
                      <CardContent sx={{ p: 2.5 }}>
                        <Chip label={post.category} size="small" sx={{ mb: 1.5, fontSize: '0.7rem', background: 'rgba(139,92,246,0.1)', color: 'secondary.main' }} />
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, lineHeight: 1.3 }}>{post.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {post.excerpt}
                        </Typography>
                        <Stack direction="row" spacing={0.5} flexWrap="wrap" gap={0.5}>
                          {post.tags.map((tag) => (
                            <Chip key={tag} label={`#${tag}`} size="small" variant="outlined" sx={{ fontSize: '0.65rem', height: 22, borderColor: 'rgba(255,255,255,0.1)' }} />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={3} sx={{ position: { lg: 'sticky' }, top: 100 }}>
              <Box sx={{ p: 3, borderRadius: '16px', background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <TextField
                  fullWidth
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: 'text.secondary' }} /></InputAdornment> }}
                />
              </Box>

              <Box sx={{ p: 3, borderRadius: '16px', background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Categories</Typography>
                <Stack spacing={1}>
                  {BLOG_CATEGORIES.map((cat) => (
                    <Typography
                      key={cat}
                      variant="body2"
                      onClick={() => setCategory(cat)}
                      sx={{
                        cursor: 'pointer', py: 0.5, px: 1, borderRadius: '8px',
                        color: category === cat ? 'primary.main' : 'text.secondary',
                        background: category === cat ? 'rgba(0,229,255,0.08)' : 'transparent',
                        fontWeight: category === cat ? 600 : 400,
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      {cat}
                    </Typography>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ p: 3, borderRadius: '16px', background: 'linear-gradient(145deg, #111111, rgba(0,229,255,0.05))', border: '1px solid rgba(0,229,255,0.1)' }}>
                <Typography variant="h6" sx={{ mb: 1 }}>Newsletter</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>Get the latest tech insights delivered to your inbox.</Typography>
                <TextField fullWidth size="small" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mb: 1.5 }} />
                <Button fullWidth variant="contained" onClick={handleSubscribe} sx={{ background: 'linear-gradient(135deg, #00E5FF, #3B82F6)' }}>
                  Subscribe
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={snack.open} autoHideDuration={4000} onClose={() => setSnack({ ...snack, open: false })}>
        <Alert severity={snack.severity} variant="filled">{snack.message}</Alert>
      </Snackbar>
    </Box>
  );
}
