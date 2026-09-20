import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import CaseStudy from '../pages/CaseStudy'
import Leadership from '../pages/Leadership'
import Contact from '../pages/Contact'
import Imprint from '../pages/Imprint'
import TextRevealTest from '../pages/TextRevealTest'
import Styles from '../pages/Styles'
import Experience from '../pages/Experience'

export default function PageTransition() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [stage, setStage] = useState<'in' | 'out'>('in')

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setStage('out')
    }
  }, [location, displayLocation])

  return (
    <div
      key={displayLocation.pathname}
      className={stage === 'out' ? 'page-fade-out' : 'page-fade-in'}
      onAnimationEnd={() => {
        if (stage === 'out') {
          setDisplayLocation(location)
          setStage('in')
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/:slug" element={<CaseStudy />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/test" element={<TextRevealTest />} />
        <Route path="/styles" element={<Styles />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  )
}
