import React, { useState, useEffect, createContext } from "react";

const AppSettingsContext = createContext();

function AppSettingsContextProvider(props)
{
    let isLocal = false;

    let settingsList = {
        endpointPrefix: 'http://127.0.0.1/not_twitter_api/api',
        imageDirectory: 'http://127.0.0.1/not_twitter_api/images',
        
        theme: 'light',
        colors: {
            primary: '#00bcd4',
            secondary: '#ff9800',
            accent: '#ff5722',
            error: '#f44336',
            warning: '#ffeb3b',
            info: '#2196f3',
            success: '#4caf50'
        }
    };

    if(!isLocal)
    {
        settingsList.endpointPrefix = 'https://fmbtheater.com/not_twitter_api/api';
        settingsList.imageDirectory = 'https://fmbtheater.com/not_twitter_api/images';
    }

    settingsList.defaultProfilePictureLocation = `${settingsList.imageDirectory}/profile/thumbnail/default.jpg`;


    const [settings, setSettings] = useState(settingsList);

    return <AppSettingsContext.Provider value={settings}>
        {props.children}
    </AppSettingsContext.Provider>

}

export {AppSettingsContext, AppSettingsContextProvider};