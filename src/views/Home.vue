<template>
  <div class="home">
    <v-nav />
    <v-banner :bannerList="bannerList"/>
    <v-ionsNav :iconsList="iconsList"/>
    <v-recommend />
  </div>
</template>

<script>
import nav from '@/components/nav'
import banner from '@/components/banner'
import ionsNav from '@/components/ionsNav'
import recommend from '@/components/recommend'
export default {
  name: 'home',
  components:{
    'v-nav':nav,
    'v-banner':banner,
    'v-ionsNav':ionsNav,
    'v-recommend':recommend
  },
  data(){
    return {
      bannerList:[],
      iconsList:[]
    }
  },
  created(){
    this.$http.get('/api/index').then(res => {
      console.log(res.data)
        if(res.data.swiperList) this.bannerList = res.data.swiperList
        if(res.data.iconList) this.iconsList = res.data.iconList
        console.log(this.iconsList)
        
    })
  }
}
</script>
