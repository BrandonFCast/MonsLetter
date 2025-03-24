const bgContainer = document.getElementById('bg-container');
const letter = document.getElementById('letter');
const letterC = document.getElementById('letter-container');

document.getElementById('rand-btn').addEventListener('click', () => {
    const stylesheet = document.styleSheets[0];
    const num = parseInt(Math.random() * 26 + 1);
    letter.style.transform = 'scaleY(0)';
    letterC.style.backgroundColor = '#0000';
    for (let rule of stylesheet.cssRules) {
        if (rule.selectorText === '#bg-container::before') {
            rule.style.backgroundImage = 'url(assets/imgs/img' + num + '.jpeg)';
        }
    }
});