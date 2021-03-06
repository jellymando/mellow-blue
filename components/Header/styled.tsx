import styled from '@emotion/styled';
import { Wrapper } from 'styles/contents';
import { FONTSIZE, COLOR } from 'constants/style';

export const HeaderWrap = styled.div``;

export const TopMenu = styled.div`
    border-bottom: 1px solid #d7d7d7;
`;

export const TopMenuWrapper = styled(Wrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 0;
`;

export const Logo = styled.h1`
    .logo {
        max-width: 210px;
    }
`;

export const SideMenus = styled.ul`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
`;

export const Icon = styled.li`
    &:not(:last-of-type) {
        margin-right: 10px;
    }

    .search_icon {
        max-width: 32px;
        padding-right: 3px;
        cursor: pointer;
    }

    .cart_icon {
        max-width: 36px;
    }

    .login_icon {
        max-width: 36px;
    }
`;

export const Image = styled.img``;

export const LoginButton = styled.button`
    background: none;
    cursor: pointer;
`;

export const Nav = styled.div`
    border-bottom: 1px solid #d7d7d7;
    line-height: inherit;
`;

export const Underline = styled.span<{ left: number; width: number }>`
    display: none;
    position: absolute;
    left: ${({ left }) => left}px;
    bottom: -1px;
    width: ${({ width }) => width}px;
    height: 4px;
    border-radius: 2px;
    background: ${COLOR.MELLOWBLUE};
    transition: 0.5s;
`;

export const NavWrapper = styled(Wrapper)`
    position: relative;

    &:hover .underline {
        display: inline-block;
    }
`;

export const NavMenus = styled.ul`
    display: flex;
    justify-content: space-between;

    &:hover {
        ~ ${Underline} {
            display: inline-block;
        }
    }
`;

export const Menu = styled.li`
    a {
        font-family: 'Nunito', sans-serif;
        font-size: ${FONTSIZE.MIDEUM};
        color: ${COLOR.BLACK};
        padding: 15px;
    }
`;
