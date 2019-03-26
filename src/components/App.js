import React, { Component } from 'react';
import {
  App,
  Panel,
  View,
  Statusbar,
  Page,
  Navbar,
  Block,
} from 'framework7-react';

import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';

class AppComponent extends Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: 'it.albertopaolucci.seriesmash', // App bundle ID
        name: 'Series Mash', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: routes,
        // Input settings
        input: {
          scrollIntoViewOnFocus: !!this.$device.cordova,
          scrollIntoViewCentered: !!this.$device.cordova,
        },
        // Cordova Statusbar settings
        statusbar: {
          overlay: this.$device.cordova && this.$device.ios || 'auto',
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
          androidTextColor: 'white',
        },
      },
    };
  }

  componentDidMount() {
    this.$f7ready(f7 => {
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
    });
  }

  render() {
    return (
      <App params={this.state.f7params}>
        {/* Status bar overlay for fullscreen mode */}
        <Statusbar />

        {/* Left panel with cover effect */}
        <Panel left cover themeDark>
          <View>
            <Page>
              <Navbar title="Left Panel"/>
              <Block>Left panel content goes here</Block>
            </Page>
          </View>
        </Panel>

        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />
      </App>
    );
  }
}

export default AppComponent;
