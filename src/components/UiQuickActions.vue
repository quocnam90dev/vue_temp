<template>
  <div class="quick__actions">
    <div class="quick__actions--list">
      <q-btn
        no-caps
        flat
        :icon="`img:${item.icon}`"
        :label="item.name"
        stack
        v-for="(item, i) in list"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "Freeze card", icon: this.$func.getStaticImage("qa_fc.svg") },
        {
          name: "Set spend limit",
          icon: this.$func.getStaticImage("qa_ssl.svg"),
        },
        { name: "Add to GPay", icon: this.$func.getStaticImage("qa_gp.svg") },
        { name: "Replace card", icon: this.$func.getStaticImage("qa_rc.svg") },
        { name: "Cancel card", icon: this.$func.getStaticImage("qa_dc.svg") },
      ],
    };
  },
};
</script>
<style lang="sass">
.quick__actions
  margin-top: 32px
  background: rgba(237, 243, 255, 1)
  border-radius: 20px
  &--list
    display: flex
    align-items: flex-start
    padding: 20px 30px
  button
    width: 20%
    color: rgba(12, 54, 90, 1)
    font-size: 13px
  img
    width: 32px
    height: 32px
  .block
    line-height: 1.5
    margin-top: 10px
</style>