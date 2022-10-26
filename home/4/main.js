const styles  = ['Джаз', 'Блюз'];
console.log("Array: ", styles)

styles.push('Рок-н-ролл')
console.log("Array: ", styles)

styles[Math.floor(styles.length / 2)] = 'Классика'
console.log("Array: ", styles)

first = styles.shift()
console.log(first, styles)

styles.unshift('Рэп', 'Регги')
console.log("Array: ", styles)

function sumInput() {
    let arr = []

    while (true) {
        let input = prompt('Введите число');
        if (input == null || input === '' || isNaN(input)) {
            break
        }
       arr.push(Number(input));
    }

    const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    alert("Sum of " + arr + " is " + sum)
}
