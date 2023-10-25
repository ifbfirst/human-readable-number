module.exports = function toReadable (number) {
    let nStr = String(number);
    let firstStr = '';
    let secondStr = '';
    let thirdStr = '';
    let result = '';
  

      switch (nStr[nStr.length -1])  {
        case '0': thirdStr = 'zero';  break;
          case '1': thirdStr = 'one';  break;
          case '2': thirdStr = 'two'; break;
          case '3': thirdStr = 'three'; break;
          case '4': thirdStr = 'four'; break;
          case '5': thirdStr = 'five'; break;
          case '6': thirdStr = 'six'; break;
          case '7': thirdStr = 'seven'; break;
          case '8': thirdStr = 'eight'; break;
          case '9': thirdStr = 'nine'; break;
          default: thirdStr = '';
        }
       
  
      switch (nStr[nStr.length -2]) {
          case '2': secondStr = 'twenty'; break;
          case '3': secondStr = 'thirty'; break;
          case '4': secondStr = 'forty'; break;
          case '5': secondStr = 'fifty'; break;
          case '6': secondStr = 'sixty'; break;
          case '7': secondStr = 'seventy'; break;
          case '8': secondStr = 'eighty'; break;
          case '9': secondStr = 'ninety'; break;
          default: secondStr = '';
        }

        switch (nStr[nStr.length -3]) {
          case '1': firstStr = 'one hundred'; break;
          case '2': firstStr = 'two hundred'; break;
          case '3': firstStr = 'three hundred'; break;
          case '4': firstStr = 'four hundred'; break;
          case '5': firstStr = 'five hundred'; break;
          case '6': firstStr = 'six hundred'; break;
          case '7': firstStr = 'seven hundred'; break;
          case '8': firstStr = 'eight hundred'; break;
          case '9': firstStr = 'nine hundred'; break;
          default: firstStr = '';
        }
          
 if (nStr.length === 1){
    result = `${thirdStr}`;
 } else if (nStr.length === 2){
    result = `${secondStr} ${thirdStr}`;
 } else {result = `${firstStr} ${secondStr} ${thirdStr}`;}
 
if (nStr[nStr.length-2] === '0'){
  result = `${firstStr} ${thirdStr}`;
}

if (nStr[nStr.length-1] === '0' && nStr.length === 3){
  result = `${firstStr} ${secondStr}`;
}

if (nStr[nStr.length-1] === '0' && nStr.length === 2){
    result = `${secondStr}`;
  
  }
  if (nStr[nStr.length-1] === '0' && nStr[nStr.length-2] === '0'){
    result = `${firstStr}`;
  }

  if (nStr[nStr.length -2]  === '1'){
    switch (`${nStr[nStr.length -2]}${nStr[nStr.length -1]}`)  {
          case '10': secondStr = 'ten';  break;
          case '11': secondStr = 'eleven'; break;
          case '12': secondStr = 'twelve'; break;
          case '13': secondStr = 'thirteen'; break;
          case '14': secondStr = 'fourteen'; break;
          case '15': secondStr = 'fifteen'; break;
          case '16': secondStr = 'sixteen'; break;
          case '17': secondStr = 'seventeen'; break;
          case '18': secondStr = 'eighteen'; break;
          case '19': secondStr = 'nineteen'; break;
          default: secondStr= '';
        }  
            result = `${firstStr} ${secondStr}`;
  } 

  if (nStr[nStr.length-2] === '1' && nStr.length === 2){
    result = `${secondStr}`;
  }
    
    return result;   
}
