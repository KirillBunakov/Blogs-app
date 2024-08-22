import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlogsStore = defineStore('blogStore', () => {
  const blogsArray = ref([])

  async function loadBlogs () {
      const { data } = await axios.get('https://blog-app-f1a69-default-rtdb.firebaseio.com/blogs.json')
      blogsArray.value = Object.keys(data).map(key => {
        return {
          id: key,
          blogTitle: data[key].blogTitle,
          blogHeader: data[key].blogHeader,
          blogContent: data[key].blogContent,
          blogImage: data[key].blogImage,
          blogDate: data[key].blogDate,
          blogTime: data[key].blogTime,
          blogTypes: data[key].blogTypes,
          blogComment: data[key].blogComment,
          blogComments: data[key].blogComments
        }
      })
  }

  // for developing
  async function addBlog () {
    await fetch('https://blog-app-f1a69-default-rtdb.firebaseio.com/blogs.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        blogTitle: 'Мир животных',
        blogHeader: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.',
        blogContent: 'Обычно панда ест сидя, держит ветку бамбука своим специальным "пальцем" и еще двумя пальцами на лапе обдирает с него твердую кору и потом медленно жует.',
        blogImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBkhP_e3zNM0KWwZV8u_DLr0DRJbKC2Q5Ug&s',
        blogDate: {
          date: new Date(202, 5, 12, 2, 3, 4, 567).getDate(),
          month: new Date(2024, 5, 12, 2, 3, 4, 567).getMonth()
        },
        blogTime: "4",
        blogTypes: ['Природа', 'Животные'],
        blogComment: "2",
        blogComments: [{
          commentId: 1,
          commentImg: "",
          commentName: "Иван Инванов",
          commentContent: "Мир животных",
          commentDate: ""
        },
        {
          commentId: 1,
          commentImg: "",
          commentName: "Иван Инванов",
          commentContent: "Мир животных",
          commentDate: ""
        }]
      })
    })
  }

  return { blogsArray, loadBlogs, addBlog }
})
