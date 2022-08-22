function solution(people, limit) {
    let answer = 0
    people.sort((a, b) => a - b)
    while (people.length !== 0) {
        if (people[0] + people[people.length - 1] <= limit) {
            people.pop()
            people.shift()
        } else {
            people.pop()
        }
        answer++
    }
    return answer
}

let a = [70, 20, 80, 30]
let b = 100
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
