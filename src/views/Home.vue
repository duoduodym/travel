<template>
  <div class="home">
    <v-nav />
    <v-banner :bannerList="bannerList"/>
    <v-ionsNav :iconsList="iconsList"/>
    <v-recommend :recommendList="recommendList"/>
    <v-weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import nav from '@/components/nav'
import banner from '@/components/banner'
import ionsNav from '@/components/ionsNav'
import recommend from '@/components/recommend'
import weekend from '@/components/weekend'
export default {
  name: 'home',
  components:{
    'v-nav':nav,
    'v-banner':banner,
    'v-ionsNav':ionsNav,
    'v-recommend':recommend,
    'v-weekend':weekend
  },
  data(){
    return {
      bannerList:[],
      iconsList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  created(){
    this.$http.get('/api/index').then(res => {
        if(res.data.swiperList) this.bannerList = res.data.swiperList
        if(res.data.iconList) this.iconsList = res.data.iconList
        if(res.data.recommendList) this.recommendList = res.data.recommendList
        if(res.data.weekendList) this.weekendList = res.data.weekendList
    })
  }
}
</script>
