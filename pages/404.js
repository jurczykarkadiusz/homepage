import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Nie istnieje</Heading>
      <Text>Strona której szukasz, nie została znaleziona.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Wstecz
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound