
let a = 0
let b = ''
let c = 0
let result = 0

while (true) {
    a = +prompt("Введите первое число") // -1000 - 1000
    if (Number.isNaN(a) || a < -1000 || a > 1000) {
        console.log("ошибка, первое число должно быть от -1000 до 1000")
        continue
    }
    break
}

while (true) {
    b = prompt("Введите знак") //  + -
    if (b != '+' && b != '-') {
        console.log("ошибка, знак должен быть + или -")
        continue
    }
    break
}
while (true) {
    c = +prompt("Введите второе число") // -1000 - 1000
    if (Number.isNaN(c) || c < -1000 || c > 1000) {
        console.log("ошибка, второе число должно быть от -1000 до 1000")
        continue
    }
    break
}

if (b == '+') {
    result = a + c
} else if (b == '-') {
    result = a - c
}
console.log(result)




