import { createContext, useContext } from 'react'

export const CaseStudyTitleContext = createContext<string | undefined>(undefined)

export function useCaseStudyTitle() {
  return useContext(CaseStudyTitleContext)
}
