(this.webpackJsonpmaxline=this.webpackJsonpmaxline||[]).push([[0],{34:function(e){e.exports=JSON.parse('{"title":["Countries","\u0421\u0442\u0440\u0430\u043d\u044b"],"notFound":["Not Found","\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"],"loading":["Loading...","\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."],"routeLink":["Please click for this link","\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u044d\u0442\u0443 \u0441\u0441\u044b\u043b\u043a\u0443"],"inputCountryLabel":["Get data about country by: ","\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0441\u0442\u0440\u0430\u043d\u0435 \u043f\u043e: "],"shortCountryName":["short country name","\u043a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0443 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u0441\u0442\u0440\u0430\u043d\u044b"],"fullCountryName":["full country name","\u043f\u043e\u043b\u043d\u043e\u043c\u0443 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u0441\u0442\u0440\u0430\u043d\u044b"],"codeCountry":["code(s) country ","\u043a\u043e\u0434(\u044b) \u0441\u0442\u0440\u0430\u043d\u044b "],"exampleCode":["for several countries: code1;code2;","\u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u0442\u0440\u0430\u043d: code1;code2;"],"currencyCountry":["currency country","\u0432\u0430\u043b\u044e\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u044b"],"countryTitleName":[null,"\u0421\u0442\u0440\u0430\u043d\u0430: ${name}"],"countryLink":["Get more information about this country","\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0441\u0442\u0440\u0430\u043d\u0435"],"codeTable":["Code","\u041a\u043e\u0434"],"countryTable":["Country","\u0421\u0442\u0440\u0430\u043d\u0430"],"listOfCodes":["Get a list of available country codes","\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043a\u043e\u0434\u043e\u0432 \u0441\u0442\u0440\u0430\u043d"]}')},42:function(e,n,a){e.exports=a(62)},47:function(e,n,a){},55:function(e,n,a){var t={"./en.country.json":[63,3],"./ru.country.json":[64,4]};function r(e){if(!a.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],r=n[0];return a.e(n[1]).then((function(){return a.t(r,3)}))}r.keys=function(){return Object.keys(t)},r.id=55,e.exports=r},62:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),i=a(20),o=a.n(i),c=(a(47),a(17)),l=a(1),u=a(2),s="_START",d="_SUCCESS",m="_FAIL",p="https://restcountries.eu/rest/v2/",b={countryName:"",pagination:{page:1,pageSize:10}};function y(e,n){var a=e.map((function(e,n){return e.id=n.toString(),e}));return function(e,n,a){var t=b.countryName.toLowerCase(),r=E("request")||[];0===r.length&&(r=function(e,n){var a=b.countryName.toLowerCase(),t={};a&&e&&n&&(t.q=a,t.type=e,t.response=n,f([t]));return[t]}(n,a));if(t&&n&&a){var i=r.filter((function(e){return e.q===t&&e.type===n&&e.response===a}));if(1===i.length){var o=r.findIndex((function(e){return e.q===t&&e.type===n&&e.response===a}));i[0].entities=e,r.splice(o,1,i[0]),f(r)}0===i.length&&(r.push({q:t,type:n,response:a,entities:e}),f(r))}}(a,n,!0),a}function f(e){localStorage.setItem("request",JSON.stringify(e))}function E(e){return JSON.parse(localStorage.getItem(e))}function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"LOAD_COUNTRY_BY_NAME_SUCCESS",a=E("request");if(a&&a.length)return a.find((function(a){return a.q===e&&a.type===n}))}function h(e,n,a){return n.status||n.message?(C(a),[]):Array.isArray(n)?y(n.filter((function(e){return null!==e})),a):((e=[]).push(n),y(e,a))}function C(e){var n=E("request"),a=b.countryName,t=n.findIndex((function(n){return n.q===a&&n.type===e}));-1!==t&&n.splice(t,1),f(n)}function v(e,n){e&&a(55)("./".concat(e.code,".country.json")).then((function(a){n(a,e.code)}))}function O(e,n){var a=e.findIndex((function(e){return!e.active})),t=e.map((function(e){return e.active&&(e.active=!e.active),e}));return t.splice(a,1,n),localStorage.setItem("lang",JSON.stringify(t)),t}function N(){var e=E("lang");if(e)return e.find((function(e){return e.active}))}var S={loading:!1,loaded:!1,error:"",country:{isChecked:"shortName"},countries:[]},A=a(33),L={languages:[{name:"EN",code:"en",active:!0},{name:"RU",code:"ru"}],translation:a(34),options:{renderToStaticMarkup:A.renderToStaticMarkup}},_=Object(c.c)({localize:l.c,languages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0,a=n.type,t=n.payload;switch(a){case"CHANGE_LANGUAGES_STORAGE":return Object(u.a)({},e,{languages:O(e.languages,t)});default:return e}},countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0,a=n.type,t=n.response,r=n.payload;switch(a){case"LOAD_COUNTRY_BY_NAME"+s:case"LOAD_COUNTRY_BY_FULL_NAME"+s:case"LOAD_COUNTRY_BY_CODE"+s:case"LOAD_COUNTRY_BY_CURRENCY"+s:return Object(u.a)({},e,{loading:!0});case"LOAD_COUNTRY_BY_NAME"+d:case"LOAD_COUNTRY_BY_FULL_NAME"+d:return Object(u.a)({},e,{countries:y(t,a),error:"",loading:!1,loaded:!0});case"LOAD_COUNTRY_BY_CODE"+d:case"LOAD_COUNTRY_BY_CURRENCY"+d:return Object(u.a)({},e,{countries:h(e.countries,t,a),error:"",loading:!1,loaded:!0});case"GET_ENTITIES_IN_STORAGE":return Object(u.a)({},e,{countries:r});case"CHANGE_COUNTRY_CHECKED":return Object(u.a)({},e,{country:r});case"LOAD_COUNTRY_BY_NAME"+m:case"LOAD_COUNTRY_BY_FULL_NAME"+m:case"LOAD_COUNTRY_BY_CURRENCY"+m:return C(a),Object(u.a)({},e,{countries:[],error:"Not found",loading:!1});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0,a=n.type,t=n.payload;switch(a){case"INPUT_COUNTRY_NAME":return b.countryName=t,Object(u.a)({},e,{},b);case"CHANGE_PAGES":return Object(u.a)({},e,{pagination:t});default:return e}}}),T=a(41),j=a(36),M=Object(c.a)(j.a,(function(e){return function(e){return function(n){var a=n.callAPI,t=n.type,r=Object(T.a)(n,["callAPI","type"]);if(!a)return e(n);e(Object(u.a)({},r,{type:t+s})),setTimeout((function(){fetch(a).then((function(e){return e.json()})).then((function(n){return e(Object(u.a)({},r,{type:t+d,response:n}))})).catch((function(n){return e(Object(u.a)({},r,{type:t+m,error:n}))}))}),500)}}})),B=Object(c.d)(_,{},M);window.store=B;var k=B,I=a(8),R=a(6),U=a(7),G=a(9),Y=a(10),x=a(14);var P=a(3),D=a(4);function w(){var e=Object(P.a)([""]);return w=function(){return e},e}function F(){var e=Object(P.a)(["\n    display: flex;\n"]);return F=function(){return e},e}function K(){var e=Object(P.a)(["\n    width: 60px;\n    height: 40px;\n"]);return K=function(){return e},e}function z(){var e=Object(P.a)(["\n        display: none;\n    "]);return z=function(){return e},e}function H(){var e=Object(P.a)(["\n    margin-bottom: 5px;\n    ","\n"]);return H=function(){return e},e}function J(){var e=Object(P.a)(["\n    min-width: 280px;\n"]);return J=function(){return e},e}function q(){var e=Object(P.a)([""]);return q=function(){return e},e}function Z(){var e=Object(P.a)(["\n    display: flex;\n    align-self: flex-start;\n    order: 1;\n    & button {\n        background-color: #eee;\n        box-shadow: none;\n        border: 1px solid #ccc;\n        padding: 10px 10px;\n        border-radius: 4px;\n        min-width: 50px;\n        transition: all 0.3s ease-out;\n    }\n    & button.active {\n        color: #333;\n        background-color: #FF6347; \n    }\n    @media (max-width: 576px) {\n        display: inline-block;\n        & button {\n            min-width: 45px;\n            height: 40px;\n        }\n    }\n"]);return Z=function(){return e},e}function V(){var e=Object(P.a)(["\n    margin-bottom: 18px;\n    @media (max-width: 576px) {\n        & label {\n          display: block;\n          margin-left: 0 !important;\n        }\n    }\n"]);return V=function(){return e},e}function W(){var e=Object(P.a)(["\n    display: block;\n"]);return W=function(){return e},e}function Q(){var e=Object(P.a)(["\n        color: palevioletred;\n    "]);return Q=function(){return e},e}function $(){var e=Object(P.a)(["\n    color: #FF6347;\n    margin-bottom: 20px;\n    ","\n"]);return $=function(){return e},e}function X(){var e=Object(P.a)(["\n    margin-top: 50px;\n    margin-left: 50px;\n    @media (max-width: 576px) {\n      margin-top: 15px;\n      margin-left: 15px;\n    }\n"]);return X=function(){return e},e}var ee=D.b.div(X()),ne=D.b.h2($(),(function(e){return e.primary&&Object(D.a)(Q())})),ae=D.b.label(W()),te=D.b.div(V()),re=D.b.div(Z()),ie=D.b.a(q()),oe=D.b.div(J()),ce=D.b.div(H(),(function(e){return!e.display&&Object(D.a)(z())})),le=D.b.img(K()),ue=D.b.div(F()),se=D.b.table(w()),de=function(e){Object(Y.a)(a,e);var n=Object(G.a)(a);function a(){var e;Object(R.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).getClass=function(n){var a=N();return a?n===a.code?"active":"":n===e.props.activeLanguage.code?"active":""},e.handlerSetLang=function(n){var a=N();a&&a.code!==n.code&&e.setActiveLangInStorage(n),a||e.setActiveLangInStorage(n)},e.setActiveLangInStorage=function(n){var a=e.props,t=a.setActiveLanguage,r=a.changeLanguageStorage;t(n.code),r(Object(u.a)({},n,{active:!0}))},e}return Object(U.a)(a,[{key:"render",value:function(){var e=this,n=this.props.languages;return r.a.createElement(re,null,n.map((function(n){return r.a.createElement("div",{key:n.code},r.a.createElement("button",{className:"btn btn-outline-info ".concat(e.getClass(n.code)),onClick:function(){return e.handlerSetLang(n)}},n.name))})))}}]),a}(t.Component),me=Object(I.b)((function(){return{}}),{changeLanguageStorage:function(e){return{type:"CHANGE_LANGUAGES_STORAGE",payload:e}}})(Object(l.d)(de)),pe=a(21),be={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia, Plurinational State of",BA:"Bosnia and Herzegovina",BW:"Botswana",BR:"Brazil",IO:"British Indian Ocean Territory",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Democratic Republic of the Congo",CK:"Cook Islands",CR:"Costa Rica",CI:"C\xf4te d'Ivoire",HR:"Croatia",CU:"Cuba",CW:"Cura\xe7ao",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",PF:"French Polynesia",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",HT:"Haiti",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic of",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Republic of Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Republic of Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RO:"Romania",RU:"Russian",RW:"Rwanda",KN:"Saint Kitts and Nevis",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan, Province of China",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela, Bolivarian Republic of",VN:"Viet Nam",VI:"Virgin Islands",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};var ye=function(){return r.a.createElement(se,{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},r.a.createElement(l.b,{id:"codeTable"})),r.a.createElement("th",{scope:"col"},r.a.createElement(l.b,{id:"countryTable"})))),r.a.createElement("tbody",null,Object.entries(be).map((function(e){var n=Object(pe.a)(e,2),a=n[0],t=n[1];return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a),r.a.createElement("td",null,t))}))))},fe=function(e){Object(Y.a)(a,e);var n=Object(G.a)(a);function a(){return Object(R.a)(this,a),n.apply(this,arguments)}return Object(U.a)(a,[{key:"componentDidUpdate",value:function(e){var n=this.props,a=n.activeLanguage,t=n.setActiveLanguage,r=n.addTranslationForLanguage,i=N();v(a,r),i&&e.activeLanguage.code!==i.code&&(t(i.code),v(i,r))}},{key:"render",value:function(){return this.props.country?r.a.createElement(oe,null,this.getBody()):r.a.createElement(x.a,{to:"/maxline"})}},{key:"getBody",value:function(){var e=this.props.country;return r.a.createElement("section",null,r.a.createElement("h2",null,r.a.createElement(l.b,{id:"countryTitleName",data:{name:e.name}},"Country: ${name}")),r.a.createElement(ce,{display:e.name},r.a.createElement(l.b,{id:"country.name"}),r.a.createElement("b",null,e.name)),r.a.createElement(le,{src:"".concat(e.flag),alt:"Preview"}),r.a.createElement("br",null),r.a.createElement(ce,{display:e.capital},r.a.createElement(l.b,{id:"country.capital"}),r.a.createElement("b",null,e.capital)),r.a.createElement(ce,{display:e.region},r.a.createElement(l.b,{id:"country.region"}),r.a.createElement("b",null,e.region)),r.a.createElement(ce,{display:e.subregion},r.a.createElement(l.b,{id:"country.subregion"}),r.a.createElement("b",null,e.subregion)),r.a.createElement(ce,{display:e.population},r.a.createElement(l.b,{id:"country.population"}),r.a.createElement("b",null,e.population)),r.a.createElement(ce,{display:e.demonym},r.a.createElement(l.b,{id:"country.demonym"}),r.a.createElement("b",null,e.demonym)),r.a.createElement(ce,{display:e.area},r.a.createElement(l.b,{id:"country.area"}),r.a.createElement("b",null,e.area)),r.a.createElement(ce,{display:e.gini},r.a.createElement(l.b,{id:"country.gini"}),r.a.createElement("b",null,e.gini)),r.a.createElement(ce,{display:e.nativeName},r.a.createElement(l.b,{id:"country.nativeName"}),r.a.createElement("b",null,e.nativeName)),r.a.createElement(ce,{display:e.numericCode},r.a.createElement(l.b,{id:"country.numericCode"}),r.a.createElement("b",null,e.numericCode)),r.a.createElement(ce,{display:e.timezones[0]},r.a.createElement(l.b,{id:"country.timezones"}),e.timezones.map((function(e,n){return r.a.createElement("b",{key:n},e)}))),r.a.createElement(ce,{display:e.borders[0]},r.a.createElement(l.b,{id:"country.borders"}),e.borders.map((function(e,n){return r.a.createElement("b",{key:n},e,",")}))),r.a.createElement(ce,{display:e.currencies[0]},r.a.createElement(l.b,{id:"country.currencies"}),e.currencies.map((function(e,n){return r.a.createElement("b",{key:n},e.code,", ",e.name,", ",e.symbol)}))),r.a.createElement(ce,{display:e.languages[0]},r.a.createElement(l.b,{id:"country.languages"}),e.languages.map((function(e,n){return r.a.createElement("b",{key:n},e.name,", ",e.nativeName)}))),r.a.createElement(ce,{display:Object.entries(e.translations).length},r.a.createElement(l.b,{id:"country.translations"}),Object.entries(e.translations).map((function(e){var n=Object(pe.a)(e,2),a=n[0],i=n[1];return r.a.createElement(t.Fragment,{key:a},r.a.createElement("b",null,a,": ")," ",i,", ")}))),r.a.createElement(ce,{display:e.regionalBlocs[0]},r.a.createElement(l.b,{id:"country.regionalBlocs"}),e.regionalBlocs.map((function(e,n){return r.a.createElement("b",{key:n},e.name,", ")}))),r.a.createElement(ce,{display:e.cioc},r.a.createElement(l.b,{id:"country.cioc"}),r.a.createElement("b",null,e.cioc)))}}]),a}(t.Component),Ee=Object(I.b)((function(e,n){return{country:e.countries.countries.find((function(e){return e.id===n.id}))}}))(Object(l.d)(fe)),ge=a(16),he=a(19),Ce=Object(he.a)((function(e){return e.filters.countryName}),(function(e){return e})),ve=Object(he.a)((function(e){return e.countries.country}),(function(e){return e})),Oe=function(e){return e.countries},Ne=Object(he.a)(Oe,(function(e){return e.countries})),Se=Object(he.a)((function(e){return e.countries.loading}),(function(e){return e})),Ae=Object(he.a)((function(e){return e.countries.error}),(function(e){return e})),Le=Object(he.a)(Oe,(function(e){return e.filters}),(function(e,n){var a=n.pagination;return e.countries.slice(a.page*a.pageSize-a.pageSize,a.page*a.pageSize)})),_e=function(e){Object(Y.a)(a,e);var n=Object(G.a)(a);function a(){var e;Object(R.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={dispatch:e.props.loadCountryByShortName},e.handleLoadCountry=function(n){var a=e.props,t=a.country,r=a.inputFiltratedByName,i=a.getEntitiesInLocalStorage,o=n.target.value,c=g(o.toLowerCase(),t.type);c&&c.q===o.toLowerCase()?i(c.entities):"function"===typeof t.dispatch?t.dispatch(o):e.state.dispatch(o),r(o)},e.handleFilter=function(n,a){var t,r=e.props,i=r.loadCountryByShortName,o=r.loadCountryByFullName,c=r.loadCountryByCode,l=r.loadCountryByCurrency,u=r.changeCountryChecked;switch(n){case"fullName":t=o,a.type="LOAD_COUNTRY_BY_FULL_NAME_SUCCESS";break;case"code":t=c,a.type="LOAD_COUNTRY_BY_CODE_SUCCESS";break;case"currency":t=l,a.type="LOAD_COUNTRY_BY_CURRENCY_SUCCESS";break;default:t=i,a.type="LOAD_COUNTRY_BY_NAME_SUCCESS"}a.isChecked=n,a.dispatch=t,u(a),e.setState({dispatch:t})},e}return Object(U.a)(a,[{key:"render",value:function(){var e=this,n=this.props,a=n.country,t=n.countryName;return r.a.createElement("div",{className:"form-group"},r.a.createElement(ae,null,r.a.createElement(l.b,{id:"inputCountryLabel"})),r.a.createElement(te,null,r.a.createElement("label",{className:"radio-inline",onClick:function(){return e.handleFilter("shortName",a)}},r.a.createElement("input",{type:"radio",name:"optradio",defaultChecked:"shortName"===a.isChecked}),r.a.createElement(l.b,{id:"shortCountryName"})),r.a.createElement("label",{className:"radio-inline",onClick:function(){return e.handleFilter("fullName",a)}},r.a.createElement("input",{type:"radio",name:"optradio",defaultChecked:"fullName"===a.isChecked}),r.a.createElement(l.b,{id:"fullCountryName"})),r.a.createElement("label",{className:"radio-inline",onClick:function(){return e.handleFilter("code",a)}},r.a.createElement("input",{type:"radio",name:"optradio",defaultChecked:"code"===a.isChecked}),r.a.createElement(l.b,{id:"codeCountry"}),r.a.createElement("code",null,r.a.createElement(l.b,{id:"exampleCode"}))),r.a.createElement("label",{className:"radio-inline",onClick:function(){return e.handleFilter("currency",a)}},r.a.createElement("input",{type:"radio",name:"optradio",defaultChecked:"currency"===a.isChecked}),r.a.createElement(l.b,{id:"currencyCountry"}))),r.a.createElement("input",{className:"form-control",type:"text",value:t,placeholder:t||"Enter...",onChange:this.handleLoadCountry}))}}]),a}(t.Component),Te=Object(I.b)((function(e){return{countryName:Ce(e),country:ve(e),countries:Le(e),loading:Se(e)}}),{loadCountryByShortName:function(e){return{type:"LOAD_COUNTRY_BY_NAME",callAPI:"".concat(p,"name/").concat(e)}},loadCountryByFullName:function(e){return{type:"LOAD_COUNTRY_BY_FULL_NAME",callAPI:"".concat(p,"name/").concat(e,"?fullText=true")}},loadCountryByCode:function(e){return{type:"LOAD_COUNTRY_BY_CODE",payload:!0,callAPI:e.includes(";")?"".concat(p,"alpha?codes=").concat(e):"".concat(p,"alpha/").concat(e)}},loadCountryByCurrency:function(e){return{type:"LOAD_COUNTRY_BY_CURRENCY",payload:!0,callAPI:"".concat(p,"currency/").concat(e)}},inputFiltratedByName:function(e){return{type:"INPUT_COUNTRY_NAME",payload:e}},getEntitiesInLocalStorage:function(e){return{type:"GET_ENTITIES_IN_STORAGE",payload:e}},changeCountryChecked:function(e){return{type:"CHANGE_COUNTRY_CHECKED",payload:e}}})(_e),je=a(40),Me=a.n(je),Be=function(e){Object(Y.a)(a,e);var n=Object(G.a)(a);function a(){var e;Object(R.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).handlePageChange=function(n){var a=e.props;(0,a.changePages)({page:n,pageSize:a.pagination.pageSize})},e}return Object(U.a)(a,[{key:"render",value:function(){var e=this.props,n=e.countries,a=e.countryName,t=e.pagination;if(e.error||n.length<=10)return null;var i=0;a&&(i=n.filter((function(e){return n=e.name,t=a,n.toLowerCase().includes(t.toLowerCase());var n,t})).length);var o=a?i:n.length;return r.a.createElement("div",null,r.a.createElement(Me.a,{activePage:t.page,itemsCountPerPage:t.pageSize,totalItemsCount:o<=0?1:o,onChange:this.handlePageChange}))}}]),a}(t.Component),ke=Object(I.b)((function(e){return{countries:Ne(e),countryName:Ce(e),pagination:e.filters.pagination,error:Ae(e)}}),{changePages:function(e){return{type:"CHANGE_PAGES",payload:e}}})(Be);function Ie(){var e=Object(P.a)(["\n  display: flex;\n  width: 350px;\n"]);return Ie=function(){return e},e}var Re=function(){return r.a.createElement(Ue,null,r.a.createElement("h2",null,r.a.createElement(l.b,{id:"loading"})))},Ue=D.b.div(Ie());var Ge=function(){return r.a.createElement("h1",null,r.a.createElement(l.b,{id:"notFound"}))},Ye=function(e){Object(Y.a)(a,e);var n=Object(G.a)(a);function a(){return Object(R.a)(this,a),n.apply(this,arguments)}return Object(U.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,n=e.setActiveLanguage,a=e.addTranslationForLanguage,t=N();t&&(n(t.code),v(t,a))}},{key:"componentDidUpdate",value:function(){var e=this.props,n=e.activeLanguage,a=e.setActiveLanguage,t=e.addTranslationForLanguage,r=N();v(n,t),r&&n.code!==r.code&&(a(r.code),v(r,t))}},{key:"render",value:function(){var e=this.props,n=e.loading,a=e.countries,t=n&&r.a.createElement(Re,null),i=0===a.length?r.a.createElement(Ge,null):null,o=a.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(ce,{display:e.name},r.a.createElement(l.b,{id:"country.name"}),r.a.createElement("b",null,e.name)),r.a.createElement(ce,{display:e.capital},r.a.createElement(l.b,{id:"country.capital"}),r.a.createElement("b",null,e.capital)),r.a.createElement(ie,{as:ge.b,to:"/maxline/".concat(e.id)},r.a.createElement(l.b,{id:"countryLink"})),r.a.createElement("hr",null))}));return r.a.createElement("div",null,r.a.createElement(ne,{primary:!0},r.a.createElement(l.b,{id:"title"})),r.a.createElement(Te,null),r.a.createElement(ie,{as:ge.b,to:"/maxline/codes"},r.a.createElement(l.b,{id:"listOfCodes"})),r.a.createElement("hr",null),!n&&r.a.createElement("div",null,r.a.createElement("div",null,o),i),t,r.a.createElement(ke,null))}}]),a}(t.Component),xe=Object(I.b)((function(e){return{countries:Le(e),loading:Se(e)}}))(Object(l.d)(Ye)),Pe=function(e){Object(Y.a)(a,e);var n=Object(G.a)(a);function a(e){var t;Object(R.a)(this,a),(t=n.call(this,e)).getIndex=function(e){var n=e.match.params.id;return r.a.createElement(Ee,{id:n,key:n})},t.countries=function(){return r.a.createElement(xe,null)},t.getListOfCodes=function(){return r.a.createElement(ye,null)};var i=E("lang");return localStorage.removeItem("request"),i?(L.languages=i,t.props.initialize(L)):t.props.initialize(L),t}return Object(U.a)(a,[{key:"render",value:function(){return r.a.createElement(ue,null,r.a.createElement(me,null),r.a.createElement(x.d,null,r.a.createElement(x.b,{path:"/maxline",render:this.countries,exact:!0}),r.a.createElement(x.b,{path:"/maxline/codes",render:this.getListOfCodes,exact:!0}),r.a.createElement(x.b,{path:"/maxline/:id",render:this.getIndex})))}}]),a}(t.Component),De=Object(l.d)(Pe);var we=function(){return r.a.createElement(ee,{className:"container-fluid"},r.a.createElement(l.a,null,r.a.createElement(ge.a,null,r.a.createElement(I.a,{store:k},r.a.createElement("div",null,r.a.createElement(x.b,{path:"/maxline",component:De}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.58de122c.chunk.js.map