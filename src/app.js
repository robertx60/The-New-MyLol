import { SettingsEthernetTwoTone } from '@material-ui/icons';
import {Swith, Paper} from "@material-ui/core";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import React, {useState, useEffect} from 'react';
import {api} from './api';
import Home from './pages/Home/Home';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "theme={theme}dark" : "light",
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Paper>
                <Home />
            </Paper>
        </ThemeProvider>
    );
};

export default App;
