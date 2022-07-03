const pokemon = document.querySelector('.pokemon')

const pulo= () => {
    pokemon.classList.add('pulo');

    setTimeout(()=>{
        pokemon.classList.remove('pulo');
    }, 500);
}
document.addEventListener('keydown', pulo);