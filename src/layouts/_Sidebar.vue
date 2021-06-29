<template>
  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    content-class="bg-secondary text-white"
    side="left"
    :width="340"
  >
    <q-list>
      <q-item-label header class="sidebar--header">
        <div class="sidebar--logo">
          <img src="@/assets/Logo.svg" alt="Aspire" />
        </div>
        <p class="sidebar--slogan">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </q-item-label>
      <q-item class="sidebar--item" to="/" exact>
        <q-item-section bottom thumbnail class="q-ml-none">
          <img src="@/assets/Home.svg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Home</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="sidebar--item" to="/card" exact>
        <q-item-section bottom thumbnail class="q-ml-none">
          <img src="@/assets/Card.svg" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Cards</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="sidebar--item">
        <q-item-section bottom thumbnail class="q-ml-none">
          <img src="@/assets/Payments.svg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Payments</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="sidebar--item" to="/credit" exact>
        <q-item-section bottom thumbnail class="q-ml-none">
          <img src="@/assets/Credit.svg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Credit</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="sidebar--item">
        <q-item-section bottom thumbnail class="q-ml-none">
          <img src="@/assets/Account.svg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Settings</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  data() {
    return {
      leftDrawerOpen: false,
    }
  },
}
</script>

<style>
</style>
