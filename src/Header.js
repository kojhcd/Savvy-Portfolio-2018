export default function Header(state){
    return `
    <div id="header" class="hotpink">
      <div class="container">
        <h1 class="enpinkify">${state.title}</h1>
        <div id="greeting"></div>
        <input type="text">
      </div>
    </div>
  `;
}