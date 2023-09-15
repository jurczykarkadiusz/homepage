import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const CatSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

// eslint-disable-next-line react/display-name
export const CatContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-cat"
    m="auto"
    mt={['20px', '0px', '-40px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <CatContainer>
      <CatSpinner />
    </CatContainer>
  )
}

export default Loader