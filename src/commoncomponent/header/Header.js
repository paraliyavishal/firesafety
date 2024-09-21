import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import GoogleIcon from '@mui/icons-material/Google';
import CallIcon from '@mui/icons-material/Call';
import { Box, Container, Typography } from '@mui/material';

function Header() {
  return (
    <Box sx={{backgroundColor:"black",py:2}}>
    <Container maxWidth=''>
           <Box sx={{display:{lg:"flex",md:"flex",sm:"flex",xs:"block"},alignItems:"center",justifyContent:"space-between"}}>
                <Box sx={{display:"flex",alignItems:"center",gap:"15px",justifyContent:{xs:"center"},pb:{xs:2,sm:0,md:0}}}>
                  <GoogleIcon sx={{color:"white"}}/>
                  <FacebookIcon sx={{color:"white"}}/>
                  <LinkedInIcon sx={{color:"white"}}/>
                  <WhatsAppIcon sx={{color:"white"}}/>
                  <MailIcon sx={{color:"white"}}/>
                </Box>
                <Box>
                    <Typography sx={{color:"white",display:"flex",alignItems:"center",gap:"5px",justifyContent:{xs:"center"}}}><CallIcon /> 020 3797 3053</Typography>
                </Box>
           </Box>
    </Container>
    </Box>
  );
}

export default Header;
