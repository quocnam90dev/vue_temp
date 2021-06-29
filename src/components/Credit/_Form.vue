<template>
  <div class="q-pa-md">
    <q-dialog v-model="cardOpened.open">
      <q-card class="my-card">
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Create Loan Detail</div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="q-gutter-y-md column" style="width: 500px">
            <q-input
              outlined
              v-model="loan.full_name"
              label="Full name"
              stack-label
            />
            <q-input
              outlined
              v-model="loan.purpose"
              label="Purpose of Loan"
              stack-label
            />
            <q-input
              outlined
              v-model="loan.amount"
              label="Amount "
              stack-label
            />
            <q-input
              outlined
              v-model="loan.loan_term"
              label="Loan term"
              stack-label
            />
            <q-input
              outlined
              stack-label
              v-model="loan.date_signed"
              mask="date"
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="loan.date_signed"
                      :today-btn="true"
                      :minimal="true"
                    >
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <q-input
              v-model="loan.reason"
              outlined
              label="Reason why you are requesting for a loan"
              type="textarea"
            />
            <div>
              <q-btn
                label="Submit"
                type="submit"
                color="primary"
                @click="createLoan"
              />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
                @click="reset"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
const LOAN_PARAMS = {
  full_name: "",
  purpose: "",
  amount: "",
  loan_term: "",
  date_signed: "",
  reason: "",
}
export default {
  props: ["cardOpened"],
  data() {
    return {
      loan: { ...LOAN_PARAMS },
    }
  },
  methods: {
    reset() {
      this.loan = { ...LOAN_PARAMS }
    },
    createLoan() {
      this.cardOpened.open = false
    },
  },
}
</script>