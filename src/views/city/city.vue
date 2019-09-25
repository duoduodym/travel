<template>
	<div class="city">
		<v-header ref="header" id="header"/>
		<v-search id="search"/>
		<v-cityList :hotCities="hotCities" :cities="cities" :currentKey="currentKey"/>
        <v-alphabet :cities="cities" @scrollByLetter="scrollByLetter" />
	</div>
</template>

<script>
import cityHeader from '@/components/cityHeader'
import citySearch from '@/components/citySearch'
import citylist from '@/components/citylist'
import Alphabet from '@/components/Alphabet'
export default {
	components: {
		'v-header': cityHeader,
		'v-search': citySearch,
        'v-cityList': citylist,
        'v-alphabet':Alphabet
	},
	data() {
		return {
            hotCities:[],
            cities:{},
            currentKey:''
        }
	},
	methods: {
		getCities() {
			this.$http.get('/api/cities').then(res => {
                if(res.data.hotCities) this.hotCities = res.data.hotCities
                if(res.data.cities) this.cities = res.data.cities
            })
        },
        scrollByLetter(key){
           this.currentKey = key
        }
    },
    created(){
        this.getCities()
    }
}
</script>

<style scoped lang="less">
</style>

