function solution(s) {
    var answer = true
    s = [...s]
    let left = 0
    let right = 0

    if (s[s.length - 1] === "(" || s[0] === ")") return false
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            left++
        } else {
            right++
        }
        if (right > left) {
            return false
        }
    }
    if (right === left) {
        return answer
    } else {
        return false
    }
}

let a = "())()(()"
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
