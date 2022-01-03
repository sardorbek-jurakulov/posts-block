<template>
  <div>
    <app-the-header @sidenavToggle="displaySidenav = !displaySidenav"></app-the-header>
    <app-the-sidenav 
      :show="displaySidenav"
      @close="displaySidenav = false"
    ></app-the-sidenav>
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';

export default {
  data() {
    return  {
      displaySidenav: false,
    }
  },
  components: {
    appTheHeader: TheHeader,
    appTheSidenav: TheSidenav,
  },
}
</script>


<style>
  html {
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
  }
</style>