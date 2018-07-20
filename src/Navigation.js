import { lowerCase } from 'lodash';

function buildLinks(links){
    var result = '';
    var i = 0;
    var link = '/';

    while(i < links.length){
            
        if(links[i] !== 'Home'){
            link += lowerCase(links[i]);
        }
        result += `
          <li>
            <a href="/${link[i]}">${links[i]} " data-navigo>${links[i]}</a>
          </li>
        `;

        i++;
    }

    return result;
}

export default function Navigation(state){
    return `
        <div id="navigation">
          <ul class="container">
            ${buildLinks(state.links)}
          </ul>
        </div>
      `;
}