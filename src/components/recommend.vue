<template>
	<div class="recommend">
		<div class="rec-title">热销推荐</div>
		<div class="item-wrap" v-for="item in recommendList" :key="item.id">
			<img :src="item.imgUrl" class="item-img"/>
			<div class="item-info">
				<p class="item-title ellipsis">{{item.title}}</p>
				<p class="item-desc ellipsis">{{item.desc}}</p>
                <button class="item-btn">查看详情</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		recommendList: Array
	},
	data() {
		return {}
	}
}
</script>
<style lang="less" scoped>
.recommend {
	.rec-title {
		height: 0.8rem;
		line-height: 0.8rem;
		text-indent: 0.2rem;
		background: #eee;
        margin-top: 0.2rem;
        font-weight: bold;
    }
    .item-wrap{
        height:1.9rem;
        display: flex;
        align-items: center;
        .item-img{
            width: 1.7rem;
            height:1.7rem;
            padding: .1rem;
        }
        .item-info{
            flex:1;
            min-width: 0;
            .item-title{
                line-height: .54rem;
                font-size: .32rem;
              
            }
            .item-desc{
                line-height: .4rem;
                color: #ccc;
            }
            .item-btn{
                background: #ff9300;
                color: #fff;
                padding: 0 .2rem;
                border-radius: .04rem;
                margin-top: .2rem;
            }
        }
    }
}
</style>
