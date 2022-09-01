function solution(k, dungeons) {
    var answer = -1
    let max = []
    let visited = []
    DFS(k, dungeons, 0, max, visited)
    answer = Math.max(...max)
    return answer
}

const DFS = (k, dungeons, count, max, visited) => {
    dungeons.forEach((dungeon, index) => {
        let nextVisit = [...visited]
        if (!nextVisit[index]) {
            if (dungeon[0] <= k) {
                nextVisit[index] = true
                DFS(k - dungeon[1], dungeons, count + 1, max, nextVisit)
                max.push(count + 1)
            }
        }
    })
}
let a = 80
let b = [
    [80, 20],
    [50, 40],
    [30, 10],
]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
