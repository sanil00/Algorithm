function solution(numbers) {
    var answer = []
    let visited = []
    DFS("", [...numbers], visited, 0, answer)
    answer = answer.filter((value) => {
        return Number(value) > 1
    })
    let tmp = []
    answer.map((value) => {
        let number = Number(value)
        let sqr = Math.sqrt(number)
        for (let i = 2; i <= sqr; i++) {
            if (number % i === 0) {
                return
            }
        }
        tmp.push(number)
    })
    tmp = new Set(tmp)
    return tmp.size
}

const DFS = (number, numbers, visited, count, answer) => {
    for (let i = 0; i < numbers.length; i++) {
        let currentVisit = [...visited]
        if (!currentVisit[i]) {
            currentVisit[i] = true
            DFS(number + numbers[i], numbers, currentVisit, count + 1, answer)
        }
    }

    if (count <= numbers.length) {
        answer.push(number)
        return
    }
}
let a = "011"
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
