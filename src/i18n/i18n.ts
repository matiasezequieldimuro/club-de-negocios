import spanish from '@i18n/es.json'
import english from '@i18n/en.json'

const LANGUAGES = {
    spanish: 'es',
    english: 'en'
}

export const getI18N = ({ currentLocale }: { currentLocale: string | undefined}) => {
    if (currentLocale === LANGUAGES.english) return english
    else if (currentLocale === LANGUAGES.spanish) return spanish 
}