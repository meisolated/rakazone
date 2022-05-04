export function convertToInternationalCurrencySystem(labelValue) {

    // Nine Zeroes for Billions
    let value = Math.abs(Number(labelValue)) >= 1.0e+9

        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(0) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6

            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(0) + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3

                ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(0) + "K"

                : Math.abs(Number(labelValue))

    return value

}


export function get_random(list) {
    return list[Math.floor((Math.random() * list.length))]
}