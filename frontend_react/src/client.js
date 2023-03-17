import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'uppsx62d',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skSoQ3LZMhw3gMHERbYiW7vXaM6rmQ8LGobEk8GzNdHwl3FrTSQGpssKj84tWOYhOFodGshQUezkUXbMpDeAxiiO3YEIoC4V4jGkZ6aAIBpwZpwYRlQvLoPulLabKOxGRifMfaswKRlofgxxCSLMZAO44bw9AWQ5lJ1GdfFprOzqiqqQVCdr',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
