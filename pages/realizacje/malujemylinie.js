import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, RealizacjaImage, Meta } from '../../components/realizacja'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Realizacja = () => (
    <Layout title="Malujemy Linie">
      <Container>
        <Title>
          Malujemy Linie <Badge>2019-</Badge>
        </Title>
        <P>
        Portal oferujący oznakowania poziome parkingów,hal magazynowych itd.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>WWW</Meta>
            <Link href="https://www.malujemylinie.pl/">
              https://www.malujemylinie.pl/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>WordPress</span>
          </ListItem>
        </List>
  
        <RealizacjaImage src="/images/realizacje/malujemylinie.png" alt="Malujemy Linie" />
      </Container>
    </Layout>
  )
  
  export default Realizacja
  export { getServerSideProps } from '../../components/chakra'