
document.getElementById('dice').addEventListener('click', () => {
    const randomnum = Math.floor(Math.random() * 6) + 1;
    const dice = document.querySelector('#dice img');
    dice.src = `./img/${randomnum}.png`; 
})
