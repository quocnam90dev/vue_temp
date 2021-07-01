<template>
  <div class="q-pa-md">
    <q-dialog v-model="cardOpened.open" no-backdrop-dismiss>
      <q-card class="my-card">
        <q-card-section class="row items-center q-pb-none">
          <div class="col text-h6 ellipsis">Create Loan Detail</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <div class="q-gutter-y-md column" style="width: 500px">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                outlined
                v-model="loan.purpose"
                label="Purpose of Loan"
                stack-label
                :rules="[(val) => !!val || 'Field is required']"
              />
              <q-input
                outlined
                v-model.number="loan.amount"
                type="number"
                label="Amount "
                stack-label
                :rules="[(val) => !!val || 'Field is required']"
              />
              <q-select
                outlined
                stack-label
                v-model="loan.loan_term"
                :options="[
                  '1 years',
                  '2 years',
                  '3 years',
                  '4 years',
                  '5 years',
                  '6 years',
                  'Other',
                ]"
                label="Loan term"
                :rules="[(val) => !!val || 'Field is required']"
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
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
const LOAN_PARAMS = {
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
    onReset() {
      this.loan = { ...LOAN_PARAMS }
    },

    onSubmit() {
      if (
        this.loan.purpose &&
        this.loan.amount &&
        this.loan.loan_term &&
        this.loan.date_signed
      ) {
        this.$emit("createLoan", this.loan)
        this.onReset()
        this.cardOpened.open = false
      } else {
        return false
      }
    },
  },
}
</script>
