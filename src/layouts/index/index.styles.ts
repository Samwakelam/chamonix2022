import styled from 'styled-components';
import { Button as ButtonComponent } from '../../components/button/button.component';
import { getGradientTextClip } from '../../helpers/get-gradient-text-clip.helper';
import { theme } from '../../theme';

export const Button = styled(ButtonComponent)`
    position: absolute;
    bottom: 3rem;
    right: 3rem;
    background-color: ${theme.c.white.a};

    & svg {
        height: 100%;

        & path {
            fill: ${theme.c.orange.b};
        }
    }
`;
