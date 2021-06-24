<template>
  <q-layout view="lHh Lpr lFf">
    <!-- lHh Lpr lFf -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
    <UiSideBar />
    </q-drawer>

    <q-page-container>
      <UiContent />
    </q-page-container>
  </q-layout>
</template>

<script>
import UiContent from "./components/UiContent.vue";
import UiSideBar from "./components/UiSideBar.vue";

export default {
  components: {
    UiSideBar,
    UiContent
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
