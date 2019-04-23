import React, { Component } from 'react';
import {
  App,
  Views,
  View,
  Statusbar,
  Toolbar,
  Link,
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
        <Statusbar />
        <Views tabs>
          <View className="safe-areas" id="discover" url="/home/" tab main tabActive />
          <View className="safe-areas" id="episodes" url="/episodes/" tab />
          <View className="safe-areas" id="my-shows" url="/my-shows/" tab />
          <View className="safe-areas" id="profile" url="/profile/" tab />

          <Toolbar tabbar labels position="bottom">
            <Link
              tabLink="#discover"
              text="Discover"
              iconIos="f7:search"
              iconMd="material:search"
            />
            <Link
              tabLink="#episodes"
              text="Episodes"
              iconIos="f7:favorites"
              iconMd="material:view_list"
            />
            <Link
              tabLink="#my-shows"
              text="My Shows"
              iconIos="f7:desktop"
              iconMd="material:personal_video"
            />
            <Link
              tabLink="#profile"
              text="Profile"
              iconIos="f7:person"
              iconMd="material:person"
            />
          </Toolbar>
        </Views>
      </App>
    );
  }
}

export default AppComponent;
