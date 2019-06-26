import React from 'react';
import './App.css';
import {Title} from "./components/title";
import {Menu} from "./components/menu";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";



function App() {

  return (
      <div className="main">
        <div className="maidsn-inside-c">
          <Title/>
          <Menu/>
        </div>
      </div>

  );

}

export default App;
