// Крок 1. Вибір фреймворку: обрано Vue 3 через зручність декларативного рендерингу та реактивності без потреби налаштування складних збірників.
const GameCard = {
    props: ['title', 'minPlayers', 'maxPlayers', 'genre'],
    emits: ['filter'],
    template: `
        <div class="game-card">
            <h3>{{ title }}</h3>
            <p class="players">👥 {{ minPlayers }}–{{ maxPlayers }} гравців</p>
            <p class="genre" @click="$emit('filter', genre)">
                Жанр: <span class="genre-link">{{ genre }}</span>
            </p>
        </div>
    `
};

const App = {
    data() {
        return {
            currentGenre: '',
            games: [
                { id: 1, title: 'Каркасон', minPlayers: 2, maxPlayers: 5, genre: 'Стратегія' },
                { id: 2, title: 'Манчкін', minPlayers: 3, maxPlayers: 6, genre: 'Карткова' },
                { id: 3, title: 'Діксіт', minPlayers: 3, maxPlayers: 8, genre: 'Асоціації' },
                { id: 4, title: 'Козаки', minPlayers: 2, maxPlayers: 4, genre: 'Стратегія' },
                { id: 5, title: 'Вуаля', minPlayers: 2, maxPlayers: 6, genre: 'Карткова' }
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