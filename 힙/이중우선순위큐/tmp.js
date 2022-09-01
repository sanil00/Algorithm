function solution(operations) {
    let queue = []

    operations.forEach((operation) => {
        let value = operation.split(" ")
        if (value[0] === "I") {
            queue.push(value[1])
            queue.sort((a, b) => a - b)
        } else if (value[0] === "D") {
            if (value[1] === "1") {
                queue.pop()
            } else if (value[1] === "-1") {
                queue.shift()
            }
        }
    })
    if (queue.length === 0) {
        return [0, 0]
    } else {
        queue.sort((a, b) => a - b)
        let min = Number(queue[0])
        let max = Number(queue[queue.length - 1])
        return [max, min]
    }
}
let a = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
