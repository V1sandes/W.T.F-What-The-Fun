const games = [
    { id: 1, title: "Cyberpunk 2077", genre: "RPG", price: 1999, image: "images/Cyberpunk.jpeg", description: "Футуристический RPG от первого лица в мире наёмников. Исследуйте огромный открытый мир Найт-Сити, выполняйте задания и становитесь легендой." },
    { id: 2, title: "Metal Gear Solid Delta: Snake Eater", genre: "Стелс-экшен", price: 2999, image: "images/MetalGearSolid.jpeg", description: "Ремейк культовой стелс-оперы в джунглях. Выживание, скрытность и напряжённый сюжет во времена Холодной войны." },
    { id: 3, title: "Hades", genre: "Инди", price: 599, image: "images/Hades.jpeg", description: "Roguelike в мире греческой мифологии. Пробивайтесь из подземного мира, используя дары олимпийских богов." },
    { id: 4, title: "Doom", genre: "Экшен", price: 1499, image: "images/Doom.jpeg", description: "Динамичный шутер от первого лица. Уничтожайте орды демонов с помощью мощнейшего арсенала." },
    { id: 5, title: "The Witcher 3", genre: "RPG", price: 1299, image: "images/witcher.jpeg", description: "Открытый мир и охота на чудовищ. Станьте ведьмаком Геральтом и спасите свою приёмную дочь." },
    { id: 6, title: "Dark Souls II", genre: "RPG", price: 9999, image: "images/ds2.jpeg", description: "Суровая ролевая игра с высокой сложностью. Исследуйте мрачный мир Дранглейк и сражайтесь с могущественными боссами." },
    { id: 7, title: "Elden Ring", genre: "RPG", price: 2999, image: "images/eldenringring.jpeg", description: "Грандиозный экшен-RPG от создателей Dark Souls. Исследуйте Междуземье в поисках Элденского кольца." },
    { id: 8, title: "Весёлая ферма", genre: "Инди", price: 299, image: "images/farm.jpeg", description: "Симулятор фермы с уютной атмосферой. Выращивайте урожай, ухаживайте за животными и общайтесь с соседями." },
    { id: 9, title: "Dota 2", genre: "Стратегия", price: 0, image: "images/Dota 2.jpeg", description: "Легендарная MOBA с миллионами игроков. Бесплатно! Сражайтесь в команде 5х5 и уничтожьте древний трон врага." }
];

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
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart.includes(gameId)) {
        cart.push(gameId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert('✅ Игра добавлена в корзину');
    } else {
        alert('⚠️ Игра уже в корзине');
    }
}

function addToWishlist(gameId) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    if (!wishlist.includes(gameId)) {
        wishlist.push(gameId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('❤️ Добавлено в избранное');
        if (window.location.pathname.includes('wishlist.html')) renderWishlistPage();
    } else {
        alert('⚠️ Уже в избранном');
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
    if (!library.includes(gameId)) {
        library.push(gameId);
        localStorage.setItem('library', JSON.stringify(library));
    }
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(id => id !== gameId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('🎉 Игра куплена и добавлена в библиотеку!');
    if (window.location.pathname.includes('cart.html')) renderCartPage();
}

function renderGamesGrid(containerId, gameList, showButtons = true, showPrice = true) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (gameList.length === 0) {
        container.innerHTML = '<div class="empty-message">🎮 Здесь пока пусто...</div>';
        return;
    }
    let html = '';
    for (let i = 0; i < gameList.length; i++) {
        const g = gameList[i];
        const freeBadge = g.price === 0 && showPrice ? '<span class="free-badge">Бесплатно</span>' : '';
        html += '<div class="game-card" data-id="' + g.id + '">';
        html += freeBadge;
        html += '<img src="' + g.image + '" alt="' + g.title + '" onerror="this.src=\'https://via.placeholder.com/300x150?text=No+Image\'">';
        html += '<h3>' + g.title + '</h3>';
        if (showPrice) html += '<p class="price">' + (g.price === 0 ? 'Бесплатно' : g.price + ' ₽') + '</p>';
        if (showButtons) {
            html += '<div class="button-group">';
            html += '<button class="add-to-cart-btn" data-id="' + g.id + '">🛒 В корзину</button>';
            html += '<button class="add-to-wishlist-btn" data-id="' + g.id + '">❤️</button>';
            html += '</div>';
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
    renderGamesGrid('gamesGrid', filtered, true, true);
}

function renderLibraryPage() {
    const library = JSON.parse(localStorage.getItem('library'));
    const ownedGames = games.filter(g => library.includes(g.id));
    renderGamesGrid('libraryGrid', ownedGames, false, false);
}

function renderWishlistPage() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    const wishlistGames = games.filter(g => wishlist.includes(g.id));
    renderGamesGrid('wishlistGrid', wishlistGames, false, true);
}

function renderCartPage() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    const cart = JSON.parse(localStorage.getItem('cart'));
    let total = 0;
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-message">🛒 Корзина пуста</div>';
        document.getElementById('totalPrice').innerText = '0';
        return;
    }
    let html = '';
    for (let i = 0; i < cart.length; i++) {
        const game = games.find(g => g.id === cart[i]);
        if (game) {
            total += game.price;
            html += '<div class="cart-item">';
            html += '<span><strong>' + game.title + '</strong></span>';
            html += '<span>' + (game.price === 0 ? 'Бесплатно' : game.price + ' ₽') + '</span>';
            html += '<div>';
            html += '<button class="remove-from-cart" data-id="' + game.id + '">🗑 Удалить</button>';
            html += '<button class="buy-now" data-id="' + game.id + '">💳 Купить</button>';
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
    if (!game) {
        document.querySelector('.detail-card').innerHTML = '<h2>Игра не найдена</h2>';
        return;
    }
    document.getElementById('gameTitle').innerText = game.title;
    document.getElementById('gameImage').src = game.image;
    document.getElementById('gameDescription').innerText = game.description;
    document.getElementById('gameGenre').innerText = '🎮 ' + game.genre;
    document.getElementById('gamePrice').innerText = game.price === 0 ? 'Бесплатно' : game.price + ' ₽';
    document.getElementById('addToCartBtn').onclick = () => addToCart(game.id);
    document.getElementById('addToWishlistBtn').onclick = () => addToWishlist(game.id);
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
            alert('✅ Заказ оформлен! Игры добавлены в библиотеку');
        });
    }
    if (document.getElementById('gameDetailContainer')) renderGameDetail();
});
