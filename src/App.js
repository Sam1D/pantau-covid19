import React from 'react';
import MetaTags from 'react-meta-tags';
import { BrowserRouter as Router } from "react-router-dom";

// IMPORT : Material Ui @Color
import blue from '@material-ui/core/colors/blue';

import Main from './pages';

function App() {
  return (
    <Router>
      <MetaTags>
        <meta name="theme-color" content={blue[700]} />
      </MetaTags>

      <Main />
    </Router>
  );
}

export default App;
