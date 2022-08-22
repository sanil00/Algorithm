function solution(n, lost, reserve) {
    let answer = 0

    let gymSuit = new Array(n).fill(1)
    lost.map((value) => gymSuit[value - 1]--)
    reserve.map((value) => gymSuit[value - 1]++)

    gymSuit.map((value, index) => {
        if (value == 2 && gymSuit[index - 1] == 0) {
            gymSuit[index]--
            gymSuit[index - 1]++
        } else if (value == 2 && gymSuit[index + 1] == 0) {
            gymSuit[index]--
            gymSuit[index + 1]++
        }
    })

    gymSuit = gymSuit.filter((value) => {
        return value !== 0
    })

    gymSuit.map(() => {
        answer++
    })

    return answer
}

let a = 5
let b = [2, 4]
let c = [3]
document.querySelector("#answer").innerHTML = solution(a, b, c)
