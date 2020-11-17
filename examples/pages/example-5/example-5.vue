<template>
	<div class="example-5">
		<p>Example 5:being a timer invisibly</p>
		<div class="no-1">
			<span>A modal will popup in 5 seconds</span>
		</div>
		<div class="no-2">
			<span>Color switcher：a 'two seconds' interval</span>
			<div class="block-2" :style="block_2_style">
				
			</div>
		</div>
		<div class="no-3">
			<span>Color switcher：an 'one minute' interval</span>
			<div class="block-3" :style="block_3_style">
				
			</div>
		</div>
		<div class="no-4">
			<span>Color switcher：a 'tenth of a second' interval</span>
			<div class="block-4" :style="block_4_style">
				
			</div>
		</div>
		<b-modal v-model="show_modal">
			<div slot="default">
				{{popup_content}}
			</div>
			<div slot="modal-footer">
				<button @click="show_modal=false;" type="button" class="btn btn-primary">OK</button>
			</div>
		</b-modal>
		<!-- timer: time's up in 5 seconds,not circular,the same as function 'setTimeout()' -->
		<all-count-down v-if="run" name="Example-5-No-1" :visible="false" :seconds="5" :timesUpHandler="timesUpHandler_1" />
		<!-- timer: set a 'two seconds' interval -->
		<all-count-down v-if="run" name="Example-5-No-2" :visible="false" :seconds="2" :circular="true" :timesUpHandler="timesUpHandler_2" />
		<!-- timer: set an 'one minute' interval -->
		<all-count-down v-if="run" name="Example-5-No-3" :visible="false" :minutes="1" :circular="true" :timesUpHandler="timesUpHandler_3" />
		<!-- timer: set a 'tenth of a second' interval -->
		<all-count-down v-if="run" name="Example-5-No-4" :visible="false" :tenths="1" :circular="true" :timesUpHandler="timesUpHandler_4" />
	</div>
</template>

<script>
	import { BModal } from 'bootstrap-vue';

	export default {
		data() {
			return {
				run: true,
				popup_content:"5 seconds you have been here !!",
				block_2_style:{
					"display":"block",
					"width":"100px",
					"height":"100px",
					"background-color":"red"
				},
				block_3_style:{
					"display":"block",
					"width":"100px",
					"height":"100px",
					"background-color":"red"
				},
				block_4_style:{
					"display":"block",
					"width":"100px",
					"height":"100px",
					"background-color":"red"
				},
				show_modal:false
			}
		},
		components: {
			'b-modal': BModal,
		},
		methods: {
			timesUpHandler_1() {
				this.show_modal=true;
			},
			timesUpHandler_2() {
				let style_new=Object.create(this.block_2_style);
				if (style_new["background-color"]==="red") {
					style_new["background-color"]="green";
				} else {
					style_new["background-color"]="red";
				}
				this.block_2_style=style_new;
			},
			timesUpHandler_3() {
				let style_new=Object.create(this.block_3_style);
				if (style_new["background-color"]==="red") {
					style_new["background-color"]="green";
				} else {
					style_new["background-color"]="red";
				}
				this.block_3_style=style_new;
			},
			timesUpHandler_4() {
				let style_new=Object.create(this.block_4_style);
				if (style_new["background-color"]==="red") {
					style_new["background-color"]="green";
				} else {
					style_new["background-color"]="red";
				}
				this.block_4_style=style_new;
			}
		}
	}
</script>

<style lang="scss">
	.example-5 {
		margin-top: 40px;
		.no-1 {
			margin-top: 30px;
			display: flex;
			justify-content: center;
		}
		.no-2,.no-3,.no-4 {
			margin-top: 30px;
			display: flex;
			justify-content: center;
			span {
				padding-top: 20px;
			}
		}
	}
</style>
