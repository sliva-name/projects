<template>
  <section class="py-20 lg:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <FadeIn>
        <div class="text-center mb-16 lg:mb-24">
          <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">Обо мне</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </FadeIn>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
        <!-- About Text -->
        <div class="space-y-6">
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed text-lg">
              {{ about }}
            </p>
          </div>

          <!-- Key Points -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div class="group flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div class="flex flex-col">
                <AnimatedCounter :value="5" suffix="+" />
                <span class="text-sm text-gray-600 font-medium">лет опыта</span>
              </div>
            </div>

            <div class="group flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="flex flex-col">
                <AnimatedCounter :value="projects.length" suffix="+" />
                <span class="text-sm text-gray-600 font-medium">проектов</span>
              </div>
            </div>

            <div class="group flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div class="flex flex-col">
                <AnimatedCounter :value="education.length" suffix="+" />
                <span class="text-sm text-gray-600 font-medium">образование</span>
              </div>
            </div>

            <div class="group flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
              <div class="flex flex-col">
                <AnimatedCounter :value="languages.length" suffix="+" />
                <span class="text-sm text-gray-600 font-medium">языка</span>
              </div>
            </div>
          </div>

          <!-- Technologies -->
          <div class="mt-10">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Технологии с которыми я работаю:</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="(tech, index) in allTechnologies.slice(0, 12)"
                :key="tech"
                class="group px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-indigo-100 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-blue-200/50"
              >
                <span class="relative z-10">{{ tech }}</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Skills Overview -->
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-10 shadow-xl border border-white/50 backdrop-blur-sm">
            <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Навыки</h3>

            <div class="space-y-6">
              <div v-for="skillCategory in skills.slice(0, 2)" :key="skillCategory.category" class="space-y-4">
                <h4 class="text-lg lg:text-xl font-semibold text-gray-800 flex items-center gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {{ skillCategory.category }}
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    v-for="skill in skillCategory.items.slice(0, 4)"
                    :key="skill.name"
                    class="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div class="flex justify-between items-center mb-3">
                      <span class="text-sm font-semibold text-gray-800">{{ skill.name }}</span>
                      <span class="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{{ skill.level }}%</span>
                    </div>
                    <div class="relative">
                      <div class="w-full bg-gray-200/50 rounded-full h-3 overflow-hidden">
                        <div
                          class="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                          :style="{ width: skill.level + '%' }"
                        ></div>
                      </div>
                      <!-- Animated shine effect -->
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full h-3 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 text-center">
              <router-link
                to="/skills"
                class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Посмотреть все навыки
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume'
import FadeIn from './FadeIn.vue'
import AnimatedCounter from './AnimatedCounter.vue'

const { about, experience, projects, education, languages, skills, allTechnologies } = useResumeStore()
</script>
