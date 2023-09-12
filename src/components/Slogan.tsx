import { Box, Button, Typography } from "@mui/material"
import Banner from '../assets/images/DinoCbum.jpg'

function Slogan() {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }}
      position="relative"
      p="20px"
    >
      <Typography
        color="#FF2625"
        fontWeight={600}
        fontSize="26px"
      >
        App Fitness
      </Typography>
      <Typography
        fontWeight={700}
        mb="23px"
        mt="30px"
        sx={{ fontSize: { lg: '36px', xs: '30px' } }}>
        Não é sobre o peso que você perde, <br />mas sobre a vida que você ganha.
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={5}
      >
        Confira os exercícios mais eficazes
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: '#FF2625',
          padding: '12px',
          fontSize: '16px',
          fontFamily: 'Lora',
          fontWeight: '600'
        }}
      >
        Explorar Exercícios
      </Button>
      <img
        src={Banner}
        alt="Page banner"
        className="hero-banner-img" 
        style={{borderBottomLeftRadius: 100}}
        />
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
      >
        Exercícios
      </Typography>
    </Box>
  )
}

export default Slogan