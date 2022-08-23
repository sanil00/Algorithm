function solution(begin, target, words) {
    

    const visited = { [begin]: 0 }
    const queue = [begin]
    while (queue.length) {
        let begin = queue.shift()
        if (begin === target) {
            break
        }
        for (const word of words) {
            if (isConnected(begin, word) && !visited[word]) {
                visited[word] = visited[begin] + 1
                queue.push(word)
            }
        }
    }

    return visited[target] ? visited[target] : 0
}

const isConnected = (begin, words) => {
    let wordsArray = [...words]
    let count = 0
    let beginArray = [...begin].map((begin, index) => {
        if (begin !== wordsArray[index]) count++
    })
    if (count === 1) {
        return true
    }
}
let a = "hit"
let b = "cog"
let c = ["hot", "dot", "dog", "lot", "log", "cog"]
document.querySelector("#answer").innerHTML = solution(a, b, c)
