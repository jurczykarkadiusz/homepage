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
        Portal oferujący konta premium do serwisów takich jak Netflix, HBO, Spotify i Tidal.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>WWW</Meta>
            <Link href="https://www.prokody.pl/">
              https://www.prokody.pl/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>WordPress, WooCommerce, DotPay</span>
          </ListItem>
        </List>
  
        <RealizacjaImage src="/images/realizacje/prokody.png" alt="ProKody" />
      </Container>
    </Layout>
  )
  
  export default Realizacja
  export { getServerSideProps } from '../../components/chakra'