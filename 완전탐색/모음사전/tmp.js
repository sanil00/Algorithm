function solution(word) {
    var answer = 0
    let dict = []
    let alphabet = ["A", "E", "I", "O", "U"]
    DFS("", dict, alphabet, 0)
    return dict.findIndex((value) => value === word) + 1
}

const DFS = (word, dict, alphabet, count) => {
    if (count == 5) {
        return
    }
    alphabet.forEach((alpha) => {
        dict.push(word + alpha)
        DFS(word + alpha, dict, alphabet, count + 1)
    })
}

let a = "AAAAE"
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
