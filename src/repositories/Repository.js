import axios from "axios"

const baseDomain = "https://hidden-reaches-35190.herokuapp.com"
const baseURL = `${baseDomain}/api`

export default axios.create({
  baseURL
  // header: { Authorization: "Bearer " }
})
