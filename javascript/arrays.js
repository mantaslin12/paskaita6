// task1
console.log("-----Pirma-----");
let string1 = "Robert"
let string2 = "De Niro"
if (string1.length < string2.length) {
    console.log(string1);
}
else {
    console.log(string2);
}
// task2
console.log("-----Antra-----");
console.log(string1.toUpperCase(), string2.toLowerCase());
// task3
console.log("-----Trecia-----");
let string3 = string1[0] + string2[0]
console.log(string3);
// task4
console.log("-----Ketvirta-----");
let string4 = string1.substring(string1.length - 3) + " " + string2.substring(string2.length - 3);
console.log(string4);
// task5
console.log("-----Penkta-----");
let string5 = "An American in Paris"
let string6 = string5.replace(/a/gi, "*");
console.log(string6);
// task6
console.log("-----Sesta-----");
let string7 = string5.replace(/[aeiou]/gi, "*");
console.log(string7);
let string8 = "Breakfast at Tiffany's"
let string9 = string8.replace(/[aeiou]/gi, "*");
console.log(string9);
let string10 = "2001: A Space Odyssey"
let string11 = string10.replace(/[aeiou]/gi, "*");
console.log(string11);
let string12 = "It's a Wonderful Life"
let string13 = string12.replace(/[aeiou]/gi, "*");
console.log(string13);
// task7
console.log("-----Septinta-----");
let string14 = "Star Wars: Episode " + " ".repeat(Math.ceil(Math.random() * 10)) + (Math.ceil(Math.random() * 7) + 1) + " - A New Hope";
console.log(string14);
console.log(string14[string14.length - 14]);
// task8
console.log("-----Astunta-----");
let string15 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
let string16 = string15.split(" ");
let string17 = 0;
console.log(string16);

for (let i = 0; i < string16.length; i++) {
    let element = string16[i];
    if (element.length <= 5) { 
        string17++;
    }
}
console.log(string17);
console.log("---------------------");
let string18 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale"
let string19 = string18.split(" ");
let string20 = 0;
console.log(string19);

for (let i = 0; i <string16.length; i++) {
    let element2 =string16[i];
    if (element2.length <=5) {
        string20++;
    }
    
}
console.log(string20);