<template>
	<div class="example-1">
		<p>Example 1:the basic usage</p>
		<div v-if="show" class="text-content">
			<all-count-down name="Example-1-No-1" :seconds="10" :countDownStyle="count_down_style" :timesUpHandler="timesUpHandler" /> seconds left !!
		</div>
		<div class="button-sp-area">
			<button :disabled="show" @click="buttonOneOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-one">start</button>
			<button :disabled="!show" @click="buttonTwoOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-two">stop</button>
			<button :disabled="!show" @click="buttonThreeOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-three">pause</button>
			<button :disabled="!show" @click="buttonFourOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-four">resume</button>
			<button :disabled="!show" @click="buttonFiveOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-five">start at 120s</button>
		</div>
		<b-modal v-model="show_modal">
			<div slot="default">
				Time's up !!!
			</div>
			<div slot="modal-footer">
				<button @click="show_modal=false;" type="button" class="btn btn-primary">OK</button>
			</div>
		</b-modal>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { BModal } from 'bootstrap-vue';

	export default {
		name:"example-1",
		data() {
			return {
				show: false,
				count_down_style: {
					"font-size": "60px",
					"color": "red"
				},
				show_modal:false
			}
		},
		components: {
			'b-modal': BModal,
		},
		methods: {
			buttonOneOnClick() {
				this.show = true;
			},
			buttonTwoOnClick() {
				this.show = false;
			},
			buttonThreeOnClick() {
				Vue.AllCountDown.stop("Example-1-No-1");
			},
			buttonFourOnClick() {
				Vue.AllCountDown.start("Example-1-No-1");
			},
			buttonFiveOnClick() {
				Vue.AllCountDown.start("Example-1-No-1",{seconds:120});
			},
			timesUpHandler() {
				this.show_modal=true;
			}
		}
	}
</script>

<style lang="scss">
	.example-1 {
		margin-top: 40px;
		.text-content {
			text-align: center;
			margin-top: 40px;
		}
		.button-one,
		.button-two,
		.button-three,
		.button-four,
		.button-five {
			margin-top: 20px;
		}
		.button-sp-area {
			margin: 0 auto;
			margin-top: 60px;
			width: 60%;
		}
	}
</style>
