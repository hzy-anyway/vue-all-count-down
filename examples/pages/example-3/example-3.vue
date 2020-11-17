<template>
	<div class="example-3">
		<p>Example 3:the usage of prop 'zeroHandler'</p>
		<div v-if="show" class="text-content">
			<all-count-down name="Example-3-No-1" part="day" />
			:<all-count-down name="Example-3-No-1" part="hour" />
			:<all-count-down name="Example-3-No-1" part="minute" :minutes="1" :zeroHandler="minuteZeroHandler" />
			:<all-count-down name="Example-3-No-1" part="second" :seconds="5" :zeroHandler="secondZeroHandler" />
		</div>
		<div class="button-sp-area">
			<button :disabled="show" @click="buttonOneOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-one">start</button>
			<button :disabled="!show" @click="buttonTwoOnClick" type="button" class="btn btn-outline-primary btn-lg btn-block button-two">stop</button>
		</div>
		<b-modal v-model="show_modal">
			<div slot="default">
				{{popup_content}}
			</div>
			<div slot="modal-footer">
				<button @click="show_modal=false;" type="button" class="btn btn-primary">OK</button>
			</div>
		</b-modal>
	</div>
</template>

<script>
	import { BModal } from 'bootstrap-vue';

	export default {
		data() {
			return {
				show: false,
				popup_content:"Time's up !!!",
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
			minuteZeroHandler() {
				this.popup_content="Part 'minute' comes to 0";
				console.log(this.popup_content);
				this.show_modal=true;
			},
			secondZeroHandler() {
				this.popup_content="Part 'second' comes to 0";
				console.log(this.popup_content);
				this.show_modal=true;
			}
		}
	}
</script>

<style lang="scss">
	.example-3 {
		margin-top: 40px;
		.text-content {
			text-align: center;
			margin-top: 40px;
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
