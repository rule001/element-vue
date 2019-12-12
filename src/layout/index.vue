<template>
    <div class="wrapper" >
        <m-header></m-header>
        <div class="wrapper_con">
            <side-bar></side-bar>
            <page-main></page-main>
        </div>
    </div>
</template>
<script>
import SideBar from './components/sideBar'
import MHeader from './components/header'
// import NotificatBar from '@/components/NotificatBar'
import PageMain from './components/PageMain'
// import { mapGetters } from 'vuex'
// import driver from '@/mixins/useDriver'
export default {
  name: 'layout',
  components: {
    SideBar,
    MHeader,
    PageMain,
    // NotificatBar,
  }
}
</script>