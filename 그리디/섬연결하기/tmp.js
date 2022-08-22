//https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%84%AC-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0-JS
//그루스칼 알고리즘

const getParents = (parent, x) => {
    if (parent[x] === x) return x
    return (parent[x] = getParents(parent, parent[x]))
}

const unionParents = (parent, v1, v2) => {
    const n1 = getParents(parent, v1)
    const n2 = getParents(parent, v2)
    if (n1 < n2) return (parent[n2] = n1) // parentNode를 변경해야함
    return (parent[n1] = n2)
}

const findParents = (parent, v1, v2) => {
    const n1 = getParents(parent, v1)
    const n2 = getParents(parent, v2)
    if (n1 === n2) return false
    return true
}

function solution(n, costs) {
    let answer = 0
    let parent = Array.from({ length: n }, (v, i) => i)
    costs.sort((a, b) => {
        return a[2] - b[2]
    })
    costs.map((cost) => {
        if (findParents(parent, cost[0], cost[1])) {
            answer += cost[2]
            unionParents(parent, cost[0], cost[1])
        }
    })
    return answer
}

let a = 5
let b = [
    [3, 1, 2],
    [1, 2, 3],
    [2, 3, 3],
    [3, 0, 4],
    [0, 1, 5],
    [2, 4, 6],
    [4, 0, 7],
]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
