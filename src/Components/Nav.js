import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, ListItem,} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';


const styles = {
    Box_Nav: {
        width: '50%',
        height: 'auto',
        display: 'flex',
        flex: '0.5',
        justifyContent: 'space-around',
        padding: '50px 0',
    },
    NavItem: {
        color: '#333',
        textDecoration: 'none',
        cursor: 'pointer',
        fontSize: '20px'
    },
    Accordion: {
        width: '30%',
        boxShadow: 'none',
        border: 'none',
        fontSize: '20px'
    },
    AccordionSummary: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FBFBFB',
        color: '#333',
        '&.Mui-expanded': {
            margin: '0 0 0 0',
        },
    },
    AccordionDetails: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FBFBFB',
        color: '#333',
        padding: '0 0 0 0',
    },
};

const Nav = () => {
    return (
        <>
            <Box style={styles.Box_Nav}>
                <Button variant="contained" color="secondary" size="small" style={{ ...styles.NavItem, fontWeight: 'bold',color: '#fff',}}>Home</Button>
                <Button variant="text" size="small" style={{ ...styles.NavItem }}>Resume</Button>
                {/* <Accordion style={styles.Accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={{...styles.AccordionSummary, ...styles.NavItem, fontWeight: '500',}}
                    >
                        Projects
                    </AccordionSummary>
                    <AccordionDetails style={styles.AccordionDetails}>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    My Projects
                                </ListSubheader>
                            }
                        >
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SendIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Project 1" />
                                </ListItemButton>
                            </ListItem>

                        </List>
                    </AccordionDetails>
                </Accordion> */}
                <Button variant="text" size="small" style={{ ...styles.NavItem }}>Contact</Button>
            </Box>
        </>
    );
}

export default Nav;
