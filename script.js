// Данные об играх
const gamesData = [
    {
        id: 1,
        title: "Elder Scrolls VI",
        platforms: ["pc", "xbox"],
        date: "2024-11-15",
        description: "Новая часть легендарной RPG от Bethesda с открытым миром.",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1638548422880-8a6d8b8b8b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 2,
        title: "God of War: Ragnarok",
        platforms: ["ps5"],
        date: "2024-09-30",
        description: "Продолжение эпического приключения Кратоса и Атрея.",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1638548422880-8a6d8b8b8b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 3,
        title: "Starfield",
        platforms: ["pc", "xbox"],
        date: "2024-07-20",
        description: "Космическая RPG от создателей Skyrim и Fallout.",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1638548422880-8a6d8b8b8b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 4,
        title: "Zelda: Tears of the Kingdom",
        platforms: ["switch"],
        date: "2024-05-12",
        description: "Продолжение Breath of the Wild с новыми механиками.",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1638548422880-8a6d8b8b8b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 5,
        title: "Hogwarts Legacy 2",
        platforms: ["pc", "ps5", "xbox", "switch"],
        date: "2024-12-10",
        description: "Новое приключение в мире Гарри Поттера.",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1638548422880-8a6d8b8b8b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 6,
        title: "Cyberpunk 2077: Phantom Liberty",
        platforms: ["pc", "ps5", "xbox"],
        date: "2024-08-25",
        description: "Крупное дополнение к Cyberpunk 2077 с новым сюжетом.",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1638548422880-8a6d8b8b8b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

// Данные о предстоящих играх
const upcomingData = [
    {
        id: 7,
        title: "Fable",
        platforms: ["pc", "xbox"],
        date: "2024-10-18",
        image: "https://images.unsplash.com/photo-1638548422880-8a6d8b8b8b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 8,
        title: "Spider-Man 2",
        platforms: ["ps5"],
        date: "2024-06-15",
        image: "https://images.unsplash.com/photo-1638548422880-8a6d8b8b8b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 9,
        title: "Avengers Project",
        platforms: ["pc", "ps5", "xbox"],
        date: "2024-11-05",
        image: "https://images.unsplash.com/photo-1638548422880-8a6d8b8b8b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 10,
        title: "Metroid Prime 4",
        platforms: ["switch"],
        date: "2024-09-22",
        image: "https://images.unsplash.com/photo-1638548422880-8a6d8b8b8b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 11,
        title: "Dragon Age 4",
        platforms: ["pc", "ps5", "xbox"],
        date: "2024-12-01",
        image: "https://images.unsplash.com/photo-1638548422880-8a6d8b8b8b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

// Функция для отображения игр
function displayGames(filter = 'all') {
    const gamesContainer = document.getElementById('games-container');
    gamesContainer.innerHTML = '';
    
    const filteredGames = filter === 'all' 
        ? gamesData 
        : gamesData.filter(game => game.platforms.includes(filter));
    
    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-image">
                <img src="${game.image}" alt="${game.title}">
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <div class="game-platforms">
                    ${game.platforms.map(platform => `<span class="platform">${getPlatformName(platform)}</span>`).join('')}
                </div>
                <p class="game-date">${formatDate(game.date)}</p>
                <p class="game-description">${game.description}</p>
                <div class="game-rating">
                    <i class="fas fa-star"></i>
                    <span>${game.rating}/5</span>
                </div>
            </div>
        `;
        gamesContainer.appendChild(gameCard);
    });
}

// Функция для отображения предстоящих игр
function displayUpcomingGames() {
    const sliderContainer = document.getElementById('upcoming-slider');
    sliderContainer.innerHTML = '';
    
    upcomingData.forEach(game => {
        const slide = document.createElement('div');
        slide.className = 'upcoming-slide';
        slide.innerHTML = `
            <div class="slide-image">
                <img src="${game.image}" alt="${game.title}">
            </div>
            <div class="slide-info">
                <p class="slide-date">${formatDate(game.date)}</p>
                <h4 class="slide-title">${game.title}</h4>
            </div>
        `;
        sliderContainer.appendChild(slide);
    });
}

// Вспомогательные функции
function getPlatformName(platform) {
    const platforms = {
        'pc': 'PC',
        'ps5': 'PS5',
        'xbox': 'Xbox',
        'switch': 'Switch'
    };
    return platforms[platform] || platform;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
}

// Фильтрация игр
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        displayGames(this.dataset.filter);
    });
});

// Слайдер
let currentSlide = 0;
const slider = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.upcoming-slide');
const slideCount = slides.length;

document.querySelector('.slider-btn.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slideCount;
    slider.scrollTo({
        left: currentSlide * 320,
        behavior: 'smooth'
    });
});

document.querySelector('.slider-btn.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    slider.scrollTo({
        left: currentSlide * 320,
        behavior: 'smooth'
    });
});

// Форма подписки
document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Спасибо за подписку, ${email}! Вы будете получать свежие анонсы игр.`);
    this.reset();
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    displayGames();
    displayUpcomingGames();
});
