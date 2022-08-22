function solution(n, times) {
    let answer = 0

    let time = [
        ...times.map((value) => {
            return value * n
        }),
    ]
    let max = Math.max(...time)
    let min = 1
    while (min <= max) {
        let mid = Math.floor((max + min) / 2)
        const sum = times.reduce((a, b) => {
            return (a += Math.floor(mid / b))
        }, 0)
        if (sum >= n) max = mid - 1
        else min = mid + 1
    }

    return min
}

let a = 6
let b = [7, 10]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
