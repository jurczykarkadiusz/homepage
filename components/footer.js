import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" position="relativee">
      &copy;2019 - {new Date().getFullYear()} Arkadiusz Jurczyk. All Rights Reserved.
    </Box>
  )
}

export default Footer
