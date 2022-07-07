window.addEventListener('load', (e) => {
    const rootStyles = document.documentElement.style;
    const getControls = document.getElementById('controls')
    getControls.addEventListener('click', function(e) {
        if (e.target.id == 'left') {
            rootStyles.setProperty('--sec-1-z-index', '10');
            rootStyles.setProperty('--section--idea-z-index', -3);
        } else if ( e.target.id == 'right') {
            rootStyles.setProperty('--sec-1-z-index', '-3')
            rootStyles.setProperty('--section--idea-z-index', 0)
        }
    })
});