<template>
  <q-layout view="lHh Lpr lFf">
    <!-- lHh Lpr lFf -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-secondary text-white"
      side="left"
      :width="340"
    >
      <UiSideBar />
    </q-drawer>

    <q-page-container>
      <UiContent />
    </q-page-container>
    <UiFooterMobile />
  </q-layout>
</template>

<script>
import UiContent from "./components/UiContent.vue";
import UiSideBar from "./components/UiSideBar.vue";
import UiFooterMobile from "./components/UiFooterMobile.vue";

export default {
  components: {
    UiSideBar,
    UiContent,
    UiFooterMobile,
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>

<style>
</style>
