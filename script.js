/* Example 1:

Input: num = [2,7,11,15], target = 9
Output: [0,1]
Output: Because num[0] + num[1] == 9, we return [0, 1].
Example 2:

Input: num = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: num = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= num.length <= 104
-109 <= num[i] <= 109
-109 <= target <= 109
Only one valid answer exists. 

//Алгоритм O(n^2)
const twoSum = (num, total) => {
     начать с первого элемента num и перебрать каждый из 
    оставшихся элементов массива, проверяя, суммируются 
    ли они до total 
       for (let i = 0; i < num.length - 1; i++) {
        далее если ответ не найден перейти ко второму элементу
        num и перебрать каждый из оставшихся элементов,
        проверяя, составляют ли они в сумме total 
      for (let j = i + 1; j < num.length; j++) {
           повторять, пока не будет найдена соответствующая сумма!
        if (num[i] + num[j] === total) {
          return [num[i], num[j]];
        }
      }
    }
  };
  console.log(twoSum([2, 7, 11, 15], 9));


//Алгоритм O(n^2)
function twoSum (num, target) {
    // Массив для хранения результата
    result = [];
    // Map  для хранения разницы и ее index
    index_map = new Map();
    // Цикл для каждого элемента в  array
    for (let i = 0; i < num.length; i++) {
        let difference = target - num[i];
        if (index_map.has(difference)) {
            result[0] = i;
            result[1] = index_map.get(difference);
            break;
        } else {
            index_map.set(num[i], i);
        }
    }
    return result;
};

let num = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(num, target));


 */

/* 


let twoSum = (num, target)=> {
    //  map список для первого номера
    num.map(
        (val1, index1)=>
      {
      // сопоставляем список снова для второго числа для 
      //сравнения с числом, возвращаемым из первой map в
      // каждом экземпляре
        num.map((val2, index2) =>
        {
        // убедится что index1 и index2 не совпадают
          if(index1 != index2 && (val1 + val2 === target))
          {
            console.log(index1, index2);
            return [index1, index2];
          }
        });
      }
    );
  }
  
  twoSum([2, 7, 11, 15], 9) */

 //Поиск свойства объекта этот алгоритм - O (n)
function twoSums(num, target) {
      //Создать объект, который отображает каждый элемент на его последний индекс
    const lastIndex = {};
    //Выполнить цикл по каждому элементу и посмотреть, 
    //есть ли target - element в объекте с другим индексом.
    num.forEach((num, i) => lastIndex[num] = i);
    for (let i = 0; i < num.length; i++) {
      const d = target - num[i];
      if (d in lastIndex && lastIndex[d] != i) {
        return [i, lastIndex[d]];
      }
    }
  }
  
  const a= [2, 7, 11, 15];
  console.log(twoSums(a, 9));  

//Задание 2
/* IV = 4
IX = 9
XL = 40
XC = 90
CD = 400
CM = 900 */

/* 
 const romanValue = ["M", "D", "C", "L", "X", "V", "I"];
const decimaValue = [1000, 500, 100, 50, 10, 5, 1];

function romanConvertedOne(a) {
  let result = "";
  decimaValue.map((item, index) => {
    while (item <= a) {
      result += romanValue[index];
      a = a - item;
      console.table({
        a: a + item,
        item: item,
        "a=a-item": a,
        result: result,
      });
    }
  });
  return result;
}

console.log(romanConvertedOne(4)); */
/* function convert(num) { 
    if(num < 1){ return "";}
    if(num >= 40){ return "XL" + convert(num - 40);}
    if(num >= 10){ return "X" + convert(num - 10);}
    if(num >= 9){ return "IX" + convert(num - 9);}
    if(num >= 5){ return "V" + convert(num - 5);}
    if(num >= 4){ return "IV" + convert(num - 4);}
    if(num >= 1){ return "I" + convert(num - 1);}  
  }
  console.log(convert(9));

 */

/* function conRoman(int) {
    console.log('Number:', int);
    let roman = [];
    let i, k, replacement;
    let seq = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    while (int > 999) {
        roman.push('M');
        int -= 1000;
    }
    while (int > 499) {
        roman.push('D');
        int -= 500;
    }
    while (int > 99) {
        roman.push('C');
        int -= 100;
    }
    while (int > 49) {
        roman.push('L');
        int -= 50;
    }
    while (int > 9) {
        roman.push('X');
        int -= 10;
    }
    while (int > 4) {
        roman.push('V');
        int -= 5;
    }
    while (int >= 1) {
        roman.push('I');
        int -= 1;
    }

    // Заменить повторы 4 ('IIII' к 'IV')
    for (i = 0; i < roman.length; i++) {
        if (roman[i] == roman[i + 1] &&
            roman[i] == roman[i + 2] &&
            roman[i] == roman[i + 3]) {
            for (k = 0; k < seq.length; k++) {
                if (roman[i] == seq[k]) {
                    replacement = seq[k + 1];
                }
            }
            roman.splice(i + 1, 3, replacement);
        }
    }

    // Преобразование неправильных повторов ('VIV' к 'IX')
    for (i = 0; i < roman.length; i++) {
        if (roman[i] == roman[i + 2] && roman[i] != roman[i + 1]) {
            for (k = 0; k < seq.length; k++) {
                if (roman[i] == seq[k]) {
                    replacement = seq[k + 1];
                }
            }
            roman[i + 2] = replacement;
            roman.splice(i, 1);
        }
    }

    roman = roman.join('');
    return roman;
}
console.log(conRoman(1994)); */

function conRoman(num) {
  //create key:value pairs
  let romanValue = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  let roman = [];
  let romanKeys = Object.keys(romanValue);
  let curValue;
  let index;
  let count = 1;

  for (let numeral in romanValue) {
    curValue = romanValue[numeral];
    index = romanKeys.indexOf(numeral);

    while (num >= curValue) {
      if (count < 4) {
        //push до 3 одинаковых цифр
        roman.push(numeral);
      } else {
        //иначе нам пришлось нажать четыре, поэтому нам нужно преобразовать числа
        //к следующему по величине номиналу  "coloring-up in poker speak"

        // Примечание: нам нужно проверить предыдущий индекс, потому что он может быть частью текущего числа.
        // Пример: (9) попытается выполнить (VIIII), поэтому нам нужно будет удалить V, а также I.
        // иначе удаление только последних трех III было бы неверным, потому что своп
        // даст нам (VIX) вместо правильного ответа (IX)
        if (roman.indexOf(romanKeys[index - 1]) > -1) {
          // удаляем предыдущую цифру, с которой мы работали
          // и все после него, так как мы их заменим
          roman.splice(roman.indexOf(romanKeys[index - 1]));
          // проталкиваем текущую цифру и ту, которая появилась две итерации назад;
          // думаем (IX), где мы пропускаем (V)
          roman.push(romanKeys[index], romanKeys[index - 2]);
        } else {
          // else Пример: (4) попытается выполнить (IIII), поэтому удалите три I и замените их на V
          // чтобы получить правильный ответ (IV)

          // удаляем последние 3 цифры, которые все одинаковые
          roman.splice(-3);
          roman.splice(-3);
          //push the current numeral and the one that appeared right before it; think (IV)
          roman.push(romanKeys[index], romanKeys[index - 1]);
        }
      }
      // уменьшаем наше число на значение, которое мы уже преобразовали в число      num -= curValue;
      count++;
      num -= curValue;
      count++;
    }
    count = 1;
  }
  return roman.join("");
}

console.log(conRoman(3));
console.log(conRoman(4));
console.log(conRoman(9));
console.log(conRoman(58));
console.log(conRoman(1994));
 

