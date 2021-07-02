<template>
  <q-page class="flex">
    <div class="fit row wrap wrapper">
      <div class="col-12">
        <q-card class="main__content">
          <LoanList />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import LoanList from "@/components/Credit/_LoanList.vue"
export default {
  components: { LoanList },
}
</script>