import React from "react";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render( <><CssBaseline /><App /></>);