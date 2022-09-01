function solution(clothes) {
    let answer = 1
    let num = {}
    clothes.map((clothe) => {
        num[clothe[1]] = num[clothe[1]] ? num[clothe[1]] + 1 : 1
    })

    for (const clothe in num) {
        answer *= num[clothe] + 1
    }
    return answer - 1
}

let a = [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
