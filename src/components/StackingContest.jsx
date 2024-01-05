import React, { useState } from 'react'
import { Box, BoxContainer, ChildBox } from '../styles/styledComponents/Container'

const StackingContest = () => {
  const [array, setArray] = useState(8);
  let child = []
  for (let i = 0; i < array; i++) {
    child.push(<ChildBox key={i} />)
  }
  return (
    <BoxContainer>

      <Box>
        {child}
      </Box>
    </BoxContainer>
  )
}

export default StackingContest
