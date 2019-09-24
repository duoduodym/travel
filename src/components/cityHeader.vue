<template>
	<div class="nav">
		<router-link to="/">
			<div class="navLeft">
				<span class="iconfont icon-right1 fc-f"></span>
			</div>
		</router-link>
		<span class="text fc-f">选择城市</span>
	</div>
</template>

<script>
export default {}
</script>
<style scoped lang="less">
@import url('~@/assets/css/variable.less');
.nav {
	position: relative;
	height: 0.86rem;
	background: @bgColor;
	text-align: center;
	line-height: 0.86rem;
	font-size: 0.4rem;
	.navLeft {
		position: absolute;
		top: 0;
		left: 0;
		width: 0.84rem;
		flex: 0 0 0.84rem;
		text-align: center;
		.icon-right1 {
			font-size: 0.4rem;
		}
	}
}
</style>
