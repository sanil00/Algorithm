function solution(genres, plays) {
    var answer = []
    let tmp = []
    let sum = {}
    genres.map((genre, index) => {
        tmp.push([genre, plays[index], index])
        sum[genre] = (sum[genre] || 0) + plays[index]
    })
    sum = Object.entries(sum).sort(([, a], [, b]) => b - a)
    tmp.sort((a, b) => b[1] - a[1])
    let count = {}

    tmp = tmp.filter((value) => {
        count[value[0]] = (count[value[0]] || 0) + 1
        return count[value[0]] < 3
    })
    sum.map((value) => {
        let j = 0
        for (let i = 0; i < tmp.length; i++) {
            if (value[0] === tmp[i][0]) {
                answer.push(tmp[i][2])
                tmp[i][0] = ""
                j++
            }
            if (j === 2) {
                break
            }
        }
    })

    return answer
}

let a = ["classic", "pop", "classic", "classic", "pop"]
let b = [500, 600, 150, 800, 2500]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
