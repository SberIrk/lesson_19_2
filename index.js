import "./index.css"
import MY_IMAGE from './assets/cat.jpg';

console.log('Hello World!');

const func = function(test){
    console.log(this);
}




const t ={
    a:func,
    i:1
}
const l = {
    d:t
}

l.t.a()


const h1 = document.createElement("h1");
h1.textContent ='Картинка';
const img = document.createElement('img');
img.src = MY_IMAGE;
document.body.append(h1,img)