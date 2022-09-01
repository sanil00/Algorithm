function solution(numbers) {
    var answer = ""
    answer = numbers // string 과 number 정렬시 생각하기
        .sort((a, b) => {
            const compareA = (a + "" + (b + "")) * 1
            const compareB = (b + "" + (a + "")) * 1
            return compareB - compareA
        })
        .join("")
    return String(BigInt(answer))
}
let a = [3, 31, 34, 5, 9]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
