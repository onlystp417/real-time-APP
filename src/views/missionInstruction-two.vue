<template>
  <div class="mission-instruction mission-instruction-card">
    <div class="card">
      <h3>任務二</h3>
      <div>
        <p>1.感受到振動後拿起手機</p>
        <p>
          2.回答第一題，選擇A選項
          <br />3.說出答題是否正確
        </p>
        <p>
          4.找到討論區的「邊緣運算」文章
          <br />5.在「邊緣運算」文章中
          <br />
          <span></span>新增留言「雲端運算」
        </p>
        <p>6.觀看本帳號的最近一次的點名紀錄</p>
      </div>
    </div>
    <buttonPrimary>開始</buttonPrimary>
  </div>
</template>

<script>
import buttonPrimary from "@/components/buttonPrimary.vue";
export default {
  components: {
    buttonPrimary
  }
};
</script>

<style lang="scss" scoped>
.mission-instruction {
  span {
    padding: 8px;
  }
}
</style>