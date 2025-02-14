import React from 'react';
import { Grid, Box, Container, Typography, Card, CardContent, Paper, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../assets/logo.png';
import Profile from '../assets/Profile.jpg';

const styles = {
    container: {
        maxWidth: "100%",
        backgroundColor: '#FAFAFA',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '5rem',
    },
    header: {
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem 5%',
        backgroundColor: '#333',
        alignItems: 'center',
    },
    logo: {
        width: '150px',
        height: '150px',
    },
    headerTitle: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: '2rem',
    },
    contentGrid: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '3rem 5%',
    },
    avatarBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center',
    },
    avatarImage: {
        width: '300px',
        height: '300px',
        borderRadius: '50%',
    },
    sectionTitle: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    card: {
        width: '100%',
        marginBottom: '2rem',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10rem',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.25rem',
    },
    footer: {
        backgroundColor: '#212121',
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        padding: '2rem',
    },
    messageButton: {
        backgroundColor: '#0288d1',
        color: '#fff',
        textTransform: 'none',
        padding: '1rem 2rem',
        width: '100%',
        borderRadius: '5px',
    },
    socialIcons: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
    },
};

function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container style={styles.container}>
            {/* Header */}
            <Box style={styles.header}>
                <img src={logo} alt="Logo" style={styles.logo} />
                <Typography variant="h3" style={styles.headerTitle}>My Web Resume</Typography>
            </Box>

            {/* Main Content */}
            <Grid container spacing={2} style={styles.contentGrid}>
                {/* Left Column */}
                <Grid item xs={12} md={6}>
                    <Box style={styles.avatarBox}>
                        <Avatar alt="Philip Joshua T. Guadalquiver" src={Profile} style={styles.avatarImage} />
                        <Typography variant="h5" style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            Philip Joshua T. Guadalquiver
                        </Typography>
                        <Typography variant="subtitle1" style={{ fontWeight: '300', marginTop: '0.5rem' }}>
                            FullStack Developer
                        </Typography>
                    </Box>
                    {/* Contact Section */}
                <Box style={styles.avatarBox}>
                    <Typography variant="h4" style={styles.sectionTitle}>Let's get in touch</Typography>
                    <Typography variant="subtitle1" style={{ fontWeight: '300', marginBottom: '2rem' }}>
                        I am open for any suggestion
                    </Typography>

                    <Box style={{ width: '100%', paddingBottom: '2rem' }}>
                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Contact Number</Typography>
                        <Typography variant="body1" style={{ fontWeight: '300' }}>09085934761</Typography>
                    </Box>
                    <Box style={{ width: '100%', paddingBottom: '2rem' }}>
                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Email Address</Typography>
                        <Typography variant="body1" style={{ fontWeight: '300' }}>guadalquiverphilip@gmail.com</Typography>
                    </Box>
                    <Box style={{ width: '100%', paddingBottom: '2rem' }}>
                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Home Address</Typography>
                        <Typography variant="body1" style={{ fontWeight: '300' }}>
                            Blk 7 Lot 3 Orchid St. Rolling meadows I San Bartolome Novaliches Quezon City
                        </Typography>
                    </Box>

                </Box>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" style={styles.sectionTitle}>Hello, a bit about me:</Typography>
                    <Typography variant="body1" paragraph style={{ fontSize: '1rem', fontWeight: '300' }}>
                        Lorem ipsum dolor sit amet. Ex quis possimus 33 voluptatem suscipit eum deserunt minus est voluptatum rerum eum quia ratione.
                        Aut accusantium enim et enim quod qui eligendi distinctio ut consequatur error qui veritatis explicabo.
                        Est praesentium veritatis qui provident error in voluptas consectetur.
                        At fugiat magnam aut unde tenetur vel quod quasi sit nesciunt quos nam consequatur iste sit deserunt rerum!
                        Et corrupti quasi cum nesciunt iste sed eaque enim. Ut harum ducimus eum velit dolor vel fugiat animi.
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card style={styles.card}>
                                <CardContent style={styles.cardContent}>My Resume</CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={styles.card}>
                                <CardContent style={styles.cardContent}>My Projects</CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={styles.card}>
                                <CardContent style={styles.cardContent}>My Skills</CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', mb: 2 }}>
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <PersonIcon />
                        </IconButton>
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Full Name" inputProps={{ 'aria-label': 'Full Name' }} />
                    </Paper>

                    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', mb: 2 }}>
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <EmailIcon />
                        </IconButton>
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Email Address" inputProps={{ 'aria-label': 'Email Address' }} />
                    </Paper>

                    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', mb: 2 }}>
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Message" multiline rows={4} variant="standard" inputProps={{ 'aria-label': 'Message' }} />
                    </Paper>

                    <Button variant="contained" size="large" style={styles.messageButton} startIcon={<SendIcon />}>
                        SEND MESSAGE
                    </Button>
                </Grid>

            </Grid>


            {/* Footer */}
            <Box style={styles.footer}>
                <Typography variant="body2">&copy; 2025 Blitzker. All rights reserved.</Typography>
                <Box style={styles.socialIcons}>
                    <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton color="inherit" href="https://github.com" target="_blank">
                        <GitHubIcon />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    );
}

export default Home;
