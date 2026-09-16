import { storyblokInit, apiPlugin } from '@storyblok/react'

import HeroOutcome from './blocks/HeroOutcome'
import Context from './blocks/Context'
import Narrative from './blocks/Narrative'
import Media from './blocks/Media'
import Testimonial from './blocks/Testimonial'
import AiFluency from './blocks/AiFluency'
import Proof from './blocks/Proof'
import RoleClarity from './blocks/RoleClarity'
import Reflection from './blocks/Reflection'

// Public Content Delivery API token (read-only). Safe to ship in frontend
// code, this is how Storyblok's CDN token is designed to be used.
const STORYBLOK_TOKEN =
  import.meta.env.VITE_STORYBLOK_TOKEN ?? '8l16eXcHG0zJ7KtWUSQRXQtt'

storyblokInit({
  accessToken: STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
  components: {
    hero_outcome: HeroOutcome,
    context: Context,
    narrative: Narrative,
    media: Media,
    testimonial: Testimonial,
    ai_fluency: AiFluency,
    proof: Proof,
    role_clarity: RoleClarity,
    reflection: Reflection,
  },
})
