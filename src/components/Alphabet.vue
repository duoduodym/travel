<template>
	<ul class="list">
		<li
			class="item"
			v-for="(item,key) in cities"
			:key="key"
			@click="scrollByLetter(key)"
			@touchstart="onTouchStart"
			@touchmove="onTouchMove"
			@touchend="onTouchEnd"
			:ref="key"
		>{{key}}</li>
	</ul>
</template>

<script>
import { throttle } from '@/utils/util'
const handle1 = throttle()
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object
	},
	data() {
		return {
			touchState: false,
			startY: 0,
			lH: 0,
			h1: 0
		}
	},
	computed: {
		letters() {
			const list = []
			for (const key in this.cities) {
				list.push(key)
			}
			return list
		}
	},
	updated() {
		this.startY = this.$refs['A'][0].offsetTop
		this.lH = this.$refs['A'][0].offsetHeight
		this.h1 =
			document.getElementById('header').offsetHeight +
			document.getElementById('search').offsetHeight
	},
	methods: {
		scrollByLetter(key) {
			this.$emit('scrollByLetter', key)
		},
		onTouchStart() {
			this.touchState = true
		},
		handleTouchMove(e) {
			const t2 = e.touches[0].clientY
			const index = Math.floor((t2 - this.startY - this.h1) / this.lH)
			if (index >= 0 && index <= this.letters.length) {
				this.$emit('scrollByLetter', this.letters[index])
			}
		},

		onTouchMove(e) {
			if (this.touchState) {
				this.handleTouchMove(e)
			}
		},
		onTouchEnd() {
			this.touchState = false
		}
	},
	created() {
		this.handleTouchMove = throttle(this.handleTouchMove, 20)
	}
}
</script>

<style lang="less" scoped>
@import '~@/assets/css/variable.less';
.list {
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	top: 1.58rem;
	right: 0;
	bottom: 0;
	width: 0.4rem;
	.item {
		line-height: 0.4rem;
		text-align: center;
		color: @bgColor;
	}
}
</style>
