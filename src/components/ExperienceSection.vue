<template>
  <section class="py-20 lg:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16 lg:mb-24">
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">Опыт работы</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="relative max-w-6xl mx-auto">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 hidden lg:block transform -translate-x-1/2 z-0"></div>

        <div class="space-y-16 lg:space-y-32 relative z-10">
          <FadeIn
            v-for="(exp, index) in experience"
            :key="exp.id"
          >
            <!-- Mobile Layout -->
            <div class="block lg:hidden">
              <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <!-- Date and Location Header -->
                <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div class="text-blue-600 font-bold text-lg">{{ exp.period }}</div>
                  <div class="text-gray-600 flex items-center gap-2 text-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {{ exp.location }}
                  </div>
                </div>

                <!-- Main Content -->
                <div class="flex items-start gap-4">
                  <!-- Company Logo -->
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span class="text-white font-bold text-xl">{{ exp.company.charAt(0) }}</span>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ exp.position }}</h3>
                    <p class="text-blue-600 font-medium text-lg mb-4">{{ exp.company }}</p>

                    <!-- Description -->
                    <div class="text-gray-700 mb-6 leading-relaxed">
                      <ul class="space-y-2">
                        <li v-for="line in exp.description.trim().split('\n').filter(line => line.trim())" :key="line" class="flex items-start gap-2">
                          <span class="text-blue-500 mt-2 flex-shrink-0">•</span>
                          <span>{{ line.replace('•', '').trim() }}</span>
                        </li>
                      </ul>
                    </div>

                    <!-- Technologies -->
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="tech in exp.technologies"
                        :key="tech"
                        class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Desktop Timeline Layout -->
            <div class="hidden lg:flex relative items-center justify-center">
              <!-- Timeline Dot -->
              <div class="absolute left-1/2 w-16 h-16 bg-blue-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center transform -translate-x-1/2 z-30">
                <div class="w-7 h-7 bg-white rounded-full"></div>
              </div>

              <!-- First Card (Date for even, Main Content for odd) -->
              <div class="w-6/12 pr-8">
                <div v-if="index % 2 === 0" class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 text-right">
                  <!-- Date Card -->
                  <div class="text-blue-600 font-bold text-2xl mb-3">{{ exp.period }}</div>
                  <div class="text-gray-600 flex items-center gap-2 justify-end">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {{ exp.location }}
                  </div>
                </div>
                <div v-else class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <!-- Main Content Card -->
                  <div class="flex items-start gap-6">
                    <!-- Company Logo -->
                    <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span class="text-white font-bold text-2xl">{{ exp.company.charAt(0) }}</span>
                    </div>

                    <div class="flex-1">
                      <h3 class="text-2xl xl:text-3xl font-bold text-gray-900 mb-2">{{ exp.position }}</h3>
                      <p class="text-blue-600 font-medium text-xl mb-4">{{ exp.company }}</p>

                      <!-- Description -->
                      <div class="text-gray-700 mb-6 leading-relaxed text-lg">
                        <ul class="space-y-2">
                          <li v-for="line in exp.description.trim().split('\n').filter(line => line.trim())" :key="line" class="flex items-start gap-2">
                            <span class="text-blue-500 mt-2 flex-shrink-0">•</span>
                            <span>{{ line.replace('•', '').trim() }}</span>
                          </li>
                        </ul>
                      </div>

                      <!-- Technologies -->
                      <div class="flex flex-wrap gap-3">
                        <span
                          v-for="tech in exp.technologies"
                          :key="tech"
                          class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-base font-medium hover:bg-blue-200 transition-colors"
                        >
                          {{ tech }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Spacer for timeline line -->
              <div class="w-8 flex-shrink-0"></div>

              <!-- Second Card (Main Content for even, Date for odd) -->
              <div class="w-6/12 pl-8">
                <div v-if="index % 2 === 0" class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <!-- Main Content Card -->
                  <div class="flex items-start gap-6">
                    <!-- Company Logo -->
                    <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span class="text-white font-bold text-2xl">{{ exp.company.charAt(0) }}</span>
                    </div>

                    <div class="flex-1">
                      <h3 class="text-2xl xl:text-3xl font-bold text-gray-900 mb-2">{{ exp.position }}</h3>
                      <p class="text-blue-600 font-medium text-xl mb-4">{{ exp.company }}</p>

                      <!-- Description -->
                      <div class="text-gray-700 mb-6 leading-relaxed text-lg">
                        <ul class="space-y-2">
                          <li v-for="line in exp.description.trim().split('\n').filter(line => line.trim())" :key="line" class="flex items-start gap-2">
                            <span class="text-blue-500 mt-2 flex-shrink-0">•</span>
                            <span>{{ line.replace('•', '').trim() }}</span>
                          </li>
                        </ul>
                      </div>

                      <!-- Technologies -->
                      <div class="flex flex-wrap gap-3">
                        <span
                          v-for="tech in exp.technologies"
                          :key="tech"
                          class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-base font-medium hover:bg-blue-200 transition-colors"
                        >
                          {{ tech }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 text-left">
                  <!-- Date Card -->
                  <div class="text-blue-600 font-bold text-2xl mb-3">{{ exp.period }}</div>
                  <div class="text-gray-600 flex items-center gap-2 justify-start">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {{ exp.location }}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <!-- Current Status -->
      <div class="mt-20 text-center">
        <div class="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 rounded-full">
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span class="font-medium">Открыт к новым возможностям</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume'
import FadeIn from './FadeIn.vue'

const { experience } = useResumeStore()
</script>
