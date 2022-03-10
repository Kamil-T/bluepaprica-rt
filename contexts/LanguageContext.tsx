import { createContext, useContext, useState } from 'react'

type LanguageProviderProps = { children: React.ReactNode }

const LanguageContext = createContext<
  { language: string; setLanguage: (newLanguage: string) => void } | undefined
>(undefined)

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState('PL')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export { LanguageProvider, useLanguage }
