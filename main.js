let textarea = document.querySelector('textarea')
let btn = document.querySelector('button')
let result = document.querySelector('.result')

btn.addEventListener('click', ()=> {
    result.innerHTML += '['   + '\n'
    textarea = textarea.value.split('\n')
    textarea.shift()
    for( i in textarea) {
        let d = textarea[i].split('--')
      for(i in d) {
          switch (i) {
              case '0': 
              result.innerHTML += '{' + '\n' + '"id":' + d[i].trim() + ',' + '\n'
              break;
              case '1': 
              result.textContent += '"name:":' + d[i] + ','  + '\n'
              break;
              case '2': 
              result.textContent += '"amount":' +d[i] + ','  + '\n'
              break;
              case '3': 
              result.textContent += '"Remark":' + d[i] + ','  + '\n'
              break;
              
          }

       }
       result.innerHTML += '},' + '\n'
       }

       result.textContent += ']'    
       console.log(JSON.stringify(result));  
})