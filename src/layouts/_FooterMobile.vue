<template>
  <q-footer bordered class="bg-white lt-md footer">
    <div class="row">
      <div class="col-12">
        <q-btn
          no-caps
          flat
          :icon="`img:${item.icon}`"
          :label="item.name"
          stack
          v-for="(item, i) in list"
          :key="i"
          :class="item.class"
        />
      </div>
    </div>
  </q-footer>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "Home",
          icon: this.$func.getStaticImage("mb_Logo.svg"),
          class: "",
        },
        {
          name: "Card",
          icon: this.$func.getStaticImage("Card.svg"),
          class: "active",
        },
        {
          name: "Payment",
          icon: this.$func.getStaticImage("mb_Payments.svg"),
          class: "",
        },
        {
          name: "Credit",
          icon: this.$func.getStaticImage("mb_Credit.svg"),
          class: "",
        },
        {
          name: "Profile",
          icon: this.$func.getStaticImage("mb_Account.svg"),
          class: "",
        },
      ],
    };
  },
};
</script>
<style lang="sass">
.footer
  img
    width: 23px
    height: 23px
  button
    width: 20%
    color: #DDDDDD
    font-size: 9px
    text-align: center
    &.active
      color: #01D167
</style>