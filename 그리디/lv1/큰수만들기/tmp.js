function solution(N, K) {
    let arr = [...N]
    let answer = ""
    for (let i = 0; i < arr.length; i++) {
        let maxNumber = 0
        let tmpArr = arr.filter((value) => value !== undefined).splice(0, K + 1)
        for (let i = 0; i < tmpArr.length; i++) {
            if (tmpArr[i] > maxNumber) {
                maxNumber = tmpArr[i]
                if (maxNumber === "9") {
                    break
                }
            }
        }
        if (arr.length - i == K) {
            arr = []
            break
        }
        if (arr[i] !== maxNumber) {
            delete arr[i]
            K--
        } else {
            answer += arr[i]
            delete arr[i]
        }
        if (K === 0) {
            break
        }
    }
    return [...answer, ...arr].join("")
}

let a = "1231234"
let b = 3
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
