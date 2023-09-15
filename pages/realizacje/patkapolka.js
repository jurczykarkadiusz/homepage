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
    <Layout title="Pro Kody">
      <Container>
        <Title>
          Pro Kody <Badge>2020-</Badge>
        </Title>
        <P>
        Blog osobisty połączony z social media.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>WWW</Meta>
            <Link href="https://www.patkapolka.pl/">
              https://www.patkapolka.pl/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>WordPress, Jetpack</span>
          </ListItem>
        </List>
  
        <RealizacjaImage src="/images/realizacje/patkapolka.png" alt="Patka Polka" />
      </Container>
    </Layout>
  )
  
  export default Realizacja
  export { getServerSideProps } from '../../components/chakra'