import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#d1312c' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 20px')};
    font-size: ${({fontBig}) => (fontBig ? '25px' : '21px')};
    color: ${({dark}) => (dark ? '#010606' : '#FFF')} !important; 
    outline: none;
    border: none;
    cursor: pointer;
    display: flex ;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.25s ease-in-out;
        cursor: pointer;
        background: ${({primary}) => (primary ? '#fff' : '#d1312c')};
    }
`;