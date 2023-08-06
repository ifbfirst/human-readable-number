module.exports = function toReadable (number) {
    function toReadable (number) {
        let nStr = String(number);
          let firstStr = '';
          let secondStr = '';
          let thirdStr = '';
          let result = '';
        if (number < 10){
            switch (nStr[0])  {
                case '1': firstStr = 'one';  break;
                case '2': firstStr = 'two'; break;
                case '3': firstStr = 'three'; break;
                case '4': firstStr = 'four'; break;
                case '5': firstStr = 'five'; break;
                case '6': firstStr = 'six'; break;
                case '7': firstStr = 'seven'; break;
                case '8': firstStr = 'eight'; break;
                case '9': firstStr = 'nine'; break;
                default: firstStr = '';
              }
              result = `${firstStr}`;
        } else if (number >= 10 && number < 100){
            switch (nStr[0]) {
                case '1': secondStr = ''; break;
                case '2': secondStr = 'twenty'; break;
                case '3': secondStr = 'thirty'; break;
                case '4': secondStr = 'fourty'; break;
                case '5': secondStr = 'fifty'; break;
                case '6': secondStr = 'sixty'; break;
                case '7': secondStr = 'seventy'; break;
                case '8': secondStr = 'eighty'; break;
                case '9': secondStr = 'ninety'; break;
                default: secondStr = '';
              }
              switch (nStr[1]) {
                case '1': firstStr = 'one'; break;
                case '2': firstStr = 'two'; break;
                case '3': firstStr = 'three'; break;
                case '4': firstStr = 'four'; break;
                case '5': firstStr = 'five'; break;
                case '6': firstStr = 'six'; break;
                case '7': firstStr = 'seven'; break;
                case '8': firstStr = 'eight'; break;
                case '9': firstStr = 'nine'; break;
                default: firstStr = '';
              }
            result = `${secondStr} ${firstStr}`;
           } else {
            switch (nStr[0]) {
                case '1': firstStr = 'one'; break;
                case '2': firstStr = 'two'; break;
                case '3': firstStr = 'three'; break;
                case '4': firstStr = 'four'; break;
                case '5': firstStr = 'five'; break;
                case '6': firstStr = 'six'; break;
                case '7': firstStr = 'seven'; break;
                case '8': firstStr = 'eight'; break;
                case '9': firstStr = 'nine'; break;
                default: firstStr = '';
              }
            switch (nStr[1]) {
                case '1': secondStr = ''; break;
                case '2': secondStr = 'twenty'; break;
                case '3': secondStr = 'thirty'; break;
                case '4': secondStr = 'fourty'; break;
                case '5': secondStr = 'fifty'; break;
                case '6': secondStr = 'sixty'; break;
                case '7': secondStr = 'seventy'; break;
                case '8': secondStr = 'eighty'; break;
                case '9': secondStr = 'ninety'; break;
                default: secondStr = '';
              }
              switch (nStr[2]) {
                case '1': thirdStr = 'one'; break;
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
            result = `${firstStr} hundred ${secondStr} ${thirdStr}`;
           }
        console.log(result);
        }
     
        
}
