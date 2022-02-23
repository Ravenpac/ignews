import * as prismic from '@prismicio/client'

export function getPrismicClient(req = null) {
  const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })

  client.enableAutoPreviewsFromReq(req)
  return client
}
