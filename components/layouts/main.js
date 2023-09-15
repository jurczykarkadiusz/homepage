import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelCatLoader from '../voxel-cat-loader'

const LazyVoxelCat = dynamic(() => import('../voxel-cat'), {
    ssr: false,
    loading: () => <VoxelCatLoader />
  })

const Main = ({ children, router}) => {

    return (
        <Box as="main" pb={8}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Arkadiusz Jurczyk - Homepage</title>
        </Head>

        <Navbar path={router.asPath} />

        <Container maxW="container.md" pt={6}>
                <LazyVoxelCat />
            
            {children}
           
        </Container>
    </Box>
    )
}

export default Main