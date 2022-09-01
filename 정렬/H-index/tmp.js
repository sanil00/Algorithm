function solution(citations) {
    citations = citations.sort(sorting)
    var i = 0
    console.log(citations)
    while (i + 1 <= citations[i]) {
        i++
    }
    return i

    function sorting(a, b) {
        return b - a
    }
}
// function solution(citations) {
//     citations.sort((a, b) => b - a)
//     let max = 0
//     let newArray = Array.from(Array(Math.max(...citations) + 1).keys())
//     newArray.map((citation) => {
//         let filterCitation = citations.filter((value) => {
//             return value >= citation
//         })
//         if (filterCitation.length >= citation) {
//             if (max < citation) max = citation
//         }
//     })

//     return max
// }

let a = [6, 5, 5, 5, 3, 2, 1, 0]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
