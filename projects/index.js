import Navigation from '../src/Navigation';
import Header from '../src/Header';
import Content from '../src/Content';
import Footer from '../src/Footer';

var Home = {
    'title': ' Kyle Jenning\'s Project'
};

var root = document.querySelector('#root');

function render(state){
    var greeting;
    var input;
    var links;

    root.innerHTML =
                                `
                                        ${Navigation}
                                        ${Header(state)}
                                        ${Content}
                                        ${Footer}
                                `;
    
    greeting = document.querySelector('.greeting');
    input = document.querySelector('.header input');

    input.addEventListener(
        'keyup',
        (event) => greeting.innerHTML =
    `  <div> 
            <h1> welcome to my page </h1> 
              <h4> ${event.target.value} </h4> 
        </div>  
    `
    );


    input.addEventListener(
        'keyup',
        (event) => greeting.innerHTML =
    ` <div> 
            <h1> welcome to my page </h1> 
              <h4> ${event.target.value} </h4> 
     </div>  
    `
    );

    links = document.querySelectorAll('.Navigation a');

    links[0].addEventListener(
        'click',
        (event) => {
            event.prevent.default();
            console.log('first link clicked');
        }
    );
}

render(Home);