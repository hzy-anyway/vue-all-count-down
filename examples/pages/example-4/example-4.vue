<template>
	<div class="example-4">
		<p>Example 4:the usage of prop 'valueRender'</p>
		<div v-if="show" class="text-content">
			<all-count-down name="Example-4-No-1" part="day" :valueRender="ValueRenderExample" />
			:<all-count-down name="Example-4-No-1" part="hour" :valueRender="ValueRenderExample" />
			:<all-count-down name="Example-4-No-1" part="minute" :minutes="1" :valueRender="ValueRenderExample" />
			:<all-count-down name="Example-4-No-1" part="second" :seconds="5" :valueRender="ValueRenderExample" />
		</div>
		<div class="button-sp-area">
			<button :disabled="show" @click="buttonOneOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-one">start</button>
			<button :disabled="!show" @click="buttonTwoOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-two">stop</button>
		</div>
	</div>
</template>

<script>
	import ValueRenderExample from "../../components/value-render-example/value-render-example.vue";

	export default {
		data() {
			return {
				show: false,
				ValueRenderExample:ValueRenderExample
			}
		},
		methods: {
			buttonOneOnClick() {
				this.show = true;
			},
			buttonTwoOnClick() {
				this.show = false;
			}
		}
	}
</script>

<style lang="scss">
	.example-4 {
		margin-top: 40px;
		.text-content {
			text-align: center;
			margin-top: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.button-one,
		.button-two {
			margin-top: 20px;
		}
		.button-sp-area {
			margin: 0 auto;
			margin-top: 60px;
			width: 60%;
		}
	}
</style>
