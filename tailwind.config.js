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
            },
            width: {
                150: '150px',
                300: '300px',
            },
        },
    },
    plugins: [],
};
