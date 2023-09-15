import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import Image from 'next/image'
import Footer from '../components/footer'
import { IoLogoGithub } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Container position="relative" flex="1">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Cześć, jestem Freelance Web Developerem z Bielska-Białej!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arkadiusz Jurczyk
          </Heading>
          <p>Dżepetto wszelakich internetów (Developer / Muzyk / Designer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="125px"
            h="125px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/arek.jpg"
              alt="Profile image"
              borderRadius="full"
              width="125"
              height="125"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Moja praca
        </Heading>
        <Paragraph>
          Arek to freelance web developer z Bielska-Białej, który jest napędzany
          głęboką pasją do tworzenia rozwiązań cyfrowych, które harmonizują z
          jego osobistą wizją. Jego ekspertyza obejmuje cały cykl życia
          produktu, poczynając od strategicznego planowania i kreatywnego
          projektowania, aż do wdrażania pragmatycznych rozwiązań kodowych,
          które rozwiązują rzeczywiste problemy. Poza cyfrowymi projektami, Arek
          ceni chwilę ze słuchawkami i muzyką, którą sam komponuje. Ponadto,
          jego pasją są także góry, których w malowniczym Bielsku-Białej jest
          wiele, co sprawia, że regularnie czerpie inspirację z ich
          majestatycznych widoków. Obecnie Arek skupia się na rozwijaniu swojej
          kreatywności poprzez tworzenie treści - wkrótce aktywuje kanał na
          YouTube. Dodatkowo, pracuje nad własnym produktem, ale szczegóły
          pozostaną tajemnicą aż do jego ukończenia.
        </Paragraph>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/realizacje/"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1983</BioYear>
          Urodzony w Olkuszu.
        </BioSection>
        <BioSection>
          <BioYear>2005</BioYear>
          Politechnika Warszawska, kierunek Informatyka.
        </BioSection>
        <BioSection>
          <BioYear>2006</BioYear>
          Do dnia dzisiejszego podejmuję się różnych wyzwań ;)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          {' '}
          <Link href="https://open.spotify.com/album/50pYo7rf9ZIDTrL8QsUlai">
            Muzyka
          </Link>
          , Instrumenty perkusyjne, Akordeon, Pianino,{' '}
          <Link href="#">Poezja</Link>, Nauka fullstacka ;) ,{' '}
          <Link href="https://www.empik.com/ksiazki,31,s?q=ba%C5%9Bniob%C3%B3r">
            Książki
          </Link>
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jurczykarkadiusz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @jurczykarkadiusz
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
    <Footer />
  </div>
)

export default Home
export { getServerSideProps } from '../components/chakra'
