const btn = document.getElementById("button");
let searchInput = document.getElementById("inpt");
let arr = [
    {
        name: "Маша",
        age: ["23"],
    },
    {
        name: "Дима",
        age: ["55"],
    },
    {
        name: "Сергей",
        age: ["15"],
    },
];

let num = [234, 5434, 548, 165, 5767, 239, 38786, 2327, 6229];

let a = "XXX";
let b = "YYY";

console.log(a);
console.log(b);

[b, a] = [a, b];
console.log(a);
console.log(b);

function superSum(a, b) {
    return a + b;
}

btn.onclick = function () {
    if (searchInput.value !== "google") {
        setTimeout("alert(searchInput.value)", 3000);
        setTimeout("alert(arr[0].name)", 3000);
        setTimeout("alert(superSum(1, 2))", 3000);
    } else {
        setTimeout('alert("Yandex круче. Но это не точно")', 3000);
    }
};

for (let i = 1; i < num.length; i++)
    for (let j = 0; j < i; j++)
        if (num[i] < num[j]) {
            let x = num[i];
            num[i] = num[j];
            num[j] = x;
        }

console.log(num);

function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(max(num));
