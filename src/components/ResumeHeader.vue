<template>
  <header class="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-30">
      <div class="w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
    </div>

    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <!-- Profile Image -->
        <div class="relative flex-shrink-0 group">
          <div class="w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl ring-4 ring-white/10 backdrop-blur-sm">
            <img
              :src="personalInfo.avatar"
              :alt="personalInfo.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <!-- Status Indicator -->
          <div class="absolute -bottom-3 -right-3 bg-gradient-to-r from-green-400 to-emerald-500 w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-xl animate-pulse">
            <svg class="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>

          <!-- Decorative Ring -->
          <div class="absolute inset-0 rounded-full border-2 border-white/20 animate-spin" style="animation-duration: 20s;"></div>
        </div>

        <!-- Profile Info -->
        <div class="flex-1 text-center lg:text-left max-w-2xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 lg:mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
            {{ personalInfo.name }}
          </h1>
          <p class="text-xl lg:text-2xl xl:text-3xl text-blue-300 mb-6 lg:mb-8 font-medium">
            {{ personalInfo.title }}
          </p>

          <!-- Contact Info -->
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 mb-10">
            <div class="group flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-xs text-white/70 uppercase tracking-wider mb-1">Email</div>
                <span class="text-white/90 text-sm lg:text-base font-medium">{{ personalInfo.email }}</span>
              </div>
            </div>

            <div class="group flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-xs text-white/70 uppercase tracking-wider mb-1">Телефон</div>
                <span class="text-white/90 text-sm lg:text-base font-medium">{{ personalInfo.phone }}</span>
              </div>
            </div>

            <div class="group flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-xs text-white/70 uppercase tracking-wider mb-1">Локация</div>
                <span class="text-white/90 text-sm lg:text-base font-medium">{{ personalInfo.location }}</span>
              </div>
            </div>

            <div class="group flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-xs text-white/70 uppercase tracking-wider mb-1">Сайт</div>
                <a :href="personalInfo.website" target="_blank" class="text-white/90 hover:text-white transition-colors text-sm lg:text-base font-medium">
                  {{ personalInfo.website.replace('https://', '') }}
                </a>
              </div>
            </div>

            <div class="group flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 8c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-7 0c0 .83-.67 1.5-1.5 1.5S6 10.83 6 10s.67-1.5 1.5-1.5S9 9.17 9 10zm3.5 6.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-xs text-white/70 uppercase tracking-wider mb-1">Веб-студия</div>
                <a :href="personalInfo.vk" target="_blank" class="text-white/90 hover:text-white transition-colors text-sm lg:text-base font-medium">
                  vk.com/extrateam
                </a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center lg:justify-start gap-4 lg:gap-6">
            <a
              :href="personalInfo.github"
              target="_blank"
              class="group relative w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/25 overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a
              :href="personalInfo.vk"
              target="_blank"
              class="group relative w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 8c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-7 0c0 .83-.67 1.5-1.5 1.5S6 10.83 6 10s.67-1.5 1.5-1.5S9 9.17 9 10zm3.5 6.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
              </svg>
            </a>

            <a
              :href="'mailto:' + personalInfo.email"
              class="group relative w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25 overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume'

const { personalInfo } = useResumeStore()
</script>
