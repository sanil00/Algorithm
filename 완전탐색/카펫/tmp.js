function solution(brown, yellow) {
    var answer = []
    let i = 1
    while (true) {
        if (yellow % i === 0) {
            if (brown === (yellow / i) * 2 + (i + 2) * 2) {
                answer.push(yellow / i + 2, i + 2)
                break
            }
        }
        i++
    }
    return answer
}
let a = 24
let b = 24
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
