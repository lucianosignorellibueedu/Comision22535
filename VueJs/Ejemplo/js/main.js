
const { createApp } = Vue   // crea un objeto VUE
createApp({
    data() {
        return {
            message: 'Bienvenidos a VUEJS !',
            nombre: "Chef ",
            frutas: ["anana", "banana"],
            login: true,
            imagen: "https://gourmetdemexico.com.mx/wp-content/uploads/2018/03/descarga.jpg",
            fotos:[   
                "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/24.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/626.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/627.jpeg",
                "https://rickandmortyapi.com/api/character/avatar/628.jpeg"
               ],
           
               data: [
                {
                "id": 1,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "created": "2017-11-04T18:48:46.250Z"
                },
                {
                "id": 2,
                "name": "Morty Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                "created": "2017-11-04T18:50:21.651Z"
                },
                {
                "id": 3,
                "name": "Summer Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Female",
                "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                "created": "2017-11-04T19:09:56.428Z"
                },
                {
                "id": 4,
                "name": "Beth Smith",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Female",
                "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                "created": "2017-11-04T19:22:43.665Z"
                },
                {
                    "id": 5,
                    "name": " Smith",
                    "status": "Alive",
                    "species": "Human",
                    "type": "",
                    "gender": "Male",
                    "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                    "created": "2017-11-04T19:22:43.665Z"
                    }

                ]   ,  
        }
    }
}).mount('#app')
