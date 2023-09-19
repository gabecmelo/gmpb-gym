import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';
import { Props } from '../utils/types';
import { portugueseWords, translateWord } from '../utils/translateWord';

function SearchExercises({setExercises, bodyPart, setBodyPart }: Props) {

  const [search, setSearch] = useState<string>('');
  const [bodyParts, setBodyParts] = useState<Array<string>>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if (search) {
      const normalizedSearch = search.normalize("NFKD").replace(/[\u0300-\u036f]/g, '')            
      const translatedWord = portugueseWords.includes(normalizedSearch) ? translateWord(normalizedSearch) : search
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter((exercise: any) => (
        exercise.bodyPart.toLowerCase().includes(translatedWord)
      ));

      setSearch('');
      setExercises(searchedExercises);
      console.log(searchedExercises);            
    }
  }

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      mt='37px'
      p='20px'
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        p='34px'
        mb='50px'
        textAlign='center'
      >
        Exercícios incríveis que você <br /> deveria conhecer
      </Typography>
      <Box
        position='relative'
        mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            height: '76px',
            width: { lg: '800px', xs: '250px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          value={search}
          onChange={({ target }) => setSearch(target.value.toLowerCase())}
          placeholder='Pesquisar exercícios'
        />
        <Button
          onClick={handleSearch}
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            height: '56px',
            fontSize: { lg: '20px', xd: '14px' },
          }}
        >
          Pesquisar
        </Button>
      </Box>
      <Box
      sx={{
        position: 'relative',
        width: '100%',
        p: '40px'
      }}
      >
        <HorizontalScrollBar 
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises