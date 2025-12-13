import React from 'react';
import { Grid, Box, Container, Typography, Card, CardContent, Paper, Button, Chip, Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
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
    sectionBox: {
        marginBottom: '3rem',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    skillChip: {
        margin: '0.5rem',
        padding: '0.5rem 1rem',
    },
    projectCard: {
        height: '100%',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        },
    },
    timelineItem: {
        marginBottom: '2rem',
    },
};

function Home() {

    const skills = {
        frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Material-UI', 'Responsive Design', 'TypeScript'],
        backend: ['Node.js', 'Express.js', 'PostgreSQL', 'RESTful APIs', 'MySQL', 'Firebase', 'GraphQL'],
        tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Webpack', 'Docker'],
        other: ['PERN Stack', 'Agile/Scrum', 'Problem Solving', 'Team Collaboration', 'Code Review']
    };

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
            status: 'Completed'
        },
        {
            title: 'Portfolio Website',
            description: 'Responsive portfolio website showcasing projects, skills, and professional experience with modern UI/UX design.',
            technologies: ['React', 'Material-UI', 'CSS3'],
            status: 'In Progress'
        }
    ];

    const experience = [
        {
            title: 'Full Stack Developer',
            company: 'JeonSoft Corporation',
            period: '2023 - Present',
            description: 'Developing and maintaining full-stack web applications using the PERN stack (PostgreSQL, Express, React, Node.js). Building scalable and efficient solutions while collaborating with cross-functional teams to deliver high-quality software.',
            achievements: [
                'Developing full-stack applications using PERN stack technologies',
                'Building RESTful APIs with Express.js and Node.js',
                'Creating responsive user interfaces with React.js',
                'Working with PostgreSQL databases for data management',
                'Collaborating with team members on agile development projects'
            ]
        }
    ];

    const education = [
        {
            degree: 'Bachelor of Science in Computer Science',
            school: 'Our Lady of Fatima University',
            period: '2019 - 2023',
            description: 'Focused on software engineering, web development, and database management.'
        }
    ];

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
                    {/* About Me Section */}
                    <Box style={styles.sectionBox}>
                        <Typography variant="h4" style={styles.sectionTitle}>Hello, a bit about me:</Typography>
                        <Typography variant="body1" paragraph style={{ fontSize: '1rem', fontWeight: '300', lineHeight: '1.8' }}>
                            I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                            I specialize in creating responsive, user-friendly interfaces and robust backend systems. 
                            With a strong foundation in both frontend and backend technologies, I bring ideas to life 
                            through clean, efficient code and innovative solutions.
                        </Typography>
                        <Typography variant="body1" paragraph style={{ fontSize: '1rem', fontWeight: '300', lineHeight: '1.8' }}>
                            My journey in web development started with a curiosity about how websites work, and it has 
                            evolved into a career focused on creating exceptional digital experiences. I'm always eager 
                            to learn new technologies and take on challenging projects that push my boundaries.
                        </Typography>
                        <Typography variant="body1" paragraph style={{ fontSize: '1rem', fontWeight: '300', lineHeight: '1.8' }}>
                            When I'm not coding, I enjoy contributing to open-source projects, writing technical blogs, 
                            and staying updated with the latest industry trends. I believe in writing code that is not 
                            just functional, but also maintainable and scalable.
                        </Typography>
                    </Box>

                    {/* Quick Links */}
                    <Grid container spacing={2} style={{ marginBottom: '2rem' }}>
                        <Grid item xs={4}>
                            <Card style={styles.card}>
                                <CardContent style={styles.cardContent}>
                                    <CodeIcon sx={{ fontSize: 40, mb: 1 }} />
                                    <Typography variant="h6">My Resume</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={styles.card}>
                                <CardContent style={styles.cardContent}>
                                    <WebIcon sx={{ fontSize: 40, mb: 1 }} />
                                    <Typography variant="h6">My Projects</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={styles.card}>
                                <CardContent style={styles.cardContent}>
                                    <DesignServicesIcon sx={{ fontSize: 40, mb: 1 }} />
                                    <Typography variant="h6">My Skills</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Skills Section */}
                    <Box style={styles.sectionBox}>
                        <Typography variant="h4" style={styles.sectionTitle}>Technical Skills</Typography>
                            <Divider style={{ marginBottom: '1.5rem' }} />
                            
                            <Typography variant="h6" style={{ marginTop: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                                <CodeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Frontend Technologies
                            </Typography>
                            <Box>
                                {skills.frontend.map((skill, index) => (
                                    <Chip key={index} label={skill} style={styles.skillChip} color="primary" variant="outlined" />
                                ))}
                            </Box>

                            <Typography variant="h6" style={{ marginTop: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                                <StorageIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Backend Technologies
                            </Typography>
                            <Box>
                                {skills.backend.map((skill, index) => (
                                    <Chip key={index} label={skill} style={styles.skillChip} color="secondary" variant="outlined" />
                                ))}
                            </Box>

                            <Typography variant="h6" style={{ marginTop: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                                Tools & Technologies
                            </Typography>
                            <Box>
                                {skills.tools.map((skill, index) => (
                                    <Chip key={index} label={skill} style={styles.skillChip} color="default" variant="outlined" />
                                ))}
                            </Box>

                            <Typography variant="h6" style={{ marginTop: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                                Other Skills
                            </Typography>
                            <Box>
                                {skills.other.map((skill, index) => (
                                    <Chip key={index} label={skill} style={styles.skillChip} color="success" variant="outlined" />
                                ))}
                            </Box>
                    </Box>

                    {/* Projects Section */}
                    <Box style={styles.sectionBox}>
                            <Typography variant="h4" style={styles.sectionTitle}>My Projects</Typography>
                            <Divider style={{ marginBottom: '1.5rem' }} />
                            
                            <Grid container spacing={2}>
                                {projects.map((project, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Card style={styles.projectCard}>
                                            <CardContent>
                                                <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                                    {project.title}
                                                </Typography>
                                                <Chip 
                                                    label={project.status} 
                                                    size="small" 
                                                    color={project.status === 'Completed' ? 'success' : 'warning'}
                                                    style={{ marginBottom: '1rem' }}
                                                />
                                                <Typography variant="body1" paragraph style={{ fontWeight: '300', lineHeight: '1.8' }}>
                                                    {project.description}
                                                </Typography>
                                                <Box style={{ marginTop: '1rem' }}>
                                                    <Typography variant="subtitle2" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                                        Technologies Used:
                                                    </Typography>
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <Chip 
                                                            key={techIndex} 
                                                            label={tech} 
                                                            size="small" 
                                                            style={{ margin: '0.25rem' }}
                                                            variant="outlined"
                                                        />
                                                    ))}
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                    </Box>

                    {/* Resume/Experience Section */}
                    <Box style={styles.sectionBox}>
                            <Typography variant="h4" style={styles.sectionTitle}>Professional Experience</Typography>
                            <Divider style={{ marginBottom: '1.5rem' }} />
                            
                            {experience.map((exp, index) => (
                                <Box key={index} style={{ marginBottom: '2rem' }}>
                                    <Typography variant="h5" style={{ fontWeight: 'bold', color: '#0288d1' }}>
                                        {exp.title}
                                    </Typography>
                                    <Typography variant="h6" style={{ fontWeight: '600', marginTop: '0.25rem' }}>
                                        {exp.company}
                                    </Typography>
                                    <Typography variant="body2" style={{ color: '#666', marginBottom: '0.5rem' }}>
                                        {exp.period}
                                    </Typography>
                                    <Typography variant="body1" paragraph style={{ fontWeight: '300', lineHeight: '1.8' }}>
                                        {exp.description}
                                    </Typography>
                                    <Typography variant="subtitle2" style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>
                                        Key Achievements:
                                    </Typography>
                                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} style={{ marginBottom: '0.25rem', fontWeight: '300' }}>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                    {index < experience.length - 1 && <Divider style={{ marginTop: '1.5rem' }} />}
                                </Box>
                            ))}

                            <Typography variant="h4" style={{...styles.sectionTitle, marginTop: '3rem'}}>Education</Typography>
                            <Divider style={{ marginBottom: '1.5rem' }} />
                            
                            {education.map((edu, index) => (
                                <Box key={index}>
                                    <Typography variant="h5" style={{ fontWeight: 'bold', color: '#0288d1' }}>
                                        {edu.degree}
                                    </Typography>
                                    <Typography variant="h6" style={{ fontWeight: '600', marginTop: '0.25rem' }}>
                                        {edu.school}
                                    </Typography>
                                    <Typography variant="body2" style={{ color: '#666', marginBottom: '0.5rem' }}>
                                        {edu.period}
                                    </Typography>
                                    <Typography variant="body1" style={{ fontWeight: '300', lineHeight: '1.8' }}>
                                        {edu.description}
                                    </Typography>
                                </Box>
                            ))}
                    </Box>
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
