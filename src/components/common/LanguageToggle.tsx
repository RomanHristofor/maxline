import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeLanguageStorage} from '../../AC';
import { getActiveLanguageInLocalStorage } from '../../helpers';
import {withLocalize, LocalizeContextProps} from 'react-localize-redux';
import {LangInterface} from '../../reducer/languages';
import {LanguageWrap} from '../css';


type Props = {
    languages: LangInterface[],
    activeLanguage?: LangInterface,
    setActiveLanguage?: (c: string) => void,
    changeLanguageStorage?: (l: LangInterface) => void,
}

class LanguageToggle extends Component<Props & LocalizeContextProps> {

    getClass = (languageCode: string) => {
        const activeLang = getActiveLanguageInLocalStorage();

        if (activeLang)
            return languageCode === activeLang.code ? 'active' : '';

        return languageCode === this.props.activeLanguage.code ? 'active' : '';
    };

    handlerSetLang = (lang: LangInterface) => {
        const activeLang = getActiveLanguageInLocalStorage();

        if (activeLang && activeLang.code !== lang.code)
            this.setActiveLangInStorage(lang);
        if (!activeLang)
            this.setActiveLangInStorage(lang);
    };

    setActiveLangInStorage = (lang: LangInterface) => {
        const {setActiveLanguage, changeLanguageStorage} = this.props;

        setActiveLanguage(lang.code);
        const storageLang = {...lang, active: true};
        if (changeLanguageStorage)
            changeLanguageStorage(storageLang);
    };

    render() {
        const {languages} = this.props;

        return (
            <LanguageWrap>
                {languages.map(lang =>
                    <div key={lang.code}>
                        <button className={`btn btn-outline-info ${this.getClass(lang.code)}`}
                                onClick={() => this.handlerSetLang(lang)}>
                            {lang.name}
                        </button>
                    </div>
                )}
            </LanguageWrap>
        );
    }
}


export default connect(null,
    {changeLanguageStorage})(withLocalize(LanguageToggle))
