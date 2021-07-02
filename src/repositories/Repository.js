import axios from "axios"

const baseDomain = process.env.BASE_URL
const baseURL = `${baseDomain}/api`

export default axios.create({
  baseURL
  // header: { Authorization: "Bearer " }
})
