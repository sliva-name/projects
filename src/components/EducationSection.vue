<template>
  <section class="py-20 lg:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16 lg:mb-24">
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">Образование</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
        <div
          v-for="edu in education"
          :key="edu.id"
          class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 lg:p-10 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
        >
          <div class="flex items-start gap-6">
            <!-- Education Icon -->
            <div class="w-16 h-16 lg:w-20 lg:h-20 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg class="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              </svg>
            </div>

            <div class="flex-1">
              <h3 class="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3">{{ edu.degree }}</h3>
              <p class="text-blue-600 font-medium text-lg lg:text-xl mb-2">{{ edu.institution }}</p>
              <p class="text-gray-600 text-base lg:text-lg mb-4">{{ edu.period }} • {{ edu.location }}</p>

              <p class="text-gray-700 leading-relaxed mb-6 text-base lg:text-lg">{{ edu.description }}</p>

              <div class="flex items-center gap-3">
                <span class="text-sm lg:text-base text-gray-500 font-medium">Средний балл:</span>
                <span class="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-sm lg:text-base font-bold shadow-sm">
                  {{ edu.gpa }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Languages Section -->
      <div class="mt-20 lg:mt-32">
        <h3 class="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">Языки</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          <div
            v-for="lang in languages"
            :key="lang.name"
            class="bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div class="flex items-center justify-between mb-6">
              <h4 class="text-xl lg:text-2xl font-bold text-gray-900">{{ lang.name }}</h4>
              <span class="text-sm lg:text-base text-gray-500 font-medium px-3 py-1 bg-gray-100 rounded-full">{{ lang.level }}</span>
            </div>

            <div class="relative">
              <div class="w-full bg-gray-200 rounded-full h-4 lg:h-5 overflow-hidden">
                <div
                  class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out relative"
                  :style="{ width: lang.proficiency + '%' }"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
              </div>

              <div class="mt-4 text-right">
                <span class="text-lg lg:text-xl font-bold text-gray-700">{{ lang.proficiency }}%</span>
              </div>
            </div>

            <!-- Progress indicator -->
            <div class="mt-4 flex justify-end">
              <div class="flex items-center gap-2">
                <div class="flex gap-1">
                  <div
                    v-for="n in 5"
                    :key="n"
                    class="w-2 h-2 rounded-full"
                    :class="n <= Math.ceil(lang.proficiency / 20) ? 'bg-blue-500' : 'bg-gray-300'"
                  ></div>
                </div>
                <span class="text-xs text-gray-500 ml-2">
                  {{ Math.ceil(lang.proficiency / 20) }}/5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume'

const { education, languages } = useResumeStore()
</script>
