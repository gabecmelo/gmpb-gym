import { Box } from "@mui/material"
import Slogan from "../components/Slogan"
import SearchExercises from "../components/SearchExercises"
import Exercises from "../components/Exercises"
import { useState } from "react"

function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <Slogan />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home