<template>
  <div>
    <SideBar />
    <MainContainer />
    <FooterMobile />
  </div>
</template>

<script>
import SideBar from "./_Sidebar.vue"
import MainContainer from "./_MainContainer.vue"
import FooterMobile from "./_FooterMobile.vue"

export default {
  components: {
    SideBar,
    MainContainer,
    FooterMobile
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
