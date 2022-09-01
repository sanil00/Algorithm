function solution(progresses, speeds) {
    let answer = []

    while (progresses.length) {
        let count = 0
        progresses = progresses.map((value, index) => {
            return value + speeds[index]
        })

        while (progresses[0] >= 100) {
            progresses.shift()
            speeds.shift()
            count++
        }
        if (count !== 0) {
            answer.push(count)
        }
    }

    return answer
}

let a = [0, 0, 0, 0]
let b = [100, 50, 34, 25]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
