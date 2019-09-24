<template>
	<div class="weekend">
		<div class="rec-title">周末去哪儿</div>
		<div class="item-wrap" v-for="item in weekendList" :key="item.id">
			<img :src="item.imgUrl" class="item-img"/>
			<div class="item-info">
				<p class="item-title ellipsis">{{item.title}}</p>
				<p class="item-desc ellipsis">{{item.desc}}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		weekendList: Array
	},
	data() {
		return {}
	}
}
</script>
<style lang="less" scoped>
.weekend {
	.rec-title {
		height: 0.8rem;
		line-height: 0.8rem;
		text-indent: 0.2rem;
		background: #eee;
        margin-top: 0.2rem;
        font-weight: bold;
    }
    .item-wrap{
        overflow: hidden;
        height:0;
        padding-bottom:50.9%;
        .item-img{
           width: 100%;
        }
        .item-info{
            padding: .1rem;
            min-width: 0;
            .item-title{
                line-height: .54rem;
                font-size: .32rem;
              
            }
            .item-desc{
                line-height: .4rem;
                color: #ccc;
            }
        }
    }
}
</style>
