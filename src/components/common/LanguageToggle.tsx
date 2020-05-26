import React from 'react';
import {useDispatch} from 'react-redux';
import {changeLanguageStorage} from '../../AC';
import {getActiveLanguageInLocalStorage} from '../../helpers';
import {withLocalize, LocalizeContextProps} from 'react-localize-redux';
import {LangInterface} from '../../reducer/languages';
import {LanguageWrap} from '../css';


type Props = {
    languages: LangInterface[]
    activeLanguage?: LangInterface
    setActiveLanguage?: (c: string) => void
} & LocalizeContextProps

const LanguageToggle = ({
                            languages,
                            activeLanguage,
                            setActiveLanguage
                        }: Props) => {
    const dispatch = useDispatch();

    const getClass = (languageCode: string) => {
        const activeLang = getActiveLanguageInLocalStorage();

        if (activeLang)
            return languageCode === activeLang.code ? 'active' : '';

        return languageCode === activeLanguage.code ? 'active' : '';
    };

    const handlerSetLang = (lang: LangInterface) => {
        const activeLang = getActiveLanguageInLocalStorage();

        if (activeLang && activeLang.code !== lang.code)
            setActiveLangInStorage(lang);
        if (!activeLang)
            setActiveLangInStorage(lang);
    };

    const setActiveLangInStorage = (lang: LangInterface) => {
        setActiveLanguage(lang.code);
        const storageLang = {...lang, active: true};
        dispatch(changeLanguageStorage(storageLang));
    };

    return (
        <LanguageWrap>
            {languages.map(lang =>
                <div key={lang.code}>
                    <button className={`btn btn-outline-info ${getClass(lang.code)}`}
                            onClick={() => handlerSetLang(lang)}>
                        {lang.name}
                    </button>
                </div>
            )}
        </LanguageWrap>
    );
};


export default withLocalize(LanguageToggle);
