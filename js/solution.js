// Домашка #15 — DOM и события

// У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка в консоль :


// Используйте цикл for..of
// 1 - Вывести общее кол-во элементов в консоль
// 2 - Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывсести этот массив в консоль
// 3 - Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль
// Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
// Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
// Удалить у тега ul аттрибут ‘data-dog-tail‘


console.log("1 - Вывести общее кол-во элементов в консоль");
let list = document.body.firstElementChild.childNodes;
console.log(list);
console.log(" Общее количество элементов в *Коллекции Элементов* " + list.length);
console.log("");



console.log("2 - Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив");
console.log("— вывсести этот массив в консоль");
let arrayList = [];
for (let listElement of list) {
    arrayList.push(listElement.textContent);
}

let arrayListOnlyText = arrayList.filter(
    function (item){
        if(item % 2 !== 0 ){
            return item;
        }
        return  null
    }
)
console.log(arrayListOnlyText);
console.log("");



console.log("3 - Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of)");
console.log("и записать значение каждого аттрибута в массив — вывсести этот массив в консоль");
let arrayAttribute = [];

for (let listAttribute of list) {
    arrayList.push(document.body.firstElementChild.textContent);
}

let attrs = document.body.firstElementChild.attributes;
for (let i = 0; i < attrs.length; i++) {
    // alert( attrs[i].name + " = " + attrs[i].value );
}