const buttons = document.querySelectorAll('.button');
const spans = document.querySelectorAll('span');
const Corent = function(){
    this.count = 0;
    this.healer = () => {
        this.count =this.count + 1;
    }
}
for( let i = 0; i < buttons.length;i++ ){
    const corent = new Corent();
    const buttonCorent = buttons[i];
    const spanCorent = spans[i];
    spanCorent.innerHTML = corent.count;
    buttonCorent.addEventListener('click', (event) => {
        corent.healer();
        spanCorent.innerHTML = corent.count;
        buttonCorent.style.color = 'red'
    })
}