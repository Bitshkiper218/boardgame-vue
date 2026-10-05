const GameCard = {
    props: ['title', 'minPlayers', 'maxPlayers', 'genre', 'img'],
    emits: ['filter'],
    template: `
        <article class="card">
            <h3>{{ title }}</h3>
            <span class="badge">👥 {{ minPlayers }}–{{ maxPlayers }} гравців</span>
            <img :src="img" :alt="'Обкладинка гри ' + title">
            <p class="genre-text" @click="$emit('filter', genre)">
                Жанр: <span class="genre-link">{{ genre }}</span>
            </p>
        </article>
    `
};

const App = {
    data() {
        return {
            currentGenre: '',
            games: [
                { id: 1, title: 'Каркасон', minPlayers: 2, maxPlayers: 5, genre: 'Стратегія', img: 'assets/img/carcassonne.jpg' },
                { id: 2, title: 'Манчкін', minPlayers: 3, maxPlayers: 6, genre: 'Карткова', img: 'assets/img/munchkin.jpg' },
                { id: 3, title: 'Діксіт', minPlayers: 3, maxPlayers: 8, genre: 'Асоціації', img: 'assets/img/dixit.jpg' },
                { id: 4, title: 'Козаки', minPlayers: 2, maxPlayers: 4, genre: 'Стратегія', img: 'assets/img/Cossacs.jpg' },
                { id: 5, title: 'Вуаля', minPlayers: 2, maxPlayers: 6, genre: 'Карткова', img: 'assets/img/Wualia.jpg' }
            ]
        };
    },
    computed: {
        filteredGames() {
            if (!this.currentGenre) return this.games;
            return this.games.filter(game => game.genre === this.currentGenre);
        }
    },
    methods: {
        setGenreFilter(genre) {
            this.currentGenre = genre;
        }
    }
};

Vue.createApp(App)
   .component('GameCard', GameCard)
   .mount('#app');