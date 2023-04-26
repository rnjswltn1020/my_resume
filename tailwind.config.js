module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            colors: {
                highlight: '#ef4444',
                normal: '#27272a',
                main: '#ffefda2e',
                modalBg: '#0000001c',
            },
            width: {
                150: '150px',
                300: '300px',
            },
            maxHeight: {
                854: '854px',
            },
            zIndex: {
                10001: '10001',
                11000: '11000',
                11002: '11002',
                9999: '9999',
            },
        },
    },
    plugins: [],
};
