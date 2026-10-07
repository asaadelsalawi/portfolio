import {
  render,
  NODE_PARAGRAPH,
  NODE_QUOTE,
  type StoryblokRichtext,
} from 'storyblok-rich-text-react-renderer'
import { P } from '../components/Text'

export function renderCaseStudyRichText(doc: StoryblokRichtext | undefined) {
  if (!doc) return null

  return render(doc, {
    nodeResolvers: {
      [NODE_PARAGRAPH]: (children) => (
        <P>{children}</P>
      ),
      [NODE_QUOTE]: (children) => (
        <div className="w-full [&>p]:!text-2xl [&>p]:md:!text-[32px] [&>p]:!font-semibold [&>p]:!leading-normal [&>p]:!text-black">
          {children}
        </div>
      ),
    },
  })
}
