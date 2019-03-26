import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  Link,
  Block,
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle>Series Mash</NavTitle>
    </Navbar>

    {/* Page content */}
    <Block strong>
      <p>Here is your blank Framework7 app. Let&apos;s see what we have here.</p>
    </Block>
  </Page>
);

export default HomePage;
