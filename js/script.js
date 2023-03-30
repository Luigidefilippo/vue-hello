


const { createApp } = Vue;

createApp({
    data() {
        return {
            text: "Hello Vuejs!",
            imgSrc: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg",
            imgAlt: "immagine gatti "
        }
    }
}).mount("#app");