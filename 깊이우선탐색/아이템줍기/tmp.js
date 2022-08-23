function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0
    let map = Array.from(Array(20).fill(0), () => Array(20).fill(0))

    let doubleRectangle = rectangle.map((rectangle) => {
        return rectangle.map((value) => {
            return value * 2
        })
    })

    doubleRectangle.map(([x1, y1, x2, y2]) => {
        for (let i = y1; i <= y2; i++) {
            for (let j = x1; j <= x2; j++) {
                if (i === y1 || i === y2 || j === x1 || j === x2) {
                    if (map[j][i] === 1) {
                        continue
                    } else {
                        map[j][i] += 1
                    }
                } else {
                    map[j][i] += 2
                }
            }
        }
    })

    const queue = [[characterX * 2, characterY * 2, 0]]

    while (queue.length) {
        let [cX, cY, count] = queue.shift()

        if (cY === itemY * 2 && cX === itemX * 2) {
            return count / 2
        }
        for (let k = 0; k < move.length; k++) {
            const nY = cY + move[k][1]
            const nX = cX + move[k][0]
            // console.log(map[nY][nX])
            if (nX >= 0 && nX < 101 && nY >= 0 && nY < 101)
                if (map[nX][nY] === 1) {
                    queue.push([nX, nY, count + 1])
                    map[nX][nY] = 0
                }
        }
    }

}

const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
]
let a = [
    [1, 1, 7, 4],
    [3, 2, 5, 5],
    [4, 3, 6, 9],
    [2, 6, 8, 8],
]
let b = 1
let c = 3
let d = 7
let e = 8
document.querySelector("#answer").innerHTML = solution(a, b, c, d, e)
