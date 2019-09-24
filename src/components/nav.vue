<template>
	<div class="nav">
		<div class="navInput">
			<span class="iconfont icon-fangdajing"></span>
			<span>输入城市/景点进行搜索</span>
		</div>
		<router-link to="/city">
			<div class="navRight">
				<span>城市</span>
				<span class="iconfont icon-sanjiaoxing"></span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {}
</script>
<style scoped lang="less">
@import url('~@/assets/css/variable.less');
.nav {
	height: 0.86rem;
	background: @bgColor;
	display: flex;
	align-items: center;
	justify-content: space-between;
  color: #fff;
  padding-left: 0.9rem;
	.navInput {
		flex: 1;
		background: #fff;
		border-radius: 0.1rem;
		height: 0.64rem;
		color: #999;
		line-height: 0.64rem;
		padding-left: 0.1rem;
		.icon-fangdajing {
			margin-right: 0.1rem;
		}
	}
	.navRight {
		width: 1.6rem;
		flex: 0 0 1.6rem;
		color: #fff;
		text-align: center;
		.icon-sanjiaoxing {
			position: relative;
			top: -0.05rem;
			font-size: 0.1rem;
			margin-left: 0.1rem;
		}
	}
}
</style>
