const pokemon = document.querySelector('.pokemon')
const arbusto = document.querySelector('.arbusto')


const pulo= () => {
    pokemon.classList.add('pulo');

    setTimeout(()=>{
        pokemon.classList.remove('pulo');
    }, 500);
}
const loop = setInterval(() => {
 
    const arbustoPosi = arbusto.offsetLeft;
    const pokemonPosi = +window.getComputedStyle(pokemon).bottom.replace('px', '');

    if (arbustoPosi < 260 && arbustoPosi >0 && pokemonPosi <= 100) {

        arbusto.style.animation = 'none';
        arbusto.style.left = `${arbustoPosi}px`;
        
        pokemon.style.animation = 'none';
        pokemon.style.bottom = `${pokemonPosi}px`;
    }
}, 10)

document.addEventListener('keydown', pulo);