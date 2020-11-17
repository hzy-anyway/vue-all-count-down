<template>
	<div class="example-2">
		<p>Example 2:start several countdowns at the same time</p>
		<div v-if="show" class="text-content">
			<all-count-down name="Example-2-No-1" part="day" :seconds="5*24*60*60" :timesUpHandler="timesUpHandler" />
			:<all-count-down name="Example-2-No-1" part="hour" :countDownStyle="count_down_style_1" />
			:<all-count-down name="Example-2-No-1" part="minute" />
			:<all-count-down name="Example-2-No-1" part="second" />
		</div>
		<div v-if="show" class="text-content">
			<all-count-down name="Example-2-No-2" part="day" :days="3" :timesUpHandler="timesUpHandler" />
			:<all-count-down name="Example-2-No-2" part="hour" :hours="1" />
			:<all-count-down name="Example-2-No-2" part="minute" :countDownStyle="count_down_style_2" />
			:<all-count-down name="Example-2-No-2" part="second" />
		</div>
		<div class="button-sp-area">
			<button :disabled="show" @click="buttonOneOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-one">start</button>
			<button :disabled="!show" @click="buttonTwoOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-two">stop</button>
			<button :disabled="!show" @click="buttonThreeOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-three">pause the first</button>
			<button :disabled="!show" @click="buttonFourOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-four">pause the second</button>
			<button :disabled="!show" @click="buttonFiveOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-five">resume the first</button>
			<button :disabled="!show" @click="buttonSixOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-six">resume the second</button>
			<button :disabled="!show" @click="buttonSevenOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-seven">start both at 120s</button>
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
		data() {
			return {
				show: false,
				count_down_style_1: {
					"font-size": "60px",
					"color": "red"
				},
				count_down_style_2: {
					"font-size": "20px",
					"color": "green"
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
				Vue.AllCountDown.stop("Example-2-No-1");
			},
			buttonFourOnClick() {
				Vue.AllCountDown.stop("Example-2-No-2");
			},
			buttonFiveOnClick() {
				Vue.AllCountDown.start("Example-2-No-1");
			},
			buttonSixOnClick() {
				Vue.AllCountDown.start("Example-2-No-2");
			},
			buttonSevenOnClick() {
				Vue.AllCountDown.start("Example-2-No-1",{seconds:120});
				Vue.AllCountDown.start("Example-2-No-2",{seconds:120});
			},
			timesUpHandler() {
				this.show_modal=true;
			}
		}
	}
</script>

<style lang="scss">
	.example-2 {
		margin-top: 40px;
		.text-content {
			text-align: center;
			margin-top: 40px;
		}
		.button-one,
		.button-two,
		.button-three,
		.button-four,
		.button-five,
		.button-six,
		.button-seven {
			margin-top: 20px;
		}
		.button-sp-area {
			margin: 0 auto;
			margin-top: 60px;
			width: 60%;
		}
	}
</style>
