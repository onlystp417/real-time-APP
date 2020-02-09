<template>
  <div class="mission-instruction mission-instruction-card">
    <div class="card">
      <h3>任務三</h3>
      <div>
        <p>1.感受到振動後拿起手機</p>
        <p>
          2.回答第二題，選擇B選項
          <br />3.說出答題是否正確
        </p>
        <p>4.查看本課程的出席率</p>
        <p>
          5.查看本課程的「12/3停課一周」
          <br />
          <span></span>公告
        </p>
      </div>
    </div>
    <buttonPrimarySmall>開始</buttonPrimarySmall>
  </div>
</template>

<script>
import buttonPrimarySmall from "@/components/buttonPrimarySmall.vue";
export default {
  components: {
    buttonPrimarySmall
  }
};
</script>

<style lang="scss" scoped>
.mission-instruction {
  span {
    padding: 7px;
  }
}
</style>