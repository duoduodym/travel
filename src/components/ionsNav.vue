<template>
	<div class="ionsNav">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide v-for="(item,index) in pages" :key="index">
				<div class="itemList">
					<div class="iconWrap" v-for="icon in item" :key="icon.id">
						<div class="icon-img">
							<img class="icon-img-content" :src="icon.imgUrl" />
						</div>
						<p class="icon-desc">{{icon.desc}}</p>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
export default {
	props: {
		iconsList: Array
	},
	data() {
		return {
			swiperOption: {}
		}
	},
	computed: {
		pages() {
			const pages = []
			this.iconsList.forEach((val, index) => {
				const page = Math.floor(index / 8)
				if (!pages[page]) pages[page] = []
				pages[page].push(val)
			})
			return pages
		}
	}
}
</script>

<style scoped lang="less">
.ionsNav {
	margin-top: 0.1rem;
	/deep/.swiper-container {
		width: 100%;
		height: 0;
		overflow: hidden;
		padding-bottom: 50%;
		.iconWrap {
			position: relative;
			float: left;
			overflow: hidden;
			width: 25%;
			height: 0;
			padding-bottom: 25%;
			.icon-img {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0.44rem;
				box-sizing: border-box;
				padding: 0.1rem;
				.icon-img-content {
					display: block;
					margin: 0 auto;
					height: 100%;
				}
			}
			.icon-desc {
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				height: 0.44rem;
				line-height: 0.44rem;
				text-align: center;
				color: #333;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
}
</style>
