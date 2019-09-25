<template>
	<div class="city-list" ref="list">
		<div>
			<div class="area">
				<div class="title">当前位置</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item in hotCities" :key="item.id">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
				<div class="title">{{key}}</div>
				<div class="item-list">
					<div class="item" v-for="city in item" :key="city.id">{{city.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
	props: {
        hotCities:Array,
        cities:Object,
        currentKey:String
    },
	data() {
		return {
            bs:null
        }
    },
    watch:{
        currentKey(val){
            this.bs.scrollToElement(this.$refs[val][0])
        }
    },
    mounted(){
        this.bs = new Bscroll(this.$refs.list)
    }
}
</script>

<style scoped lang="less">
.city-list {
	overflow: hidden;
	position: absolute;
	top: 1.76rem;
	left: 0;
	right: 0;
	bottom: 0;
	.title {
		line-height: 0.54rem;
		background: #eee;
		color: #666;
		padding-left: 0.2rem;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	.button-list {
		overflow: hidden;
		padding: 0.1rem 0.6rem 0.1rem 0.1rem;
		.button-wrapper {
			float: left;
			width: 33.33%;
			.button {
				margin: 0.1rem;
				padding: 0.1rem 0;
				text-align: center;
				border: 0.02rem solid #ccc;
				border-radius: 0.06rem;
			}
		}
	}
	.item-list {
		.item {
			line-height: 0.76rem;
            padding-left: 0.2rem;
            border-bottom:1px solid #eee;
		}
	}
}
</style>
