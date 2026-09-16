import {
  render,
  NODE_PARAGRAPH,
  NODE_QUOTE,
  type StoryblokRichtext,
} from 'storyblok-rich-text-react-renderer'

export function renderCaseStudyRichText(doc: StoryblokRichtext | undefined) {
  if (!doc) return null

  return render(doc, {
    nodeResolvers: {
      [NODE_PARAGRAPH]: (children) => (
        <p className="text-xl font-medium leading-7 text-black">{children}</p>
      ),
      [NODE_QUOTE]: (children) => (
        <div className="w-full [&>p]:!text-2xl [&>p]:md:!text-[32px] [&>p]:!font-semibold [&>p]:!leading-normal [&>p]:!text-black">
          {children}
        </div>
      ),
    },
  })
}
