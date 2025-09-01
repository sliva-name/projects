<template>
  <section class="py-20 lg:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16 lg:mb-24">
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">Проекты</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <!-- Featured Projects -->
      <div class="mb-20 lg:mb-32">
        <h3 class="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">Избранные проекты</h3>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          <div
            v-for="project in featuredProjects"
            :key="project.id"
            class="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <!-- Featured Badge -->
              <div class="absolute top-6 right-6 bg-yellow-500 text-white px-4 py-2 rounded-full text-sm lg:text-base font-medium shadow-lg">
                ⭐ Избранный
              </div>

              <!-- Overlay Content -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <div class="text-center">
                  <h4 class="text-2xl lg:text-3xl font-bold text-white mb-4">{{ project.title }}</h4>
                  <div class="flex gap-4 justify-center">
                    <template v-if="project.github">
                      <a
                        :href="project.github"
                        target="_blank"
                        class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
                      >
                        GitHub
                      </a>
                    </template>
                    <template v-else>
                      <div class="bg-gray-600/60 backdrop-blur-sm text-gray-200 px-6 py-3 rounded-full font-medium cursor-not-allowed opacity-75 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        <span>Приватный</span>
                      </div>
                    </template>
                    <template v-if="project.demo">
                      <a
                        v-if="project.demoAvailable"
                        :href="project.demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        <span>Демо</span>
                      </a>
                      <div
                        v-else
                        class="px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 bg-gray-400 text-gray-200 cursor-not-allowed opacity-75"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        <span>Демо недоступно</span>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-8 lg:p-10">
              <h4 class="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">{{ project.title }}</h4>
              <p class="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-base lg:text-lg">{{ project.description }}</p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 lg:gap-3 mb-8">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm lg:text-base font-medium hover:bg-blue-200 transition-colors"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex gap-4">
                <template v-if="project.github">
                  <a
                    :href="project.github"
                    target="_blank"
                    class="flex-1 bg-gray-900 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-center font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </template>
                <template v-else>
                  <div class="flex-1 bg-gray-700 text-gray-300 px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-center font-medium cursor-not-allowed opacity-75 flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <span>Приватный репозиторий</span>
                  </div>
                </template>
                <template v-if="project.demo">
                  <a
                    v-if="project.demoAvailable"
                    :href="project.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-center font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    <span>Демо</span>
                  </a>
                  <div
                    v-else
                    class="flex-1 px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-center font-medium transition-all duration-300 flex items-center justify-center gap-2 bg-gray-400 text-gray-200 cursor-not-allowed opacity-75"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <span>Демо недоступно</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Projects -->
      <div>
        <h3 class="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">Другие проекты</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="project in otherProjects"
            :key="project.id"
            class="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <!-- Project Content -->
            <div class="p-4">
              <h4 class="text-lg font-bold text-gray-900 mb-2">{{ project.title }}</h4>
              <p class="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{{ project.description }}</p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-1 mb-4">
                <span
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex gap-2">
                <template v-if="project.github">
                  <a
                    :href="project.github"
                    target="_blank"
                    class="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </template>
                <template v-else>
                  <div class="text-gray-400 cursor-not-allowed" title="Приватный репозиторий">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                </template>
                <template v-if="project.demo">
                  <a
                    v-if="project.demoAvailable"
                    :href="project.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-700 transition-colors"
                    :title="'Открыть демо: ' + project.title"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                  <div
                    v-else
                    class="text-gray-400 cursor-not-allowed relative"
                    :title="'Демо недоступно: ' + project.title"
                  >
                    <svg class="w-3 h-3 absolute -top-1 -right-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Хотите увидеть больше проектов?</h3>
          <p class="text-gray-600 mb-6">Посетите мой GitHub для полного списка проектов и вкладов в open source</p>
          <a
            :href="personalInfo.github"
            target="_blank"
            class="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Посмотреть на GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume'

const { projects, personalInfo, featuredProjects, otherProjects } = useResumeStore()
</script>
