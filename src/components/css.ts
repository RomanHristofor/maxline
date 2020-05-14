import styled, {css} from 'styled-components';

type Link = {
    primary: boolean
}

type Types = {
    display: any
}

const Wrap = styled.div`
    margin-top: 50px;
    margin-left: 50px;
    @media (max-width: 576px) {
      margin-top: 15px;
      margin-left: 15px;
    }
`
const Title = styled.h2`
    color: #FF6347;
    margin-bottom: 20px;
    ${(props: Link) => props.primary && css`
        color: palevioletred;
    `}
`

// Start Input element
const InputLabel = styled.label`
    display: block;
`
const RadioGroup = styled.div`
    margin-bottom: 18px;
    @media (max-width: 576px) {
        & label {
          display: block;
          margin-left: 0 !important;
        }
    }
`
// Finish Input element

const LanguageWrap = styled.div`
    display: flex;
    align-self: flex-start;
    order: 1;
    & button {
        background-color: #eee;
        box-shadow: none;
        border: 1px solid #ccc;
        padding: 10px 10px;
        border-radius: 4px;
        min-width: 50px;
        transition: all 0.3s ease-out;
    }
    & button.active {
        color: #333;
        background-color: #FF6347; 
    }
    @media (max-width: 576px) {
        display: inline-block;
        & button {
            min-width: 45px;
            height: 40px;
        }
    }
`

const Link = styled.a``
const ListWrap = styled.div`
    min-width: 280px;
`

const CountryInfo = styled.div`
    margin-bottom: 5px;
    ${(props: Types) => !props.display && css`
        display: none;
    `}
`

const CountryFlag = styled.img`
    width: 60px;
    height: 40px;
`

const Main = styled.div`
    display: flex;
`

const TableCode = styled.table``

export {
    Wrap, Title, InputLabel, RadioGroup,
    LanguageWrap,
    Link, ListWrap, CountryFlag, CountryInfo,
    Main, TableCode
};