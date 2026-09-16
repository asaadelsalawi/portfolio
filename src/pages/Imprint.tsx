import Header from '../components/Header'
import ContactBar from '../components/ContactBar'
import GridSplit from '../components/GridSplit'
import Reveal from '../components/Reveal'

export default function Imprint() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col flex-1">
        <Header />
        <main className="flex-1 flex flex-col items-center gap-20 md:gap-32 px-6 md:px-[144px] mt-16 md:mt-[120px] mb-16 md:mb-[120px] w-full">
          <Reveal className="w-full">
            <h1 className="text-3xl md:text-[32px] font-semibold text-black w-full">
              Impressum
            </h1>
          </Reveal>

          <GridSplit
            label={
              <p className="text-2xl font-semibold text-black">
                Contact information
              </p>
            }
          >
            <p className="text-xl leading-7 text-black whitespace-pre-line">
              {`Asaad El Salawi
Tumblingerstr. 15
80337 München

Kontakt
Telefon: +49 89 90419568
E-Mail: asaad (at) elsalawi (dot) de`}
            </p>
          </GridSplit>

          <GridSplit
            label={
              <p className="text-2xl font-semibold text-black">
                Liability for content
              </p>
            }
          >
            <p className="text-xl leading-7 text-black">
              As a service provider, we are responsible for our own content
              on these pages in accordance with Section 7 Paragraph 1 of the
              German Telemedia Act (TMG). However, according to Sections 8 to
              10 of the TMG, we are not obligated as a service provider to
              monitor transmitted or stored third-party information or to
              investigate circumstances that indicate illegal activity.
            </p>
            <p className="text-xl leading-7 text-black">
              Obligations to remove or block the use of information under
              general law remain unaffected. However, liability in this
              respect is only possible from the point at which we become
              aware of a specific legal infringement. Upon becoming aware of
              such legal infringements, we will remove the content in
              question immediately.
            </p>
          </GridSplit>

          <GridSplit
            label={
              <p className="text-2xl font-semibold text-black">
                Liability for links
              </p>
            }
          >
            <p className="text-xl leading-7 text-black">
              Our website contains links to external websites of third
              parties, over whose content we have no control. Therefore, we
              cannot assume any liability for this external content. The
              respective provider or operator of the linked pages is always
              responsible for their content. The linked pages were checked
              for possible legal violations at the time the links were
              created. Illegal content was not identified at the time the
              links were created.
            </p>
            <p className="text-xl leading-7 text-black">
              However, continuously monitoring the content of linked pages
              is unreasonable without concrete evidence of a legal
              violation. Upon becoming aware of any legal violations, we
              will remove such links immediately.
            </p>
          </GridSplit>

          <GridSplit
            label={
              <p className="text-2xl font-semibold text-black">Copyright</p>
            }
          >
            <p className="text-xl leading-7 text-black">
              The content and works created by the website operators on
              these pages are subject to German copyright law. Reproduction,
              processing, distribution, and any form of exploitation beyond
              the limits of copyright law require the written consent of the
              respective author or creator. Downloads and copies of this
              page are permitted only for private, non-commercial use.
            </p>
            <p className="text-xl leading-7 text-black">
              Where content on this site has not been created by the
              operator, the copyrights of third parties are respected. In
              particular, third-party content is identified as such. Should
              you nevertheless become aware of a copyright infringement,
              please notify us accordingly. Upon notification of any legal
              violations, we will remove such content immediately.
            </p>
          </GridSplit>
        </main>
        <Reveal>
          <ContactBar />
        </Reveal>
      </div>
    </div>
  )
}
