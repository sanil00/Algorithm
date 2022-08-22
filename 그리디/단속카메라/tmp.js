function solution(routes) {
    routes.sort((a, b) => {
        return a[0] - b[0]
    })
    let lastLine = routes[0][1]
    let cnt = 1
    routes.map((route) => {
        if (route[0] <= lastLine) {
            if (route[1] <= lastLine) {
                lastLine = route[1]
            }
        } else {
            lastLine = route[1]
            cnt++
        }
    })

    return cnt
}

let a = [
    [-20, -15],
    [-18, -13],
    [-14, -5],
    [-5, -3],
]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
