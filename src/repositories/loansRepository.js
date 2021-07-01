import Repository from './Repository'
const resource = "/loans"

export default {
  get() {
    return Repository.get(`${resource}`)
  },

  getLoan(id) {
    return Repository.get(`${resource}/${id}`)
  },

  createLoan(payload) {
    return Repository.post(`${resource}`, payload)
  },

  updateLoan(id, payload) {
    return Repository.put(`${resource}/${id}`, payload)
  }
}
