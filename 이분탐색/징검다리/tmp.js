function solution(distance, rocks, n) {
    let answer = 0

    rocks.sort((a, b) => a - b)
    let min = 0
    let max = distance
    while (min <= max) {
        const mid = Math.floor((max + min) / 2)
        let start = 0
        let remove = 0
        for (let i = 0; i < rocks.length; i++) {
            if (rocks[i] - start <= mid) {
                remove++
            } else {
                start = rocks[i]
            }
        }

        if (remove > n) {
            max = mid - 1
        } else {
            min = mid + 1
            answer = Math.max(answer, min)
        }
    }

    return answer
}

let a = 25
let b = [2, 14, 11, 21, 17]
let c = 2
document.querySelector("#answer").innerHTML = solution(a, b, c)
