<template>
  <q-page class="flex">
    <div class="fit row wrap wrapper">
      <div class="col-12 content__top">
        <div class="row">
          <div class="content__top--price col-6">
            <span class="price--label">Available balance</span>
            <span class="price--symbol">$$</span>
            <strong>3,000</strong>
          </div>
          <div class="col-6 text-right">
            <q-btn
              color="blue-10"
              icon="add_circle"
              label="New card"
              class="btn--new_card"
            />
          </div>
        </div>
      </div>
      <div class="col-12">
        <q-tabs
          v-model="tab"
          narrow-indicator
          align="left"
          class='tab__header'
        >
          <q-tab class="text-purple" name="my_debit_cards" label="My debit cards" />
          <q-tab class="text-orange" name="all_company_cards" label="All company cards" />
        </q-tabs>

         <q-card>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="my_debit_cards">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="all_company_cards">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tab: 'my_debit_cards'
    }
  }
}
</script>