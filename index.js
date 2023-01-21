const buttons = document.querySelectorAll('.button');
const spans = document.querySelectorAll('.span');
const Corent = function () {
    this.counter = 0;
    this.increase = function () {
        this.counter = this.counter + 1;
    }

}




for (let i = 0; i < buttons.length; i++) {
    const corent = new Corent();
    const corentSpan = spans[i];
    const corentButton = buttons[i];
    corentSpan.innerHTML = corent.counter;
    corentButton.addEventListener('click', (event) => {
        console.log(corentButton)
        corent.increase();
        corentSpan.innerHTML = corent.counter;
    
    })



}






