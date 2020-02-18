<template>
  <div class="course" >
    <component @click="setCourse" :is="componentId"></component>
  </div>
</template>

<script>
import courseHome from "@/views/course/courseHome.vue";
import courseSuspension from "@/views/course/courseSuspension.vue";
import courseHomework from "@/views/course/courseHomework.vue";

export default {
  data: function() {
    return {
      componentId: "courseHome"
    };
  },
  methods: {
    setCourse(data) {
      this.componentId = data;
    }
  },
  components: {
    courseHome,
    courseSuspension,
    courseHomework
  }
};
</script>

<style lang="scss" scoped>
.course {
  width: 92%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 15px;
}
</style>