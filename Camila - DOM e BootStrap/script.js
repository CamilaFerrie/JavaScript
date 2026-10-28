function ExpRecMenu(){
    // alert("funciona"); // Alerta para Aparecer
    const header = document.querySelector(`header`); //Essa função pega o elemento que você está chamando
    
    header.classList.add(`animando`); // Se eu já chamei a classe antes com o ponto eu não preciso chamei dentro das aspas novamente 

    header.classList.toggle(`menu_aberto`);

    setTimeout(() => {
        header.classList.remove(`animando`);
    }, 250) // Assim que adicionar a classe animando ele remove esssa animação
}