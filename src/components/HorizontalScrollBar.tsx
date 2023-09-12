import { Box } from "@mui/material"
import { v4 as uuidv4 } from "uuid"
import BodyPart from "./BodyPart"

type Props = {
  data: Array<string>
}

function HorizontalScrollBar({ data }: Props) {
  return (
    <div>
      {data.map((item) => {
        console.log(item);
        
        const id = uuidv4();         
        return (<Box
          key={ id }
        >
          <BodyPart />
        </Box>)
      })}
    </div>
  )
}

export default HorizontalScrollBar