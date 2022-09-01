function solution(arr) {
    var answer = []

    arr.forEach((value, index) => {
        if (value !== arr[index + 1]) {
            answer.push(value)
        }
    })

    return answer
}

let a = [1, 1, 3, 3, 0, 1, 1]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
