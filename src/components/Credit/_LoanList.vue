<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-3">
        <h2>Loan List</h2>
      </div>
      <div class="col-6" >
        <div v-if="!is_admin">
          <q-btn
            dense
            outline
            flat
            text-color="primary"
            label="Create Loan"
            icon="add"
            style="padding: 5px 10px"
            @click="cardOpened.open = true"
          />
          <FormCreate :card-opened="cardOpened" @createLoan="createLoan" />
        </div>
      </div>
      <div class="col-3 text-right">
        Current Role: <q-toggle color="primary" label="Admin" v-model="is_admin" />
      </div>
    </div>
    <q-separator />
    <br />
    <q-markup-table separator="vertical" flat bordered>
      <thead>
        <tr>
          <th width="20%" class="text-left">Purpose</th>
          <th width="10%" class="text-right">Amount required</th>
          <th width="10%" class="text-right">Loan Term</th>
          <th width="20%" class="text-right">
            Date Signed (Weekly repayment feq)
          </th>
          <th class="text-right">Reason</th>
          <th class="text-right">Approved</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(loan, i) in loans" :key="i">
          <td class="text-left">{{ loan.purpose }}</td>
          <td class="text-right">{{ loan.amountRequired }} $$</td>
          <td class="text-right">{{ loan.loanTerm }}</td>
          <td class="text-right">
            {{ renderDate(loan.dateSigned, "MM/dd/yyyy HH:MM") }}
          </td>
          <td class="text-right">{{ loan.reason }}</td>
          <td class="text-center">
            <q-icon
              :name="loan.approved ? 'checked' : 'help'"
              :class="loan.approved ? 'text-primary' : 'text-orange'"
              style="font-size: 2em"
              />
          </td>
          <td class="text-right">
            <div class="row" v-if="!is_admin">
              <div v-if="!loan.repaid">
                <q-btn
                  outline
                  color="warning"
                  label="Repay"
                  no-caps
                  :disable="!loan.approved || !checkweeklyRepaid(loan.dateSigned)"
                  @click="updateRepay(loan.id)"
                />

                <q-tooltip content-class="bg-accent" v-if="!checkweeklyRepaid(loan.dateSigned)">
                  It'll available in your weekly repay from your date
                  signed.
                </q-tooltip
                >
              </div>
              <q-btn
                flat
                dense
                color="primary"
                label="Repaid"
                icon="paid"
                no-caps
                v-else
              />
            </div>
            <div class="admin_action" v-else>
              <q-btn
                color="primary"
                label="Approve"
                @click="approveLoan(loan.id)"
                v-if="!loan.approved"
                no-caps
              />
            </div>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import format from "date-fns/format"
import addDays from "date-fns/addDays"

import FormCreate from "@/components/Credit/_Form.vue"
import { RepositoryFactory } from "@/repositories/RepositoryFactory"

const LoansRepository = RepositoryFactory.get("loans")

export default {
  components: { FormCreate },
  data() {
    return {
      is_admin: false,
      cardOpened: { open: false },
      loans: [],
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    approveLoan(id) {
      LoansRepository.updateLoan(id, { approved: true }).then(() => {
        this.fetch()
      })
    },

    checkweeklyRepaid(dateSigned) {
      let nextSevenDay = addDays(new Date(dateSigned), 7)
      return new Date() > nextSevenDay
    },
    renderDate(ISOdateString, str_type) {
      return format(new Date(ISOdateString), str_type)
    },

    createLoan(payload) {
      LoansRepository.createLoan(payload).then(() => {
        this.fetch()
      })
    },
    updateRepay(id) {
      LoansRepository.updateLoan(id, { repaid: true }).then(() => {
        this.fetch()
      })
    },
    async fetch() {
      const { data } = await LoansRepository.get()
      this.loans = data
    },
  },
}
</script>