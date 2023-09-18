import Head from 'next/head'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  const metaTitle = 'Arkadiusz Jurczyk Homepage - Freelance Web Developer'
  const metaDescription =
    'Explore the portfolio and blog of Arkadiusz Jurczyk, a freelance web developer passionate about web solutions, creative design, and coding excellence.'
  const metaKeywords =
    'Web Development, Freelance Web Developer, Creative Design, Web Solutions, Coding Excellence, Portfolio, Blog, CSS, HTML5, React, Node.js, Next.js, WordPress, Bielsko-Biała'

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
      <Head>
          {/* Meta tags */}
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeywords} />
          {/* Other meta tags */}
          <link rel="canonical" href={router.pathname === '/' ? 'https://www.ajdev.pl' : `https://www.ajdev.pl${router.pathname}`} />
          <link rel="icon" href="/favicon.ico" />
          {/* Structured Data (example for a person) */}
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "Person",
                "name": "Arkadiusz Jurczyk",
                "url": "https://www.ajdev.pl",
                "sameAs": [
                  "https://github.com/jurczykarkadiusz"
                  // Add more social profiles or links here
                ]
              }
            `}
          </script>
        </Head>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
