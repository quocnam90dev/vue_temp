<template>
  <div class="expansion__item">
    <q-list>
      <q-expansion-item
        group="somegroup"
        class="rounded-borders"
        :icon="`img:${$func.getStaticImage('Group_11889.svg')}`"
        label="Card details"
        header-class="text-secondary"
      >
        <q-card class='detail_transactions__list' style="padding: 25px">
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        group="somegroup"
        default-opened
        :icon="`img:${$func.getStaticImage('Group_11889-1.svg')}`"
        label="Recent transactions"
        header-class="text-secondary"
        class='card__transactions--outer'
      >
        <q-card class='card__transactions'>
          <q-card-section>
            <UiListTransactions />
          </q-card-section>
        </q-card>
        <div class="view__all">
          <q-btn flat no-caps label="View all card transactions" />
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
import UiListTransactions from "./UiListTransactions.vue";
export default {
  components: {
    UiListTransactions,
  },
};
</script>

<style lang="sass">
@import "@/styles/listTransactions.sass"
</style>