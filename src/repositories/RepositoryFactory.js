import LoansRepository from "./loansRepository";

const repositories = {
  loans: LoansRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}