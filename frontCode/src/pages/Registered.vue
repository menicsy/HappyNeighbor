<template>
    <ul :class="$style.register">
        <li>昵称 <input type="text"/></li>
        <li>用户名 <input type="text"/></li>
        <li>密码 <input type="text"/></li>
        <li>
            <button>确定</button>
            <router-link to="/jiefang/index">返回</router-link>
        </li>
        <li style="width:100px; height:30px; padding:10px; box-sizing: border-box;">wef</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        computed: {
            
        },
        mounted () {
            
        }
    }
</script>

<style lang="scss" module>
    .register {
        min-height: 100vh;
        background: linear-gradient(#09d8af ,#9bccdb);
        padding-top: 60px; 
        text-align: center;
    }
    @mixin font-style{
		font-size: 24px;
        line-height: 1.2;
	}
    .register li {
        margin-bottom: 30px;
        @include font-style;
        color: #fff;
    }
    .register input {
        @include font-style;
        color: #1a58df;
    }
    .register button, .register a {
        width: 120px;
		line-height: 2.4;
		border: none;
		color: #fff;
		font-size: 18px;
		border-radius: 20px;
		background: linear-gradient(rgb(218, 62, 96), rgb(200, 169, 202));
		cursor: pointer;
    }
    .register a {
        display: inline-block;
        margin-left: 20px;
		background: linear-gradient(rgb(209, 223, 214), rgb(177, 187, 183));
    }
</style>