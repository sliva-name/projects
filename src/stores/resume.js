import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useResumeStore = defineStore('resume', () => {
  // Основная информация
  const personalInfo = ref({
    name: 'Антюхов Вячеслав Сергеевич',
    title: 'Full Stack Developer',
    email: 'antyuhov2@gmail.com',
    phone: '+7 (901) 105-33-86',
    location: 'Краснодар',
    avatar: '/src/assets/img/photo_2025-09-02_02-18-53.jpg',
    github: 'https://github.com/sliva-name',
    website: 'https://t.me/slivario',
    vk: 'https://vk.com/extrateam'
  })

  // О себе
  const about = ref(`
    Я — опытный fullstack разработчик уровня Middle с 5+ годами опыта в веб-разработке.
    Специализируюсь на создании высоконагруженных backend-систем на PHP (Laravel, Yii) с использованием современных технологий.
    Уверенно работаю с базами данных PostgreSQL и MySQL, очередями (RabbitMQ, Redis), API и микросервисами.

    В frontend владею JavaScript, Vue.js, React, HTML/CSS и Bootstrap для создания современных пользовательских интерфейсов.
    Имею опыт работы с Docker, CI/CD и Git для организации эффективного процесса разработки.

    Собственник веб-студии с 2019 года, где управляю полным циклом разработки проектов для клиентов.
    Специализируюсь на создании корпоративных сайтов, интернет-магазинов и сложных веб-приложений.

    Люблю чистый, читаемый код и придерживаюсь принципов SOLID и KISS.
    Быстро вникаю в новые проекты, умею работать в команде и всегда нацелен на качественный результат.
    Ищу команду для долгосрочного сотрудничества и профессионального роста.
  `)

  // Опыт работы
  const experience = ref([
    {
      id: 1,
      company: 'RichBee',
      position: 'Backend-разработчик',
      period: 'Март 2023 - настоящее время',
      location: 'Удаленно',
      description: `
        • Разработка и поддержка высоконагруженных backend-систем на PHP (Laravel, Yii)
        • Работа с микросервисной архитектурой и API
        • Оптимизация производительности и масштабируемости приложений
        • Интеграция с внешними сервисами и платежными системами
        • Работа с очередями (RabbitMQ, Redis) для асинхронной обработки
        • Написание и оптимизация SQL-запросов для PostgreSQL и MySQL
        • Участие в code review и менторстве junior разработчиков
      `,
      technologies: ['PHP', 'Laravel', 'Yii', 'PostgreSQL', 'MySQL', 'Redis', 'RabbitMQ', 'REST API', 'Docker', 'Git', 'CI/CD']
    },
    {
      id: 2,
      company: 'Myforce',
      position: 'Backend-разработчик',
      period: 'Январь 2020 - Февраль 2023',
      location: 'Ростов-на-Дону',
      description: `
        • Разработка и обслуживание серверной части веб-приложений
        • Создание RESTful API и работа с внешними сервисами
        • Разработка и поддержка клиентской части на Vue.js
        • Работа с базами данных MySQL и PostgreSQL
        • Настройка и администрирование веб-серверов (Nginx)
        • Оптимизация производительности и исправление багов
        • Участие в командной разработке и планировании архитектуры
      `,
      technologies: ['PHP', 'Laravel', 'Yii', 'JavaScript', 'Vue.js', 'MySQL', 'PostgreSQL', 'REST API', 'Git', 'Nginx']
    },
    {
      id: 3,
      company: 'Собственная веб-студия',
      position: 'Владелец и ведущий разработчик',
      period: '2019 - настоящее время',
      location: 'Удаленно',
      description: `
        • Управление собственной веб-студией и разработкой проектов
        • Полный цикл разработки: от технического задания до запуска
        • Создание корпоративных сайтов и интернет-магазинов
        • Разработка систем управления контентом (CMS)
        • Интеграция платежных систем и API внешних сервисов
        • SEO-оптимизация и повышение производительности
        • Техническая поддержка и сопровождение клиентских проектов
        • Работа с различными фреймворками и технологиями
      `,
      technologies: ['PHP', 'Laravel', 'Yii', 'JavaScript', 'Vue.js', 'MySQL', 'PostgreSQL', 'HTML/CSS', 'Bootstrap', 'Tailwind', 'API Integration', 'Project Management']
    }
  ])

  // Образование
  const education = ref([
    {
      id: 1,
      institution: 'Адыгейский государственный университет',
      degree: 'Высшее образование по специальности "Информационные системы и программирование"',
      period: '2020 - 2024',
      location: 'Майкоп',
      description: 'Изучение фундаментальных и современных технологий программирования, алгоритмов и структур данных',
      gpa: '4.2/5.0'
    }
  ])

  // Навыки
  const skills = ref([
    {
      category: 'Backend',
      items: [
        { name: 'PHP', level: 100 },
        { name: 'Laravel', level: 100 },
        { name: 'Yii', level: 60 },
        { name: 'MySQL', level: 100 },
        { name: 'PostgreSQL', level: 100 },
        { name: 'REST API', level: 100 },
        { name: 'Redis', level: 100 },
        { name: 'RabbitMQ', level: 100 }
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'JavaScript', level: 100 },
        { name: 'Vue.js', level: 85 },
        { name: 'HTML', level: 100 },
        { name: 'CSS3', level: 100 },
        { name: 'jQuery', level: 100 },
        { name: 'Bootstrap', level: 100 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Nginx', level: 100 },
        { name: 'CI/CD', level: 75 },
        { name: 'API', level: 100 },
      ]
    }
  ])

  // Проекты
  const projects = ref([

    {
      id: 1,
      title: 'SaaS E-commerce Platform',
      description: 'Создание мультитенантной E-commerce платформы с архитектурой "Theme as a Package". Полная система тем, биллинг, логистика',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      technologies: ['PHP', 'Laravel', 'Vue.js', 'PostgreSQL', 'Redis', 'Docker', 'SaaS', 'Theme System'],
      github: 'https://github.com/sliva-name/saasApp',
      demo: 'https://saas-demo.vercel.app',
      demoAvailable: false,
      featured: true
    },
    {
      id: 2,
      title: 'Moonshine Carousel Package',
      description: 'Разработка открытого пакета карусели для Laravel административной панели Moonshine. Улучшение UX и функциональности админки',
      image: 'https://github.com/moonshine-software/moonshine/raw/3.x/art/new.jpg',
      technologies: ['PHP', 'Laravel', 'JavaScript', 'Vue.js', 'Composer', 'Open Source'],
      github: 'https://github.com/sliva-name/moonshine-carousel',
      demo: 'https://packagist.org/packages/sliva-name/moonshine-carousel',
      demoAvailable: false,
      featured: false
    },
    {
      id: 3,
      title: 'Fablaw - Услуги банкротства физических лиц',
      description: 'Специализированный сайт юридической фирмы по банкротству физических лиц. Включает калькулятор стоимости услуг, формы подачи заявок, интеграцию с Яндекс.Картами для офисов по всей России и систему управления контентом',
      image: '/src/assets/screenshots/fablaw.png',
      technologies: ['PHP', 'Yii', 'MySQL', 'JavaScript', 'jQuery', 'HTML/CSS', 'Bootstrap', 'Yandex Maps API'],
      demo: 'https://fablaw.ru/',
      demoAvailable: true,
      featured: false,
      isPrivate: true
    },
    {
      id: 4,
      title: 'Express Bankrot - Банкротство онлайн',
      description: 'Сервис онлайн-банкротства с системой подачи заявок, расчета стоимости услуг и интеграцией с платежными системами',
      image: '/src/assets/screenshots/express-bankrot.png',
      technologies: ['PHP', 'Yii', 'PostgreSQL', 'JavaScript', 'jQuery', 'REST API', 'Payment Gateway'],
      demo: 'https://www.express-bankrot.ru/',
      demoAvailable: true,
      featured: true,
      isPrivate: true
    },
    {
      id: 5,
      title: 'Сайт страховой компании',
      description: 'Полнофункциональный сайт с полным прохождением этапов услуг',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      technologies: ['PHP', 'Laravel', 'PostgreSQL', 'JavaScript', 'Vue.js', 'HTML/CSS', 'Tailwind'],
      demoAvailable: true,
      demo: 'https://12polisov.ru/',
      featured: false,
      isPrivate: true
    },
    {
      id: 6,
      title: 'Сеть отелей "Подушкин"',
      description: 'Крупная сеть премиум-отелей на час в Москве с более чем 200 тематическими номерами. Полнофункциональная система бронирования, управления контентом и онлайн-оплаты. Включает административную панель, интеграцию платежных систем и мультиязычную поддержку',
      image: '/src/assets/screenshots/podushkin.png',
      technologies: ['PHP', 'Laravel', 'PostgreSQL', 'JavaScript', 'Vue.js', 'REST API', 'Payment Gateway', 'CMS', 'Multi-language'],
      demo: 'https://podushkin.ru/',
      demoAvailable: true,
      featured: true,
      isPrivate: true
    },

    {
      id: 7,
      title: 'Shopiforge - Платформа для интернет-магазинов',
      description: 'Комплексная платформа для создания и управления интернет-магазинами. Включает систему мультиканальных продаж, интеграцию с маркетплейсами, аналитику и CRM. Поддержка различных тарифов и персонализированных решений для бизнеса любого масштаба',
      image: '/src/assets/screenshots/shopiforge.png',
      technologies: ['PHP', 'JavaScript', 'Vue.js', 'Laravel', 'E-commerce Platform', 'Multi-channel Sales', 'CRM', 'Analytics'],
      demo: 'https://shopiforge.com/',
      demoAvailable: true,
      featured: false,
      isPrivate: true
    },

  ])

  // Языки
  const languages = ref([
    { name: 'Русский', level: 'Родной', proficiency: 100 },
    { name: 'Английский', level: 'Чтение технической документации', proficiency: 60 }
  ])



  // Computed properties
  const featuredProjects = computed(() =>
    projects.value.filter(project => project.featured)
  )

  const otherProjects = computed(() =>
    projects.value.filter(project => !project.featured)
  )

  const allTechnologies = computed(() => {
    const techSet = new Set()
    experience.value.forEach(exp => {
      exp.technologies.forEach(tech => techSet.add(tech))
    })
    projects.value.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  })

  // Actions
  const updatePersonalInfo = (info) => {
    personalInfo.value = { ...personalInfo.value, ...info }
  }

  const addExperience = (newExperience) => {
    experience.value.unshift({
      id: Date.now(),
      ...newExperience
    })
  }

  const updateExperience = (id, updatedExperience) => {
    const index = experience.value.findIndex(exp => exp.id === id)
    if (index !== -1) {
      experience.value[index] = { ...experience.value[index], ...updatedExperience }
    }
  }

  const deleteExperience = (id) => {
    experience.value = experience.value.filter(exp => exp.id !== id)
  }

  return {
    // State
    personalInfo,
    about,
    experience,
    education,
    skills,
    projects,
    languages,

    // Computed
    featuredProjects,
    otherProjects,
    allTechnologies,

    // Actions
    updatePersonalInfo,
    addExperience,
    updateExperience,
    deleteExperience
  }
})
