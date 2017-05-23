<template>
    <ul class="pagination">
        <li v-for="num in pagingResult" @click="goto(num)" :class="[num===currentPage?'selected':'']">
            <div v-if="typeof num === 'number'">
                {{num}}
            </div>
            <div v-else>
                ...
            </div>
        </li>
    </ul>
</template>
<script>

function pagination(pageNo, pagingShowNum, totalPageNumber) {
    let offset = 0
    let size = totalPageNumber < pagingShowNum ? totalPageNumber : pagingShowNum
    let pointer = parseInt(size / 2)
    let pagingRes = []
    let start = pageNo - pointer
    let end = start + size - 1
    if (start < 1)
        offset = 1 - start
    if (end > totalPageNumber)
        offset = totalPageNumber - end
    for (let i = 0; i < size; ++i)
        pagingRes.push(start + i + offset)
    if (start + offset !== 1) {
        pagingRes.unshift('-' + size)
        pagingRes.unshift(1)
    }
    if (end + offset !== totalPageNumber) {
        pagingRes.push('+' + size)
        pagingRes.push(totalPageNumber)
    }
    return pagingRes
}

export default {
    name: 'pagination',
    props: ['size', 'total'],
    data() {
        return {
            currentPage: 1
        }
    },
    computed: {
        pagingResult() {
            return pagination(this.currentPage, this.size, this.total)
        }
    },
    methods: {
        goto(param) {
            if (typeof param === 'number') {
                this.currentPage = param
            } else {
                let t = this.currentPage + parseInt(param)
                t < 1 ? this.currentPage = 1 : this.currentPage = t
                t > this.total ? this.currentPage = this.total : this.currentPage = t
            }
            this.$emit('page-change',this.currentPage)
        }
    }
}
</script>
<style lang="less" scoped>
@import '../style/colors.less';
.pagination {
    list-style: none;
    display: flex;
    flex-direction: row;
    li {
        height:28px;
        width:28px;
        line-height:28px;
        text-align: center;
        border-top: 1px solid @DEFAULT;
        border-left: 1px solid @DEFAULT;
        border-bottom: 1px solid @DEFAULT;
        cursor:pointer;
        &:first-child {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        &:last-child {
            border-right: 1px solid @DEFAULT;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }
        &.selected{
            background: @DEFAULT;
        }
    }
}
</style>
