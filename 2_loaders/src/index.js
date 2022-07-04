import Title from './components/title.js';
import Image from './components/image.js';
import Button from './components/button.js';
import warning from './templates/warning.html';
import './styles/warning.scss';
import fraseTxt from './files/frase.txt'

const title = new Title();
const image = new Image();
const button = new Button();

title.create("Home");
image.insertImage();
button.create();

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

let {a, b, ...teste} = obj;

console.log(a);
console.log(b);
console.log(teste);

const body = document.querySelector('body');
body.innerHTML += warning;

const frase = fraseTxt;
