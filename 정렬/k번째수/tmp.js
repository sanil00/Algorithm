function solution(arrayOrigin, commands) {
    var answer = []

    commands.forEach((command) => {
        let array = arrayOrigin
        array = array.slice(command[0] - 1, command[1])
        array.sort((a, b) => a - b)
        answer.push(array[command[2] - 1])
    })
    return answer
}

let a = [1, 5, 90, 100, 3, 7, 4]
let b = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 6],
]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
