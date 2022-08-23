function solution(maps) {
    let answer = 0
    const row = maps.length - 1
    const col = maps[0].length - 1
    const queue = [[0, 0, 1]]
    let move = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ]

    const isOut = (currentY, currentX) => {
        if (currentX < 0 || currentX > col || currentY < 0 || currentY > row) {
            return true
        }
        return false
    }

    while (queue.length) {
        let [currentY, currentX, count] = queue.shift()

        if (currentX === col && currentY === row) return count
        for (let i = 0; i < move.length; i++) {
            let nextX = currentX + move[i][1]
            let nextY = currentY + move[i][0]

            if (isOut(nextY, nextX)) {
                continue
            }
            if (maps[nextY][nextX] === 0) continue
            maps[nextY][nextX] = 0
            queue.push([nextY, nextX, count + 1])
        }
    }

    return -1
}

let a = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
