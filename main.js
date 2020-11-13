function Ex1 () {
let text = "";
let i;
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

}

function Ex2 () {
    let num = prompt("Enter your number: ");
    let total = 0;
    let i = 1;
    for (; i <= num; i +=1) {
        total = total + i;
        alert(total);
    }
}