function solution(sizes) {
    let firstMax = Math.max(...sizes.flat())

    sizes = sizes.map((size) => {
        return Math.min(...size)
    })
    let secondMax = Math.max(...sizes)
    return firstMax * secondMax
}

let a = [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
