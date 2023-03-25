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
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper ullamcorper iaculis. Morbi at quam et eros tempor pellentesque. Donec porttitor, leo ut porttitor interdum, tortor ex tincidunt justo, at malesuada felis dolor vitae nulla. Mauris mauris sem, posuere eu sollicitudin a, tempus pulvinar eros. Proin sed ligula eu nunc viverra fermentum sed suscipit urna. Nullam condimentum luctus ligula rhoncus hendrerit. Sed nulla sem, volutpat et finibus ut, scelerisque ac urna. Cras hendrerit a elit non ultricies. Aliquam in eros nisi.",
    };
  },
};
</script>

<template>
  <div class="mt-[24px] space-y-[35.57px]">
    <CourseParagraph
      header="Calendar Description"
      :rawHtml="currentCourse.calendarDescription || lorem"
    />
    <CourseParagraph
      header="Pre-requisites"
      :rawHtml="currentCourse.prerequisites || lorem"
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
            <!-- <p>
              SFU Outline:
              <a :href="section.outlineLink" target="_blank">{{
                section.outlineLink
              }}</a>
            </p> -->
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
