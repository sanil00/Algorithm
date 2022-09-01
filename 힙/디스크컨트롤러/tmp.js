function solution(jobs) {
    let answer = 0
    let timer = 0
    let complete = []
    let exit = jobs.length
    let task = []
    jobs.sort((a, b) => a[0] - b[0])
    while (true) {
        while (true) {
            if (jobs.length > 0) {
                if (timer >= jobs[0][0]) {
                    task.push(jobs[0])
                    jobs.shift()
                } else {
                    break
                }
            } else {
                break
            }
        }
        if (task.length > 0) {
            task.sort((a, b) => a[1] - b[1])
            timer = timer + task[0][1]
            answer += timer - task[0][0]
            complete++
            task.shift()
        } else {
            timer++
        }
        if (exit === complete) {
            break
        }
    }

    return Math.floor(answer / exit)
}

let a = [
    [24, 10],
    [28, 39],
    [43, 20],
    [37, 5],
    [47, 22],
    [20, 47],
    [15, 34],
    [15, 2],
    [35, 43],
    [26, 1],
]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
