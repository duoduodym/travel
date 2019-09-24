<template>
	<div class="banner">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide v-for="item in bannerList" :key="item.id">
				<img
					class="sImg"
					:src="item.imgUrl"
				/>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
export default {
	props:{
		bannerList:Array
	},
	data() {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				}
			}
		}
	},
	components: {}
}
</script>

<style scoped lang="less">

.banner {
    /deep/.swiper-pagination-bullet-active{
    background: #fff;
    }
	.sImg {
		width: 100%;
	}
}
</style>
