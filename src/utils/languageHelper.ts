import French from '../assets/languages/fr-lang';
import English from '../assets/languages/en-lang';
import { ENG, FRA, config } from '../configs/config';

export const initializeLanguage = () => {
    const language = (config.language === ENG) ? English.content : French.content;
    return language;
};

export const switchLanguage = (code: any) => {
    switch (code) {
        case ENG:
            return English.content;
        case FRA:
            return French.content;
        default: return English.content;
    }
};
