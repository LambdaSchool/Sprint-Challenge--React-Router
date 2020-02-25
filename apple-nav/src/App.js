import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import NavWrapper from "./Components/NavWrapper";
import Home from "./Components/Home";
import Mac from "./Components/Mac";
import IPad from "./Components/IPad";
import IPhone from "./Components/IPhone";
import Watch from "./Components/Watch";
import TV from "./Components/TV";
import Music from "./Components/Music";
import Support from "./Components/Support";
import MacbookAir from "./Components/Macs/MacbookAir";
import Pro13page from "./Components/Macs/Pro13";
import Pro16page from "./Components/Macs/pro16";
import Imacpage from "./Components/Macs/imac";
import Imacpro from "./Components/Macs/imacpro";
import Macpro from "./Components/Macs/macpro";
import Macmini from "./Components/Macs/macmini";
import Compare from "./Components/Macs/compare";
import Prodisplay from "./Components/Macs/prodisp";
import Accessories from "./Components/Macs/accessories";
import Catalina from "./Components/Macs/catalina";

function App() {
  return (
    <div className="App">
      <NavWrapper/>


      <Route
          exact
          path="/"
          component={Home}
        />

      <Route exact path="/mac">
          <Mac />
      </Route>

      <Route path="/ipad">
          <IPad />
      </Route>

      <Route path="/iphone">
          <IPhone />
      </Route>

      <Route path="/watch">
          <Watch />
      </Route>

      <Route path="/tv">
          <TV />
      </Route>

      <Route path="/music">
          <Music />
      </Route>

      <Route path="/support">
          <Support />
      </Route>

      <Route path="/mac/macbook-air">
        <MacbookAir />
      </Route>

      <Route path="/mac/macbook-pro-13">
        <Pro13page />
      </Route>

      <Route path="/mac/macbook-pro-16">
        <Pro16page />
      </Route>

      <Route path="/mac/imac">
        <Imacpage />
      </Route>

      <Route path="/mac/imac-pro">
        <Imacpro />
      </Route>

      <Route path="/mac/mac-pro">
        <Macpro />
      </Route>

      <Route path="/mac/mac-mini">
        <Macmini />
      </Route>

      <Route path="/mac/compare">
        <Compare />
      </Route>

      <Route path="/mac/pro-display-xdr">
        <Prodisplay />
      </Route>

      <Route path="/mac/accessories">
        <Accessories />
      </Route>

      <Route path="/mac/catalina">
        <Catalina />
      </Route>

    </div>
  );
}

export default App;
