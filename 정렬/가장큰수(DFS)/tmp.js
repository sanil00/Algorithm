function solution(numbers) {
    var answer = []
    let count = 0
    let visited = []
    let empty = ""
    DFS(empty, visited, numbers, answer, count)

    answer = answer.sort((a, b) => Number(a) - Number(b))

    return String(BigInt(answer.pop()))
}

const DFS = (a, visited, numbers, answer, count) => {
    for (let i = 0; i < numbers.length; i++) {
        if (!visited[i]) {
            intVisited = [...visited]
            intVisited[i] = true
            DFS(a + numbers[i], intVisited, numbers, answer, count + 1)
        }
    }
    if (count === numbers.length) {
        answer.push(a)
        return
    }
}
let a = [999, 1000, 999, 1000, 999, 1000, 1000, 1000]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)

let test = [
    [[6, 10, 2], "6210"],
    [[3, 30, 34, 5, 9], "9534330"],
    [[10, 101], "10110"],
    [[1, 11, 111, 1111], "1111111111"],
    [[0, 0, 0, 0, 0, 0], "0"],
    [[2, 20, 200], "220200"],
    [[0, 0, 70], "7000"],
    [[0, 0, 0, 1000], "1000000"],
    [[0, 0, 1000, 0], "1000000"],
    [[1000, 0, 0], "100000"],
    [[12, 121], "12121"],
    [[21, 212], "21221"],
    [[11, 12, 10], "121110"],
    [[0, 0, 0, 1], "1000"],
    [[1, 2, 3, 1, 1, 3], "332111"],
    [[1, 2, 21, 21], "221211"],
    [[3, 30, 34, 5, 9, 4, 40, 42], "954424034330"],
    [[5, 546]],
    [[1000, 1000, 1000, 1000, 1000, 1000]],
    [[1, 11, 110, 1110]],
]
test.forEach((numbers) => {
    console.log(solution(numbers[0]))
})
