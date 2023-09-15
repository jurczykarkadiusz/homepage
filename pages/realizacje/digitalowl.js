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
    <Layout title="Digital Owl">
      <Container>
        <Title>
          Digital Owl <Badge>2018-</Badge>
        </Title>
        <P>
        Serwis projektowy stron internetowych.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>WWW</Meta>
            <Link href="https://www.digitalowl.pl/">
              https://www.digitalowl.pl/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>WordPress</span>
          </ListItem>
        </List>
  
        <RealizacjaImage src="/images/realizacje/digitalowl.png" alt="digitalOwl" />
      </Container>
    </Layout>
  )
  
  export default Realizacja
  export { getServerSideProps } from '../../components/chakra'