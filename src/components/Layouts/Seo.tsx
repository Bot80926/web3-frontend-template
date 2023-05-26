import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_IMAGE } from 'config/site'

interface SEOProps {
  title?: string
  description?: string
  image?: string
}

const DynamicSEO = ({ title, description, image }: SEOProps) => {
  return (
    <>
      <DefaultSeo
        title={title ?? SITE_NAME}
        description={description ?? SITE_DESCRIPTION}
        openGraph={{
          title,
          description,
          images: [{ url: image ?? SITE_IMAGE }],
          site_name: title ?? SITE_NAME,
          url: SITE_URL,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title ?? SITE_NAME} />
        <meta name="twitter:description" content={description ?? SITE_DESCRIPTION} />
        <meta name="twitter:image" content={image ?? SITE_IMAGE} />
      </Head>
    </>
  )
}

export default DynamicSEO
