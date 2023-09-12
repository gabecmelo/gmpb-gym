import { Box } from "@mui/material"
import Slogan from "../components/Slogan"
import SearchExercises from "../components/SearchExercises"
import Exercises from "../components/Exercises"

function Home() {
  return (
    <Box>
      <Slogan />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home