// @flow
import React, { PropTypes } from 'react';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import Anchor from 'grommet-udacity/components/Anchor';
import Search from 'grommet-udacity/components/Search';
import LogoImage from './logo.png';
import { StyledMenu, StyledLogo, LogoPlaceholder } from './styles';

export default function Navbar(props: {
  pathname: string
}) {
  const { pathname } = props;
  return (
    <div>
      <Header justify="between">
        <Title>
          {typeof window !== 'undefined' ?
            <StyledLogo src={LogoImage} alt="logo" />
          :
            <LogoPlaceholder />
          }
        </Title>
        <StyledMenu inline direction="row" align="center" responsive={false}>
          <Anchor href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Anchor>
          <Anchor href="/about" className={pathname === '/about' ? 'active' : ''}>
            About
          </Anchor>
          <Search dropAlign={{ right: 'right' }} />
        </StyledMenu>
      </Header>
    </div>
  );
}