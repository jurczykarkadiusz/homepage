import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { RealizacjaGridItem } from '../components/grid-item'

import thumbJeden from '../public/images/realizacje/eyecatch_prokody.png'
import thumbDwa from '../public/images/realizacje/eyecatch_patkapolka.png'
import thumbTrzy from '../public/images/realizacje/eyecatch_malujemylinie.png'
import thumbCztery from '../public/images/realizacje/eyecatch_digitalowl.png'

const Realizacje = () => (
      <Container position="relative">
        <Heading as="h3" fontSize={20} mb={4}>
          Realizacje
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <RealizacjaGridItem
            id="prokody"
            title="Pro Kody"
            thumbnail={thumbJeden}
            
            >
              Portal oferujący konta premium do serwisów takich jak Netflix, HBO, Spotify i Tidal.
            </RealizacjaGridItem>
          </Section>
          <Section>
            <RealizacjaGridItem
            id="patkapolka"
            title="Patka Polka"
            thumbnail={thumbDwa}
            >
              Blog osobisty połączony z social media.
            </RealizacjaGridItem>
          </Section>
          <Section>
            <RealizacjaGridItem
            id="malujemylinie"
            title="Malujemy Linie"
            thumbnail={thumbTrzy}
            >
              Portal oferujący oznakowania poziome parkingów,hal magazynowych itd.
            </RealizacjaGridItem>
          </Section>
          <Section>
            <RealizacjaGridItem
            id="digitalowl"
            title="DigitalOwl"
            thumbnail={thumbCztery}
            >
              Serwis projektowy stron internetowych.
            </RealizacjaGridItem>
          </Section>
        </SimpleGrid>
      </Container>
  )


export default Realizacje
export { getServerSideProps } from '../components/chakra'