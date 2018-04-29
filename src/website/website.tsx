/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website/website.ts::module>>
 * BESPOKE<<DEPRECATE>>
 * SIGNED<<1RKUwclDdMfXAD2DdhOxfgDAVpa0EDZ0yS+bL/UJnr0j/P37ZZ7XVMuC9fGsBtcLOLVYKjRgEwqLANROqJ+V/g==>>
 */

import * as cookie from "js-cookie";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  authMiddleware,
  RelayNetworkLayer,
  urlMiddleware,
} from "react-relay-network-modern";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import {
  Environment,
  RecordSource,
  Store,
} from "relay-runtime";

import {
  FourOhFour,
} from "./views/FourOhFour";
import {
  Root,
} from "./views/Root";


/* BESPOKE START <<DEPRECATE>> */
export function render(apiURL: string): void {
  const environment: Environment = new Environment({
    network: new RelayNetworkLayer([
      urlMiddleware({
        url: apiURL,
      }),
      authMiddleware({
        allowEmptyToken: true,
        token: (): string => cookie.get("accessToken"),
      }),
    ]),
    store: new Store(new RecordSource()),
  });
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(): JSX.Element => <Root environment={environment} />}
        />
        <Route
          path="/index.html"
          render={(): JSX.Element => <Root environment={environment} />}
        />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root"),
  );
}
/* BESPOKE END <<DEPRECATE>> */
