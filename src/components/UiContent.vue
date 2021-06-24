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
        <q-option-group
          v-model="panel"
          inline
          :options="[
            { label: 'Mails', value: 'mails' },
            { label: 'Alarms', value: 'alarms' },
            { label: 'Movies', value: 'movies' },
          ]"
        />
        <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      panel: 'mails'
    }
  }
}
</script>