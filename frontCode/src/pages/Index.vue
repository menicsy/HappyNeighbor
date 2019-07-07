<template>
	<h1 :class="$style.container">
		<nav :class="$style.title"></nav>
		<!-- 登录框 -->
		<div :class="$style.login_box">
			<p :class="$style.nick" contenteditable></p>
			<p :class="$style.password" contenteditable></p>
			<button @click="login">登陆</button>
			<router-link to="/jiefang/registered">注册</router-link>
		</div>
	</h1>
</template>

<script>
    // import axios from 'axios'
	import {getLink} from '../lib/link'

    export default {
        
        data () {
            return {
                
                
            }
        },
        methods: {
           login() {
			   
		   }
        },
        mounted () {
            
        },
        computed: {
        

        }
    }
</script>

<style lang="scss" module>
    .container {
        min-height: 100vh;
        background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            		linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            		linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
		position: relative;
    }
	.title {
		position: fixed;
		top: 20%;
		left: 50%;
		transform: translateX(-50%);
		color: rgb(71, 73, 216);
		font-size: 30px;
	}
	@mixin title-animation{
		display: inline-block;
		animation: titleAnimation 3s infinite;
	}
	.title::before {
		@include title-animation;
		content: "街";
	}
	.title::after {
		@include title-animation;
		content: "坊";
		color: #fff;
		margin-left: 40px;
	}
	@keyframes titleAnimation {
		0% {-webkit-transform:skew(20deg) rotate(0deg);} 
		50% {-webkit-transform:skew(20deg) rotate(180deg);} 
		100% {-webkit-transform:skew(20deg) rotate(360deg);} 
	}
	.login_box {
		position: absolute;
		top: 42%;
		left: 50%;
		transform: translateX(-50%);
		width: 360px;
		height: 186px;
		border-radius: 30px;
		background: linear-gradient(#80c7b9 ,#11a8d6);
		box-shadow: 2px 2px 2px rgb(41, 151, 214);
		padding: 30px 30px;
		text-align: center;
	}
	.login_box p {
		outline: none;
		font-size: 16px;
		border-radius: 6px;
		color: rgb(9, 84, 87);
		border: 1px solid #e5e5e5;
		margin-bottom: 12px;
		line-height: 1.8;
		padding: 0 14px;
	}
	.login_box p::before {
		content: "用户名";
		font-size: 20px;
		color: rgb(250, 195, 195);
		line-height: 1.4;
		float: left;
	}
	.login_box p::after {
		content: "不能超过8个字符"; 
		font-size: 14px;
		color: rgb(194, 60, 116);
		line-height: 2.2;
		float: right;
	}
	.login_box .password::before {
		content: "密码";
	}
	.login_box button, .login_box a {
		width: 100px;
		line-height: 2;
		border: none;
		color: #fff;
		font-size: 18px;
		font-weight: 600;
		border-radius: 20px;
		background: linear-gradient(rgb(31, 134, 218), rgb(216, 239, 245));
		cursor: pointer;
	}
	.login_box a {
		display: inline-block;
		margin-left: 20px;
		background: linear-gradient(rgb(7, 218, 77), rgb(200, 240, 225));
	}
</style>
