import Navigation from '../src/Navigation';
import Header from '../src/Header';
import Content from '../src/Content';
import Footer from '../src/Footer';


// var greeting = document.querySelector('.greeting');

// var greetUser = function greetUser(){
//     var firstName = prompt('What is your first name?');
//     var lastName = prompt('What is your last name');


//     if(firstName && lastName){
//         greeting.innerHTML =
//           `
//             <div>
//                     <h3>Welcome to the Zone! </h3>
//                        <h1> ${firstName} ${lastName}  </h1>
//              </div>
//          `;
//     }
//     else{
//         greetUser();
//     }
// };

// greetUser();


var intitialHTML = document.body.innerHTML;

document
    .body
    .innerHTML = `
    ${Navigation}
    ${intitialHTML}
    ${Header()}
    ${Content}
    ${Footer}
    `;


/*

  if(userName){
        greeting.innerHTML = ' <div><h3>Welcome to the Zone! </h3> <h1> ' + userName + '  </h1> </div> ';
    }
    else{
        greetUser();
    }
};

------------------------------------------------------------------------------
    if(firstName && lastName){
        greeting.innerHTML =
         ' <div><h3>Welcome to the Zone! </h3> <h1> ' + firstName + '' +  lastName + '  </h1> </div> ';
    }
    else{
        greetUser();
    }
};


*/