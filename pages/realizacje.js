import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { RealizacjaGridItem } from '../components/grid-item'

import thumbJeden from '../public/images/realizacje/jeden.png'
import thumbDwa from '../public/images/realizacje/dwa.png'
import thumbTrzy from '../public/images/realizacje/trzy.png'
import thumbCztery from '../public/images/realizacje/cztery.png'
import thumbPięć from '../public/images/realizacje/pięć.png'

const Realizacje = () => (
      <Container position="relative">
        <Heading as="h3" fontSize={20} mb={4}>
          Realizacje
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <RealizacjaGridItem
            id="jeden"
            title="Jeden"
            thumbnail={thumbJeden}
            >
              Opis projektu itd itd itd
            </RealizacjaGridItem>
          </Section>
          <Section>
            <RealizacjaGridItem
            id="dwa"
            title="Dwa"
            thumbnail={thumbDwa}
            >
              Opis projektu itd itd itd
            </RealizacjaGridItem>
          </Section>
          <Section>
            <RealizacjaGridItem
            id="trzy"
            title="Trzy"
            thumbnail={thumbTrzy}
            >
              Opis projektu itd itd itd
            </RealizacjaGridItem>
          </Section>
          <Section>
            <RealizacjaGridItem
            id="cztery"
            title="Cztery"
            thumbnail={thumbCztery}
            >
              Opis projektu itd itd itd
            </RealizacjaGridItem>
          </Section>
          <Section>
            <RealizacjaGridItem
            id="pięć"
            title="Pięć"
            thumbnail={thumbPięć}
            >
              Opis projektu itd itd itd
            </RealizacjaGridItem>
          </Section>
        </SimpleGrid>
      </Container>
  )


export default Realizacje
export { getServerSideProps } from '../components/chakra'