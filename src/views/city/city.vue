<template>
    <div class="city">
       <v-header />
       <v-search />
       <v-cityList />
    </div>
</template>

<script>
import cityHeader from '@/components/cityHeader'
import citySearch from '@/components/citySearch'
import citylist from '@/components/citylist'
export default {
    components:{
        'v-header':cityHeader,
        'v-search':citySearch,
        'v-cityList':citylist
    },
    data() {
        return {
            
        };
    },
 
};
</script>

<style scoped lang="less">

</style>

