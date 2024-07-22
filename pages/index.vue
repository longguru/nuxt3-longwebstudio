<template>
  <div class="bg-neutral">
    <!-- Header -->
    <base-header />

    <!-- Hero Section -->
    <section class="bg-secondary text-white py-20">
      <div class="container grid md:grid-cols-2">
        <div class="col-span-1 flex flex-col justify-center items-start">
          <h1 class="text-5xl mb-4">Chào bạn! Tôi là Lỗ Văn Long</h1>

          <p class="text-2xl mb-8">
            Nhà thiết kế website hiện đại và chuyên nghiệp.
          </p>

          <button
            @click="useScrollTo('showcase')"
            class="bg-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            Xem công việc của tôi
          </button>
        </div>

        <!-- <div class="col-span-1 flex justify-end">
          <img src="~/assets/images/vue-logo.webp" class="h-[350px]" />
        </div> -->
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="py-16 bg-neutral">
      <div class="container mx-auto text-center">
        <img
          src="~/assets/images/lo-van-long.png"
          alt="Kareem Dabbeet"
          class="rounded-full w-48 h-48 mx-auto mb-6 shadow-xl border-4 border-dashed border-primary"
        />

        <p
          class="text-gray-700 max-w-4xl mx-auto text-lg leading-loose mb-6 px-4"
        >
          Xin chào! Tôi là Long, một lập trình viên frontend với niềm đam mê xây
          dựng các ứng dụng web hiệu suất cao và thân thiện với người dùng. Với
          chuyên môn về Vue.js và Nuxt.js, tôi tự hào về việc tạo ra những giải
          pháp không chỉ có tính năng mà còn được mã hóa một cách tinh tế.
        </p>

        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          <skill-chip> Javascript </skill-chip>
          <skill-chip> Vue </skill-chip>
          <skill-chip> Nuxt </skill-chip>
          <skill-chip> TailwindCSS </skill-chip>
        </div>

        <div class="text-center mb-4">
          <a
            href="#showcase"
            class="bg-primary text-neutral rounded transition-all duration-300 hover:bg-secondary transform hover:-translate-y-1 py-3 px-6 mb-2"
          >
            Xem các dự án của tôi
          </a>
        </div>
      </div>
    </section>
    <curved-divider />
    <!-- showcase / My Work -->
    <section id="showcase" class="py-16 bg-slate-200">
      <h2 class="text-primary text-3xl mb-8 text-center">Công việc của tôi</h2>
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        <project-showcase
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </section>

    <!-- Divider -->
    <div class="bg-slate-200 py-6">
      <div class="container mx-auto text-center">
        <div class="inline-block w-16 h-1 bg-primary rounded-full"></div>
      </div>
    </div>

    <div class="bg-gradient-to-b from-slate-200 to-neutral h-10"></div>
    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-neutral text-center relative">
      <h2 class="text-primary text-4xl mb-6 font-bold">Hãy cùng trò chuyện</h2>

      <p class="text-secondary mb-8 text-lg">
        Quan tâm đến việc hợp tác hoặc chỉ muốn chào hỏi? Hãy gửi cho tôi một
        tin nhắn!
      </p>
      <a
        href="tel:0374638603"
        class="inline-block bg-primary text-neutral px-8 py-4 rounded-full text-lg font-semibold transform transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
      >
        Liên hệ với tôi
      </a>
    </section>

    <!-- Footer -->
    <footer class="bg-secondary text-white p-6 text-center">
      &copy; 2024 Lỗ Văn Long.
    </footer>
  </div>
</template>
<script setup lang="ts">
const projects = [
  {
    name: 'VueShop',
    description:
      'An e-commerce platform built with Vue.js and Vuetify, featuring user authentication, product search, and online payment.',
    image: '/images/projects/1.jpeg',
    link: '#',
  },
  {
    name: 'NuxtBlog',
    description:
      'A static blog generated with Nuxt.js, utilizing Markdown for content management and Tailwind CSS for styling.',
    image: '/images/projects/2.jpeg',
    link: '#',
  },
  {
    name: 'VueWeather',
    description:
      'A weather application built with Vue.js, using a third-party API to fetch and display weather data based on user location input.',
    image: '/images/projects/3.jpeg',
    link: '#',
  },
];
</script>
