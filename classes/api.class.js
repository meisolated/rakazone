import fetch from "isomorphic-fetch"

export default class api {
 static async getRedirect(redirect) {
  let res = await fetch("http://")
  let data = await res.json()
  return data
 }
}
