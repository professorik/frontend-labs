let s = 'Когда вода всемирного потопа вернулась вновь в границы берегов, из пены уходящего потока..'

s = s.toLowerCase()
console.log(s)

let tmp = s.split(/[ .,]/).filter(element => element)
console.log(tmp)

sentences = tmp.sort()
console.log(sentences)

function selectWords(allWords, length) {
    return allWords.filter((element) => {
        return element.length === length;
    });
}

let max = sentences[0].length
sentences.forEach((e) => {
    if (e.length > max) {
        max = e.length
    }
})

for (let i = 1; i <= max; i++) {
    console.log(i + ": " + selectWords(sentences, i))
}