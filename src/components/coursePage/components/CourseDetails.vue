<script>
import CourseParagraph from "./CourseParagraph.vue";
import SectionLink from "./SectionLink.vue";
export default {
  props: {
    currentCourse: Object,
    loading: Boolean,
  },
  components: {
    CourseParagraph,
    SectionLink,
  },
  data() {
    return {
      section: 0,
      calendarDescriptionText:
        "Loading...",
      prereqText: "Loading...",
    };
  },
  watch: {
    loading(newVal){
      if (!newVal) {
        this.calendarDescriptionText = this.currentCourse.calendarDescription;
        this.prereqText = this.currentCourse.prerequisites;
      }
    }
  }
};
</script>

<template>
  <div class="space-y-[35.57px] mt-16">
    <CourseParagraph
      header="Calendar Description"
      :rawHtml="calendarDescriptionText"
    />
    <CourseParagraph
      header="Pre-requisites"
      :rawHtml="prereqText"
    />
    <template v-if="currentCourse.sectionSpecificInfo && !loading">
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

      <v-window v-model="section" class="min-h-[750px]">
        <v-window-item
          v-for="section in currentCourse.sectionSpecificInfo"
          :key="section.courseSection"
        >
          <div class="space-y-[35.57px]">
            <SectionLink :outlineLink="section.outlineLink" />

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
    </template>
  </div>
</template>
