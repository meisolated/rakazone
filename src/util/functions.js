export const convertToInternationalCurrencySystem = (labelValue) => {
  // Nine Zeroes for Billions
  if (typeof labelValue !== "number") return labelValue
  let value =
    Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue))

  return value
}

export const get_random = (list) => {
  return list[Math.floor(Math.random() * list.length)]
}

export const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function makeid(length) {
  var result = ""
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})

export function formatDuration(time) {
  if (isNaN(time)) return "00:00"
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`
  } else {
    return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`
  }
}

export function shortTitle(string, length) {
  // console.log(string)
}

export const thumbnails = (id) => {
  const maxres = `http://i.ytimg.com/vi/${id}/maxresdefault.jpg`
  const mqdef = `https://img.youtube.com/vi/${id}/mqdefault.jpg`
  const sd = `https://img.youtube.com/vi/${id}/sddefault.jpg`
  const hq = `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  const def = `https://img.youtube.com/vi/${id}/default.jpg`
  const zero = `https://img.youtube.com/vi/${id}/0.jpg`
  const one = `https://img.youtube.com/vi/${id}/1.jpg`
  const two = `https://img.youtube.com/vi/${id}/2.jpg`
  const three = `https://img.youtube.com/vi/${id}/3.jpg`
  const four = `https://img.youtube.com/vi/${id}/4.jpg`
  // return { maxres, mqdef, sd, hq, def, zero, one, two, three, four }
  return hq
}

export const since = (time) => {
  var seconds = Math.floor((new Date() - time) / 1000)
  var interval = seconds / 31536000

  if (interval > 1) {
    return Math.floor(interval) + " years ago"
  }
  interval = seconds / 2592000
  if (interval > 1) {
    return Math.floor(interval) + " months ago"
  }
  interval = seconds / 86400
  if (interval > 1) {
    return Math.floor(interval) + " days ago"
  }
  interval = seconds / 3600
  if (interval > 1) {
    return Math.floor(interval) + " hours ago"
  }
  interval = seconds / 60
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago"
  }
  return Math.floor(seconds) + " seconds ago"
}

export const unescape = (str) => {
  var charSets = {
    "&quot;": '"',
    "&#34;": '"',
    "&apos;": "'",
    "&#39;": "'",
    "&amp;": "&",
    "&#38;": "&",
    "&gt;": ">",
    "&#62;": ">",
    "&lt;": "<",
    "&#60;": "<",
    "&cent;": "¢",
    "&#162;": "¢",
    "&copy;": "©",
    "&#169;": "©",
    "&euro;": "€",
    "&#8364;": "€",
    "&pound;": "£",
    "&#163;": "£",
    "&reg;": "®",
    "&#174;": "®",
    "&yen;": "¥",
    "&#165;": "¥",
  }

  let finalStr = 1
}
