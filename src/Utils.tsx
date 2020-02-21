import React, { useState, useEffect, useContext } from 'react';
import Switch from 'react-switch'
import ThemeContext from './ThemeContext';

export const DarkModeForm = () => {
    const [elt] = useState(document.getElementById('theme') as HTMLLinkElement);
    const [dark, setDark] = useContext(ThemeContext);

    useEffect(() => {
        if (elt) elt.href = `https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/${dark ? 'darkly' : 'flatly'}/bootstrap.min.css`
    }, [dark, elt]);

    return (
        <form className="form-inline justify-content-center">
            <span className="navbar-text ml-0 ml-sm-3 mr-3 font-weight-bold">Dark Mode</span>
            <Switch onChange={theme => setDark(theme)} checked={dark} />
        </form>
    );
}

export const ProgressBar = () => {
    const body = document.querySelector('body') as HTMLElement;

    const [scrollProgress, setScrollProgress] = useState(0);

    const scrollPercent = (win: HTMLElement) => (win.scrollTop / (win.scrollHeight - win.clientHeight) * 100)

    body.setAttribute('data-offset', '80');
    window.onscroll = () => setScrollProgress(scrollPercent(document.documentElement));

    return (
        <div className="progress" style={{ height: "2px" }}>
            <div className="progress-bar bg-success" role="progressbar" style={{
                width: `${scrollProgress}%`,
                transitionDuration: "0s"
            }} aria-valuenow={scrollProgress} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
    );
}
