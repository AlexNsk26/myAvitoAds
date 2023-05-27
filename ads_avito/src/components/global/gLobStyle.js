export const Global = `
@font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    src: local('Roboto'), url('fonts/Roboto-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), 
      url('fonts/Stratos-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    color: #000000;
  }
  
  div,
  button,
  a {
    font-family: 'Roboto', sans-serif;
  }
`