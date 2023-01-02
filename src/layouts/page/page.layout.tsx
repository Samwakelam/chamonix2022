import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { ButtonTypes } from '../../components/button/button.definition';
import { Icon } from '../../components/icon/icon.component';

import { PageLayoutProps } from './page.definition';

import * as S from './page.styles';

export const Page = ({ children }: PageLayoutProps): JSX.Element => {
    if (!children || children.length !== 2) return null;

    const router = useRouter();

    const [path, setPath] = useState<string>('/');
    const [isOpen, setIsOpen] = useState<boolean>(true);

    useEffect(() => {
        if (router) {
            setPath(router.pathname);
        }
    }, [router]);

    const handleMenuCollapse = () => {
        setIsOpen(isOpen ? false : true);
    };

    return (
        <S.Page>
            <S.Navigation path={path} isCollapsed={!isOpen}>
                {isOpen && children[0]}
            </S.Navigation>
            <S.Main>
                <S.Button
                    buttonType={ButtonTypes.LEFT}
                    round
                    onClick={handleMenuCollapse}
                    isCollapsed={!isOpen}
                    path={path}
                >
                    <Icon icon="chevron-back" />
                </S.Button>
                {children[1]}
            </S.Main>
        </S.Page>
    );
};
