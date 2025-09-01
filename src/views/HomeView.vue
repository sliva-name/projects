<template>
  <div class="bg-white">
    <ResumeHeader />
    <AboutSection id="about" />
    <ExperienceSection id="experience" />
    <EducationSection id="education" />
    <SkillsSection id="skills" />
    <ProjectsSection id="projects" />
  </div>
</template>

<script setup>
import ResumeHeader from '../components/ResumeHeader.vue'
import AboutSection from '../components/AboutSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import EducationSection from '../components/EducationSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
</script>
 