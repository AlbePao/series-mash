import React from 'react';
import {
  Page,
  Toolbar,
  Tabs,
  Tab,
  Link,
  Block,
} from 'framework7-react';

const EpisodesPage = () => (
  <Page>
    <Toolbar tabbar position="top">
      <Link tabLink="#to-watch" tabLinkActive>To watch</Link>
      <Link tabLink="#upcoming">Upcoming</Link>
    </Toolbar>

    <Tabs swipeable>
      <Tab id="to-watch" tabActive>
        <Block>
          <p>To watch tab</p>
        </Block>
      </Tab>
      <Tab id="upcoming">
        <Block>
          <p>Upcoming episodes tab</p>
        </Block>
      </Tab>
    </Tabs>
  </Page>
);

export default EpisodesPage;
