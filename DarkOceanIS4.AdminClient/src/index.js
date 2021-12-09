import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

//import bootstrap from '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import RootComponent from './App.js';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

//global.bootstrap = bootstrap;
global.Helmet = { Helmet, HelmetProvider };

global.Components = { RootComponent };
