import { Component } from 'react';
import Button from '@material-ui/core/Button';
import { useLocale, useSetLocale } from 'react-admin';

const LocaleSwitcher = () => {
    const locale = useLocale();
    const setLocale = useSetLocale();
    return (
        <div>
            <Button 
                disabled={locale === 'fr'}
                onClick={() => setLocale('fr')}
            >
                Français
            </Button>
            <Button
                disabled={locale === 'en'}
                onClick={() => setLocale('en')}
            >
                English
            </Button>
        </div>
    );
};

export default LocaleSwitcher;