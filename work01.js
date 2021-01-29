// -------------------------
        // let count = prompt('Введите число');
        // if (count <=10 || count >=25) {
        //     alert('true');
        // }
        // else { alert ('false') }

        //----------------------
        // const currentPassword = '1234';
        // let password = prompt('Введите пароль');

        // if (password == null) {
        //     alert('Отменено');
        // } else if (password === currentPassword) {
        //     alert('Пароль верный');
        // } else {
        //     alert("Пароль не верный");
        // }



        //------------------------
        // let i = 0
        // while (i < 5) {
        //     alert(`number ${i}`); //  от 0 до 4
        //     i++;    
        //     // alert(`number ${i}`); //  от 1 до 5
        // }

        //-------------------------


        // let arr = new Array();
        // for (let i=0; i<4; i++){
        //     arr[i]=i**2;
        // }
        // let summ = 0;
        // for (let i=0; i<arr.length; i++){
        //     summ+=arr[i];
        // }
        // console.log(summ)

        // let arr = [1,2,3,4,6,5].join(' aaa ');
        
// ------------------------------------------------

        // let arr = [0,1,2,3,4,6,5,-5,18,-1]
        // arr.sort (function(a,b){
        //     return a-b
        // })
        // arr.sort (function(a,b){
        //     return b-a
        // })
        // arr.sort ((a,b)=>a-b);// сортировка по возрастанию стрелочная функция
        // arr.sort ((a,b)=>b-a) // сортировка по убыванию


        // console.log(arr)

//------------------создание массива через цикл
//         let arr1 = new Array();
//         for (let i = 1; i<=4; i++) {
//           arr1[i]=i;
//           document.writeln(arr1[i] + "<br>");
//         }

// //------------------создание массива через цикл по формуле
// let arr2 = new Array();
// for (let i = 1; i<=5; i++) {
//   arr2[i]=i*2;
//   document.writeln(arr2[i] + "<br>");
// }
// //------------------сумма элементов массива
// let arr3 = new Array(); //создаем пустой массив
// for (let i = 0; i<=4; i++) {// от 0 до 4 с шагом +1
//   arr3[i]=i; // добавляем элементы
//   document.writeln(arr3[i] + "<br>"); // выводим в документ
// }
// let sum = 0;// новая переменная
// for (i=0; i<arr3.length; i++){// от 0 до длины массива с шагом +1
//   sum+=arr3[i];//сумма элементов
// }
// document.writeln(sum + "<br>"); // выводим в документ


//-------------------------------------
//-------------------------------------
//-------------------------------------
//-------------------------------------
        // ?????--------Задача 10 ----------------
        //Пользователь вводит многозначное число через promt. 
        //Напишите функцию colonOdd(num), которая принимает число num 
        //в качестве аргумента и вставляет двоеточие (:) между двумя нечетными 
        //числами. Например, если вводится число 55639217, то на выход 
        //должно быть 5:563:921:7. Подсказка: по строкам можно итерироваться циклом 
        //for так же как и по массиву. Второй аргумент в функции prompt предзаполняет 
        //поле для ввода. Четные числа делятся на 2 без остатка, 
        //нечетные - нет (вспоминайте оператор деления по модулю). 
        //Перед проверкой строку нужно привести к числу.

        // const num = prompt('Введите число', 123);
        // function colonOdd (num) {
        //   let str = num.toString();
        //   let result = [str[0]];
        //   for(var i=1; i<str.length; i++) {
        //     if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
        //     result.push(':', str[i]);
        //     }
        //     else {
        //     result.push(str[i]);
        //     }
        //   }
        //   return result.join('');  
        // }

        // alert(colonOdd(num));


        //???????--------Задача 19 ----------------
        //Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент 
        //массива из позиции from в позицию to.

        // const arr = [ 'a', 'b', 'c', 'd', 'e'];
        // function moveElement(arr,from,to) {
        //   arr.splice(to,0,arr.splice(from,1)[0]);
        //   return arr;
        // }

        // alert(moveElement(arr,3,1));





        //--------Задача 1 ----------------
        //сортировка пузырьком

        // const arr = [1,2,3,4,6,5,5,6,8,2,3,4,6,7];
        // function swap (a,i,j) {
        //     let temp = a[i];
        //     a[i] = a[j];
        //     a[j] = temp;
        // }
        // for(let i=arr.length-1; i>0; i--){
        //     let isSwapCalled = false;
        //     for (let j=0; j<i; j++){
        //         if(arr[j]>arr[j+1]){
        //             swap (arr, j, j+1);
        //             isSwapCalled = true;
        //         }
        //     }
        //     if (!isSwapCalled){
        //         break
        //         alert('break')
        //     }
        // }
        // alert(arr)

        
        //--------Задача 3 ----------------
        //Написать функцию, которая делает все буквы в каждом элементе  массива заглавными

        // const arr = ['one', 'two', 'three'];
        // let result=arr.map(item => item.toUpperCase());
        // alert(result);
        
        //--------Задача 6 ----------------
        //Напишите функцию, которая разворачивает массив в обратном порядке.

        // let arr = [1,2,3]
        // arr.sort (function(a,b){
        //     return b-a
        // })
        // alert(arr)


        //--------Задача 8 ----------------
        //Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.

      //   const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
      //   function copyArr(arr) {
      //   return arr.slice();
      //  };
      //  let arr1 = copyArr(vegetables);
      //  alert (arr1);


        //--------Задача 9 ----------------
        //9 Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. 
        //Элементы массива будут разделены запятой.

        // const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
        // alert(vegetables.join()); //alert(vegetables.toString());  или так
        
        
        //--------Задача 14 ----------------
        //Напишите функцию getFirst(array, n), которая возвращает фрагмент 
        //массива, содержащий первые n элементов массива.
        
        // const array = [1,2,3,4,5,6,7,8,9];
        // let n=prompt('введите количество первых элементов', 1);
        //   function getFirst(array, n) {
        //     return array.slice(0, n);
        // };
        // alert(getFirst(array, n));


        //--------Задача 15 ----------------
        //Напишите функцию getLast(array, n), которая возвращает фрагмент 
        //массива, содержащий последние n элементов массива.
        
      //   const array = [1,2,3,4,5,6,7,8,9];
      //   let n=prompt('введите количество последних элементов', 1);
      //   function getLast(array, n) {
      //     return array.slice(array.length - n);
      // };
      // alert(getLast(array, n));

        //--------Задача 16 ----------------
        //Напишите функцию sumOfSquares(arr), 
        //которая возвращает сумму квадратов значений массива.
        
    //     let arr=[1,2,3,4,5];
    //     function sumOfSquares(arr) { 
    //       return arr.reduce((sum, current) => (sum+current*current));
    //  }
    //   alert(sumOfSquares(arr));

        //--------Задача 17 ----------------
        //Напишите код, который определяет сумму и произведение значений массива.
      
      //   const arr=[1,2,3,4,5,6,7,8,9];
      //   let sum=arr.reduce((sum, current) => (sum+current));
      //   let product=arr.reduce((sum, current) => (sum*current));
      // alert("Сумма: " + sum +  "     Произведение: " + product);

        //--------Задача 18 ----------------
        //Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива
        
        // let arr=[3,5,7,8,5,8,7,8,9,5,5,6,6,5,5,5,7,7,8,9,9,1,1];
        // let num=prompt('введите число от 1 до 9');
        // let result= arr.filter(item => {
        //     return item!=num;
        // });
        // alert('Число ' +num + 'исключено из массива  ' + result);


        //--------Задача 20 ----------------
        //Напишите функцию generateRange(start, end), которая генерирует массив заданной длины len, 
       // заполненный целыми числами. Каждое последующее число в массиве должно быть больше предыдущего 
        //на единицу

        // let len = prompt('введите длину массива', 5);
        // let arr = new Array();
        //   for (let i = 0; i<len; i++) {
        //   arr[i]=i+1;
        //   document.write(arr[i] + "<br>");
        //   }
        // alert(arr);

        //--------Задача 21 ----------------
        // Описание задачи: Используя метод map() написать код, который получает из массива 
        // строк новый массив, содержащий их длины.
 
        // const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
        // let vegetableLength = vegetables.map(item => item.length);
        // alert(vegetableLength);
 
        //--------Задача 24 ----------------
        // Описание задачи: Написать код, объединяющий три массива цифр.

        // const a = [1, 2, 3];
        // const b = [4, 5, 6];
        // const c = [7, 8, 9];
        // let arr=a.concat(b,c);
        // alert(arr.reverse());
        








      















        
        







