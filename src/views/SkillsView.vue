<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            ← Назад
          </router-link>
          <div class="text-xl font-bold text-gray-900">Навыки</div>
          <div></div>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <div class="pt-20 pb-20">
      <SkillsSection />
    </div>
  </div>
</template>

<script setup>
import SkillsSection from '../components/SkillsSection.vue'
</script>
