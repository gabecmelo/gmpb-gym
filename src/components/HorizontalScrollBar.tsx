import { Box } from "@mui/material"
import { v4 as uuidv4 } from "uuid"
import BodyPart from "./BodyPart"

type Props = {
  data: Array<string>
  bodyPart: string
  setBodyPart: (bodyPart: any)=> void
}

function HorizontalScrollBar({ data, bodyPart, setBodyPart }: Props) {
  return (
    <div>
      {data.map((item) => {
        const id = uuidv4();
        return (<Box
          key={id}
          m="0 40px"
        >
          <BodyPart
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart} />
        </Box>)
      })}
    </div>
  )
}

export default HorizontalScrollBar