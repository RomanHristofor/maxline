import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeLanguageStorage} from '../../AC';
import { getActiveLanguageInLocalStorage } from '../../helpers';
import {withLocalize} from 'react-localize-redux';
import {LanguageWrap} from '../css';

class LanguageToggle extends Component {

    getClass = (languageCode) => {
        const activeLang = getActiveLanguageInLocalStorage();
        if (activeLang)
            return languageCode === activeLang.code ? 'active' : '';

        return languageCode === this.props.activeLanguage.code ? 'active' : '';
    };

    handlerSetLang = (lang) => {
        const activeLang = getActiveLanguageInLocalStorage();

        if (activeLang && activeLang.code !== lang.code)
            this.setActiveLangInStorage(lang);
        if (!activeLang)
            this.setActiveLangInStorage(lang);
    }

    setActiveLangInStorage = (lang) => {
        const {setActiveLanguage, changeLanguageStorage} = this.props;

        setActiveLanguage(lang.code);
        const storageLang = {...lang, active: true};
        changeLanguageStorage(storageLang);
    }

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
};

export default connect(() => ({
}), {changeLanguageStorage})(withLocalize(LanguageToggle))
