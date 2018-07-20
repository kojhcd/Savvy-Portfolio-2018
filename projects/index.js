import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Content from './src/Content';
import * as State from './store';
import Navigo from 'navigo';
import { capitalize } from 'lodash';

var root = document.querySelector('#root');
var router = new Navigo(location.origin);

function handleRoute(params){
    var page = capitalize(params.page);

    console.log(params);
    console.log(page); 
    render(State[page]);
}

function render(state){
    var greeting;
    var input;
    // var links;
    // var i = 0;
   

    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content}
        ${Footer}
    `;

    greeting = document.querySelector('#greeting');
    input = document.querySelector('#header input');

    input.addEventListener(
        'keyup',
        (event) => greeting.innerHTML = `
        <div>
            <h3>Welcome to my home page,</h3>
            <h4>${event.target.value}</h4>
        </div>
    `
    );

    router.updatePageLinks(); 

    function handleRoute(params){
        var page = capitalize(params.page); 

        render(State[page]); 
    }
    
    router
        .on(':page', handleRoute) 
        .on('/', () => handleRoute({'page': 'home'}))
        .resolve();