<template>
    <div class="city-search">
        <input type="text" class="search-input" placeholder="输入关键字或拼音搜索城市">
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style scoped lang="less">
    @import url('~@/assets/css/variable.less');
    .city-search{
        height:.72rem;
        padding: .1rem;
        background: @bgColor;
        .search-input{
            width: 100%;
            height:.62rem;
            line-height: .62rem;
            border-radius: .06rem;
            padding-left: .1rem;
            box-sizing: border-box;
            color: #666;
        }
        ::placeholder{
            color: #999;
        }
    }
</style>
