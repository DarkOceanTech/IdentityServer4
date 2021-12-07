import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import RootComponent from './App.js';
//import { Helmet, HelmetProvider } from 'react-helmet-async';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

//global.Helmet = { Helmet, HelmetProvider };

global.Components = { RootComponent };
