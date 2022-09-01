function solution(priorities, location) {
    var answer = []
    let stack = []

    let print = priorities.map((value, index) => {
        return [value, index]
    })

    while (print.length) {
        let max = Math.max(...priorities)
        if (print.length == 0) return stack
        if (print[0][0] !== max) {
            let add = print.shift()
            let add2 = priorities.shift()
            print.push(add)
            priorities.push(add2)
        } else {
            let add = print.shift()
            priorities.shift()
            stack.push(add)
        }
    }
    answer = stack.findIndex((value) => {
        return value[1] === location
    })
    return answer + 1
}

let a = [2, 1, 3, 2]
let b = 2
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
