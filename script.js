const games = [
    { id: 1, title: "Cyberpunk 2077", genre: "RPG", price: 1999, image: "images/Cyberpunk.jpeg", description: "Футуристический RPG от первого лица в мире наёмников. Исследуйте огромный открытый мир Найт-Сити, выполняйте задания и становитесь легендой." },
    { id: 2, title: "Metal Gear Solid Delta: Snake Eater", genre: "Стелс-экшен", price: 2999, image: "images/MetalGearSolid.jpeg", description: "Ремейк культовой стелс-оперы в джунглях. Выживание, скрытность и напряжённый сюжет во времена Холодной войны." },
    { id: 3, title: "Hades", genre: "Инди", price: 599, image: "images/Hades.jpeg", description: "Roguelike в мире греческой мифологии. Пробивайтесь из подземного мира, используя дары олимпийских богов." },
    { id: 4, title: "Doom Eternal", genre: "Экшен", price: 1499, image: "images/Doom.jpeg", description: "Динамичный шутер от первого лица. Уничтожайте орды демонов с помощью мощнейшего арсенала." },
    { id: 5, title: "The Witcher 3", genre: "RPG", price: 1299, image: "images/witcher.jpeg", description: "Открытый мир и охота на чудовищ. Станьте ведьмаком Геральтом и спасите свою приёмную дочь." },
    { id: 6, title: "Dark Souls II", genre: "RPG", price: 9999, image: "images/ds2.jpeg", description: "Суровая ролевая игра с высокой сложностью. Исследуйте мрачный мир Дранглейк и сражайтесь с могущественными боссами." },
    { id: 7, title: "Elden Ring", genre: "RPG", price: 2999, image: "images/eldenring.jpeg", description: "Грандиозный экшен-RPG от создателей Dark Souls. Исследуйте Междуземье в поисках Элденского кольца." },
    { id: 8, title: "Весёлая ферма", genre: "Инди", price: 299, image: "images/farm.jpeg", description: "Симулятор фермы с уютной атмосферой. Выращивайте урожай, ухаживайте за животными и общайтесь с соседями." },
    { id: 9, title: "Dota 2", genre: "Стратегия", price: 0, image: "images/Dota 2.jpeg", description: "Легендарная MOBA с миллионами игроков. Бесплатно! Сражайтесь в команде 5х5 и уничтожьте древний трон врага." },
    { id: 10, title: "Baldur's Gate 3", genre: "RPG", price: 2999, image: "images/baldursgate3.jpg", description: "Эпическая RPG по мотивам Dungeons & Dragons. Создайте своего персонажа и влияйте на ход сюжета сотнями способов." },
    { id: 11, title: "Hitman 3", genre: "Стелс-экшен", price: 1999, image: "images/hitman3.jpg", description: "Станьте агентом 47 и выполняйте контракты по всему миру. Маскировка, отвлечения, скрытные убийства." },
    { id: 12, title: "Hollow Knight", genre: "Инди", price: 499, image: "images/hollowknight.jpg", description: "Атмосферный Metroidvania в подземном царстве насекомых. Исследуйте, сражайтесь с боссами и раскрывайте тайны." },
    { id: 13, title: "Sekiro: Shadows Die Twice", genre: "Экшен", price: 2999, image: "images/sekiro.jpg", description: "Самурайский экшен от создателей Dark Souls. Напряжённые бои на мечах, протезы-гаджеты и исследование феодальной Японии." },
    { id: 14, title: "Civilization VI", genre: "Стратегия", price: 999, image: "images/civilization6.jpg", description: "Пошаговая стратегия по построению империи. Ведите свою цивилизацию от каменного века до покорения космоса." },
    { id: 15, title: "Starfield", genre: "RPG", price: 2999, image: "images/starfield.jpg", description: "Космическая RPG от Bethesda. Исследуйте тысячи планет, стройте корабли и открывайте тайны галактики." },
    { id: 16, title: "Ghost of Tsushima", genre: "Экшен", price: 2499, image: "images/ghostoftsushima.jpg", description: "Самурайский экшен в открытом мире. Защитите остров Цусима от монгольского нашествия, используя путь самурая или призрака." }
];

const systemRequirements = {
    1: { os: "Windows 10", processor: "Intel Core i7-6700", ram: "12 GB", gpu: "GTX 1060", storage: "70 GB" },
    2: { os: "Windows 10", processor: "Intel Core i5-8400", ram: "16 GB", gpu: "GTX 1060", storage: "50 GB" },
    3: { os: "Windows 7", processor: "Intel Core i5-2300", ram: "8 GB", gpu: "GTX 560", storage: "15 GB" },
    4: { os: "Windows 10", processor: "Intel Core i5-2500K", ram: "8 GB", gpu: "GTX 970", storage: "80 GB" },
    5: { os: "Windows 7", processor: "Intel Core i5-2500K", ram: "6 GB", gpu: "GTX 660", storage: "50 GB" },
    6: { os: "Windows 7", processor: "Intel Core i5-2500K", ram: "4 GB", gpu: "GTX 465", storage: "14 GB" },
    7: { os: "Windows 10", processor: "Intel Core i5-8400", ram: "12 GB", gpu: "GTX 1060", storage: "60 GB" },
    8: { os: "Windows 7", processor: "Intel Core i3-2100", ram: "4 GB", gpu: "GTX 460", storage: "2 GB" },
    9: { os: "Windows 7", processor: "Intel Core i3-2100", ram: "4 GB", gpu: "GTX 460", storage: "15 GB" },
    10: { os: "Windows 10", processor: "Intel Core i5-8600K", ram: "16 GB", gpu: "GTX 1060", storage: "150 GB" },
    11: { os: "Windows 10", processor: "Intel Core i5-2500K", ram: "8 GB", gpu: "GTX 660", storage: "60 GB" },
    12: { os: "Windows 7", processor: "Intel Core i5-2300", ram: "4 GB", gpu: "GTX 560", storage: "9 GB" },
    13: { os: "Windows 10", processor: "Intel Core i5-2500K", ram: "8 GB", gpu: "GTX 970", storage: "25 GB" },
    14: { os: "Windows 7", processor: "Intel Core i3-2100", ram: "4 GB", gpu: "GTX 450", storage: "15 GB" },
    15: { os: "Windows 10", processor: "Intel Core i5-8600K", ram: "16 GB", gpu: "GTX 1070", storage: "125 GB" },
    16: { os: "Windows 10", processor: "Intel Core i5-2500K", ram: "8 GB", gpu: "GTX 960", storage: "60 GB" }
};

function initStorage() {
    if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]));
    if (!localStorage.getItem('library')) localStorage.setItem('library', JSON.stringify([]));
    if (!localStorage.getItem('wishlist')) localStorage.setItem('wishlist', JSON.stringify([]));
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countEl = document.getElementById('cartCount');
    if (countEl) countEl.innerText = cart.length;
}

function addToCart(gameId) {
    const library = JSON.parse(localStorage.getItem('library'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    
    if (library.includes(gameId)) {
        alert('Эта игра уже есть в вашей библиотеке!');
        return;
    }
    
    if (!cart.includes(gameId)) {
        cart.push(gameId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert('Игра добавлена в корзину');
    } else {
        alert('Игра уже в корзине');
    }
}

function addToWishlist(gameId) {
    const library = JSON.parse(localStorage.getItem('library'));
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    
    if (library.includes(gameId)) {
        alert('Эта игра уже есть в вашей библиотеке!');
        return;
    }
    
    if (!wishlist.includes(gameId)) {
        wishlist.push(gameId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('Добавлено в избранное');
        if (window.location.pathname.includes('wishlist.html')) renderWishlistPage();
    } else {
        alert('Уже в избранном');
    }
}

function removeFromCart(gameId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(id => id !== gameId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) renderCartPage();
}

function buyGame(gameId) {
    let library = JSON.parse(localStorage.getItem('library'));
    let cart = JSON.parse(localStorage.getItem('cart'));
    
    if (library.includes(gameId)) {
        alert('Игра уже есть в библиотеке!');
        renderCartPage();
        return;
    }
    
    if (!library.includes(gameId)) {
        library.push(gameId);
        localStorage.setItem('library', JSON.stringify(library));
    }
    cart = cart.filter(id => id !== gameId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Игра куплена и добавлена в библиотеку!');
    if (window.location.pathname.includes('cart.html')) renderCartPage();
    if (window.location.pathname.includes('gamepage.html')) {
        const backLink = document.querySelector('.back-link');
        if (backLink) backLink.click();
    }
}

function renderGamesGrid(containerId, gameList, showButtons = true, showPrice = true, showPlayButton = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (gameList.length === 0) {
        container.innerHTML = '<div class="empty-message">Здесь пока пусто...</div>';
        return;
    }
    let html = '';
    for (let i = 0; i < gameList.length; i++) {
        const g = gameList[i];
        const freeBadge = g.price === 0 && showPrice ? '<span class="free-badge">Бесплатно</span>' : '';
        html += '<div class="game-card" data-id="' + g.id + '">';
        html += freeBadge;
        html += '<img src="' + g.image + '" alt="' + g.title + '" onerror="this.src=\'https://via.placeholder.com/300x150?text=' + encodeURIComponent(g.title) + '\'">';
        html += '<h3>' + g.title + '</h3>';
        if (showPrice) html += '<p class="price">' + (g.price === 0 ? 'Бесплатно' : g.price + ' ₽') + '</p>';
        if (showButtons) {
            html += '<div class="button-group">';
            html += '<button class="add-to-cart-btn" data-id="' + g.id + '">В корзину</button>';
            html += '<button class="add-to-wishlist-btn" data-id="' + g.id + '">❤️</button>';
            html += '</div>';
        }
        if (showPlayButton) {
            html += '<button class="play-btn" data-id="' + g.id + '">Играть</button>';
        }
        html += '</div>';
    }
    container.innerHTML = html;

    if (showButtons) {
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(parseInt(btn.dataset.id));
            });
        });
        document.querySelectorAll('.add-to-wishlist-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToWishlist(parseInt(btn.dataset.id));
            });
        });
    }
    
    if (showPlayButton) {
        document.querySelectorAll('.play-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                window.location.href = 'gamepage.html?id=' + id;
            });
        });
    }
    
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            const id = card.dataset.id;
            window.location.href = 'gamepage.html?id=' + id;
        });
    });
}

function renderCatalogPage() {
    const searchTerm = document.getElementById('searchInput') ? document.getElementById('searchInput').value.toLowerCase() : '';
    const genre = document.getElementById('genreFilter') ? document.getElementById('genreFilter').value : 'all';
    let filtered = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchTerm);
        const matchesGenre = genre === 'all' || game.genre === genre;
        return matchesSearch && matchesGenre;
    });
    renderGamesGrid('gamesGrid', filtered, true, true, false);
}

function renderLibraryPage() {
    const library = JSON.parse(localStorage.getItem('library'));
    const ownedGames = games.filter(g => library.includes(g.id));
    renderGamesGrid('libraryGrid', ownedGames, false, false, false);
}

function renderWishlistPage() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    const wishlistGames = games.filter(g => wishlist.includes(g.id));
    renderGamesGrid('wishlistGrid', wishlistGames, false, false, false);
}

function renderCartPage() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    const cart = JSON.parse(localStorage.getItem('cart'));
    const library = JSON.parse(localStorage.getItem('library'));
    let total = 0;
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-message">Корзина пуста</div>';
        document.getElementById('totalPrice').innerText = '0';
        return;
    }
    let html = '';
    for (let i = 0; i < cart.length; i++) {
        const game = games.find(g => g.id === cart[i]);
        if (game) {
            total += game.price;
            const isInLibrary = library.includes(game.id);
            html += '<div class="cart-item">';
            html += '<span><strong>' + game.title + '</strong></span>';
            html += '<span>' + (game.price === 0 ? 'Бесплатно' : game.price + ' ₽') + '</span>';
            html += '<div>';
            html += '<button class="remove-from-cart" data-id="' + game.id + '">Удалить</button>';
            if (!isInLibrary) {
                html += '<button class="buy-now" data-id="' + game.id + '">Купить</button>';
            } else {
                html += '<button class="buy-now-disabled" disabled style="background:#555; cursor:not-allowed;">Уже в библиотеке</button>';
            }
            html += '</div></div>';
        }
    }
    container.innerHTML = html;
    document.getElementById('totalPrice').innerText = total;
    document.querySelectorAll('.remove-from-cart').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
    });
    document.querySelectorAll('.buy-now').forEach(btn => {
        btn.addEventListener('click', () => buyGame(parseInt(btn.dataset.id)));
    });
}

function renderGameDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = parseInt(urlParams.get('id'));
    const game = games.find(g => g.id === gameId);
    const library = JSON.parse(localStorage.getItem('library'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    const req = systemRequirements[gameId];
    
    if (!game) {
        document.querySelector('.detail-card').innerHTML = '<h2>Игра не найдена</h2>';
        return;
    }
    document.getElementById('gameTitle').innerText = game.title;
    document.getElementById('gameImage').src = game.image;
    document.getElementById('gameDescription').innerText = game.description;
    document.getElementById('gameGenre').innerText = ' ' + game.genre;
    document.getElementById('gamePrice').innerText = game.price === 0 ? 'Бесплатно' : game.price + ' ₽';
    
    const reqContainer = document.getElementById('requirementsContent');
    if (req && reqContainer) {
        reqContainer.innerHTML = `
            <ul>
                <li><strong>ОС:</strong> ${req.os}</li>
                <li><strong>Процессор:</strong> ${req.processor}</li>
                <li><strong>Оперативная память:</strong> ${req.ram}</li>
                <li><strong>Видеокарта:</strong> ${req.gpu}</li>
                <li><strong>Место на диске:</strong> ${req.storage}</li>
            </ul>
        `;
    } else if (reqContainer) {
        reqContainer.innerHTML = '<p>Системные требования не указаны</p>';
    }
    
    const addToCartBtn = document.getElementById('addToCartBtn');
    const addToWishlistBtn = document.getElementById('addToWishlistBtn');
    
    if (library.includes(game.id)) {
        addToCartBtn.disabled = true;
        addToCartBtn.style.background = '#555';
        addToCartBtn.style.cursor = 'not-allowed';
        addToCartBtn.innerText = 'Уже в библиотеке';
        addToWishlistBtn.disabled = true;
        addToWishlistBtn.style.background = '#555';
        addToWishlistBtn.style.cursor = 'not-allowed';
    } else if (cart.includes(game.id)) {
        addToCartBtn.disabled = true;
        addToCartBtn.style.background = '#555';
        addToCartBtn.style.cursor = 'not-allowed';
        addToCartBtn.innerText = 'Уже в корзине';
        addToWishlistBtn.disabled = false;
        addToWishlistBtn.style.background = 'linear-gradient(135deg, #ff2d55, #ff6b6b)';
        addToWishlistBtn.onclick = () => addToWishlist(game.id);
    } else {
        addToCartBtn.disabled = false;
        addToCartBtn.style.background = 'linear-gradient(135deg, #ff2d55, #ff6b6b)';
        addToCartBtn.innerText = 'В корзину';
        addToCartBtn.onclick = () => addToCart(game.id);
        addToWishlistBtn.disabled = false;
        addToWishlistBtn.style.background = 'linear-gradient(135deg, #ff2d55, #ff6b6b)';
        addToWishlistBtn.onclick = () => addToWishlist(game.id);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initStorage();
    updateCartCount();

    if (document.getElementById('gamesGrid')) {
        renderCatalogPage();
        document.getElementById('searchInput').addEventListener('input', renderCatalogPage);
        document.getElementById('genreFilter').addEventListener('change', renderCatalogPage);
    }
    if (document.getElementById('libraryGrid')) renderLibraryPage();
    if (document.getElementById('wishlistGrid')) renderWishlistPage();
    if (document.getElementById('cartItems')) {
        renderCartPage();
        document.getElementById('checkoutBtn').addEventListener('click', () => {
            const cart = JSON.parse(localStorage.getItem('cart'));
            let library = JSON.parse(localStorage.getItem('library'));
            cart.forEach(id => { if (!library.includes(id)) library.push(id); });
            localStorage.setItem('library', JSON.stringify(library));
            localStorage.setItem('cart', JSON.stringify([]));
            updateCartCount();
            renderCartPage();
            alert('Заказ оформлен! Игры добавлены в библиотеку');
        });
    }
    if (document.getElementById('gameDetailContainer')) renderGameDetail();

    const modal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeModal = document.querySelector('.close-modal');
    const confirmBtn = document.getElementById('confirmLoginBtn');
    let selectedPlatform = null;

    if (loginBtn) {
        loginBtn.onclick = (e) => {
            e.preventDefault();
            if (modal) modal.style.display = 'flex';
        };
    }

    if (closeModal) {
        closeModal.onclick = () => {
            if (modal) modal.style.display = 'none';
        };
    }

    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };

    const platformOptions = document.querySelectorAll('.platform-option');
    platformOptions.forEach(opt => {
        opt.onclick = () => {
            platformOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedPlatform = opt.dataset.platform;
        };
    });

    if (confirmBtn) {
        confirmBtn.onclick = () => {
            if (selectedPlatform) {
                let platformName = {
                    'steam': 'Steam',
                    'gog': 'GOG',
                    'epic': 'Epic Games'
                }[selectedPlatform];
                alert('Вы вошли в аккаунт ' + platformName + '!');
                modal.style.display = 'none';
                if (loginBtn) loginBtn.style.display = 'none';
            } else {
                alert('Выберите платформу для входа');
            }
        };
    }
});
