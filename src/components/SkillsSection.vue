<template>
  <section class="py-20 lg:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16 lg:mb-24">
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">Навыки и технологии</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="space-y-16 lg:space-y-20">
        <div
          v-for="skillCategory in skills"
          :key="skillCategory.category"
          class="bg-white rounded-3xl shadow-sm p-8 lg:p-12 hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-center gap-8 mb-12">
            <div class="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
              <svg
                v-if="skillCategory.category === 'Frontend'"
                class="w-10 h-10 lg:w-12 lg:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <svg
                v-else-if="skillCategory.category === 'Backend'"
                class="w-10 h-10 lg:w-12 lg:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
              <svg
                v-else
                class="w-10 h-10 lg:w-12 lg:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-900 mb-2">{{ skillCategory.category }}</h3>
              <p class="text-gray-600 text-base lg:text-lg font-medium">{{ skillCategory.category === 'Frontend' ? 'Веб-интерфейсы и пользовательский опыт' : skillCategory.category === 'Backend' ? 'Серверная логика и базы данных' : 'Инструменты разработки и DevOps' }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="skill in skillCategory.items"
              :key="skill.name"
              class="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 border border-gray-100/50"
            >
              <div class="flex justify-between items-center mb-4">
                <span class="text-gray-800 font-semibold text-lg">{{ skill.name }}</span>
                <span class="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{{ skill.level }}%</span>
              </div>

              <div class="relative">
                <div class="w-full bg-gray-200/50 rounded-full h-4 overflow-hidden shadow-inner">
                  <div
                    class="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 h-4 rounded-full transition-all duration-1000 ease-out relative shadow-lg"
                    :style="{ width: skill.level + '%' }"
                  >
                    <!-- Animated shine effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse"></div>
                  </div>
                </div>

                <!-- Skill level indicator with glow -->
                <div
                  class="absolute top-0 h-4 w-2 bg-white rounded-full shadow-lg transition-all duration-1000 border-2 border-blue-500"
                  :style="{ left: 'calc(' + skill.level + '% - 4px)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }"
                ></div>
              </div>

              <!-- Level description -->
              <div class="mt-3 text-xs text-gray-500 text-center">
                <span v-if="skill.level >= 90">Эксперт</span>
                <span v-else-if="skill.level >= 75">Продвинутый</span>
                <span v-else-if="skill.level >= 50">Средний</span>
                <span v-else>Базовый</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="mt-20 lg:mt-32">
        <h3 class="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">Сертификаты</h3>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
          <div
            v-for="cert in certifications"
            :key="cert.name"
            class="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group border border-gray-100/50"
          >
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <svg class="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>

              <div class="flex-1">
                <h4 class="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{{ cert.name }}</h4>
                <p class="text-blue-600 font-medium text-lg lg:text-xl mb-4">{{ cert.issuer }}</p>
                <p class="text-gray-600 text-base lg:text-lg mb-6 flex items-center gap-2">
                  <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {{ cert.date }}
                </p>

                <a
                  v-if="cert.url"
                  :href="cert.url"
                  target="_blank"
                  class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Посмотреть сертификат
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
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

const { skills, certifications } = useResumeStore()
</script>
