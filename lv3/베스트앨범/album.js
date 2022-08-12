function solution(genres, plays) {
    let answer = []

    let genres_set = new Set(genres)

    let sum_arr = new Array()
    let genres_arr = new Array()
    let genres_sort_arr = new Array()
    for (let j = 0; j < genres_set.size; j++) {
        sum_arr[[...genres_set][j]] = 0

        genres_arr[[...genres_set][j]] = []

        let i = 0

        genres.map((value, index) => {
            if (value == [...genres_set][j]) {
                sum_arr[[...genres_set][j]] += plays[index]
                genres_arr[[...genres_set][j]][i] = { genres: genres[index], plays: plays[index], index: index }
                i++
            }
        })

        genres_sort_arr[[...genres_set][j]] = genres_arr[[...genres_set][j]].sort(function (a, b) {
            return b.plays - a.plays
        })
    }
    let sum_sort_arr = []
    let k = 0
    for (const [key, value] of Object.entries(sum_arr)) {
        sum_sort_arr[k] = { genre: key, plays: value }
        k++
    }

    sum_sort_arr = sum_sort_arr.sort(function (a, b) {
        return b.plays - a.plays
    })

    sum_sort_arr.map((value) => {
        if (genres_arr[value.genre].length == 1) {
            answer.push(genres_arr[value.genre][0].index)
        } else {
            answer.push(genres_arr[value.genre][0].index)
            answer.push(genres_arr[value.genre][1].index)
        }
    })

    return answer
}