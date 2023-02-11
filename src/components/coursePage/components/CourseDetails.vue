<script>
import CourseParagraph from "./CourseParagraph.vue";
export default {
  props: {
    currentCourse: Object,
    loading: Boolean,
  },
  components: {
    CourseParagraph,
  },
  data() {
    return {
      section: 0,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper ullamcorper iaculis. Morbi at quam et eros tempor pellentesque. Donec porttitor, leo ut porttitor interdum, tortor ex tincidunt justo, at malesuada felis dolor vitae nulla. Mauris mauris sem, posuere eu sollicitudin a, tempus pulvinar eros. Proin sed ligula eu nunc viverra fermentum sed suscipit urna. Nullam condimentum luctus ligula rhoncus hendrerit. Sed nulla sem, volutpat et finibus ut, scelerisque ac urna. Cras hendrerit a elit non ultricies. Aliquam in eros nisi.",
    };
  },
};
</script>

<template>
  <div class="mt-[24px] space-y-[35.57px]">
    <CourseParagraph
      v-if="loading"
      header="Calendar Description"
      :rawHtml="lorem"
    />
    <CourseParagraph
      v-else
      header="Calendar Description"
      :rawHtml="currentCourse.calendarDescription"
    />
    <CourseParagraph v-if="loading" header="Pre-requisites" :rawHtml="lorem" />
    <CourseParagraph
      v-else
      header="Pre-requisites"
      :rawHtml="currentCourse.prerequisites"
    />
    <div v-if="currentCourse">
      <v-tabs v-model="section" color="#D3001F" class="rounded-lg">
        <v-tab
          class="ma-0 pa-0 w-[38px]"
          v-for="section in currentCourse.sectionSpecificInfo"
          :key="section.courseSection"
        >
          <div class="text-[16px] leading-[115%]">
            {{ section.courseSection }}
          </div>
        </v-tab>
      </v-tabs>

      <v-window v-model="section" class="h-[750px]">
        <v-window-item
          v-for="section in currentCourse.sectionSpecificInfo"
          :key="section.courseSection"
        >
          <div class="space-y-[35.57px]">
            <CourseParagraph
              v-if="section.courseDetail"
              header="Course Details"
              :rawHtml="section.courseDetail"
            />
            <CourseParagraph
              v-if="section.educationalGoals"
              header="Educational Goals"
              :rawHtml="section.educationalGoals"
            />
            <CourseParagraph
              v-if="section.materialSupplies"
              header="Materials + Supplies"
              :rawHtml="section.materialSupplies"
            />
            <CourseParagraph
              v-if="section.gradingNotes"
              header="Grading"
              :rawHtml="section.gradingNotes"
            />
          </div>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>
