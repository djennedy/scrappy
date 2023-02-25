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
      loadingText:
        "Loading...",
    };
  },
};
</script>

<template>
  <div class="mt-[24px] space-y-[35.57px]">
    <CourseParagraph
      v-if="loading || currentCourse.calendarDescription === undefined"
      header="Calendar Description"
      :rawHtml="loadingText"
    />
    <CourseParagraph
      v-else
      header="Calendar Description"
      :rawHtml="currentCourse.calendarDescription"
    />
    <CourseParagraph
      v-if="loading || currentCourse.prerequisites === undefined"
      header="Pre-requisites"
      :rawHtml="loadingText"
    />
    <CourseParagraph
      v-else
      header="Pre-requisites"
      :rawHtml="currentCourse.prerequisites"
    />
    <div v-if="currentCourse.sectionSpecificInfo !== undefined && !loading">
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
            <p
              v-else
              class="bg-[#E9E9E9] p-12 flex flex-row justify-center text-[18px] leading-[115%] text-[#616161] font-normal"
            >
              Course details not available
            </p>
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
