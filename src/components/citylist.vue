<template>
    <div class="city-list">
        <div class="area">
            <div class="title">当前位置</div>
        </div>
        <div class="area">
            <div class="title">热门城市</div>
        </div>
        <div class="area">
            <div class="title">A</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    }
};
</script>

<style scoped lang="less">
    .city-list{
        .title{
            line-height: .44rem;
            background: #eee;
            color: #666;
            padding-left: .2rem;
            border-top:1px solid #ccc;
            border-bottom:1px solid #ccc;
        }
    }
</style>
