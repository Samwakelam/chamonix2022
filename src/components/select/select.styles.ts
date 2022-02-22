import styled, { css } from 'styled-components';
import { shadow, theme } from '../../theme';

export const Select = styled.select`
    font-family: ${theme.f.lato};
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem 1rem;
    border-radius: 1rem;
    height: 4rem;
    outline: unset;
    border: unset;
    box-shadow: ${shadow.raised.a};
    width: 100%;
`;
