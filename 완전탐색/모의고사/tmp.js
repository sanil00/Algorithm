function solution(answers) {
    let answer = []

    let user01 = [1, 2, 3, 4, 5]
    let user02 = [2, 1, 2, 3, 2, 4, 2, 5]
    let user03 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let point = [0, 0, 0]
    answers.forEach((answer, index) => {
        if (user01[index % 5] === answer) point[0]++
        if (user02[index % 8] === answer) point[1]++
        if (user03[index % 10] === answer) point[2]++
    })
    let max = Math.max(...point)

    point.forEach((value, index) => {
        if (value === max) {
            answer.push(index + 1)
        }
    })
    return answer
}

let a = [1, 2, 3, 4, 5]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
