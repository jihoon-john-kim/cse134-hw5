const inputhtml = document.createElement('template');
inputhtml.innerHTML = `<button id="cntBtn"></button>`;

//define class
class ButtonCount extends HTMLElement{
    //default generating
    constructor(){
        super();
        this.hitNum = 0;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(inputhtml.content.cloneNode(true));
        this.shadowRoot.querySelector('button').innerText = this.getAttribute('name') + this.hitNum;
    }
    //click Listener
    connectedCallback(){
        this.shadowRoot.getElementById('cntBtn').addEventListener('click', () => this.update());
    }
    //update
    update(){
        this.hitNum++; 
        this.shadowRoot.querySelector('button').innerText = this.getAttribute('name') + this.hitNum;
    }
}

//make instance
customElements.define('button-count', ButtonCount);


