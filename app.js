
const http = require('http');

const VERSION = '2.0';

const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Andina Market | Tu mercado favorito</title>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f7f9f6;
    color: #243328;
}

header {
    background: white;
    padding: 20px 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 12px #00000010;
}

.logo {
    color: #198754;
    font-size: 26px;
    font-weight: bold;
}

nav a {
    text-decoration: none;
    color: #34443a;
    margin-left: 25px;
    font-weight: bold;
}

.hero {
    margin: 35px auto;
    width: 88%;
    min-height: 360px;
    border-radius: 22px;
    padding: 65px;
    display: flex;
    align-items: center;
    background: linear-gradient(90deg,
        #123d28 0%, #123d28dd 45%, #123d2840 100%),
        url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400')
        center/cover;
    color: white;
}

.hero-content {
    max-width: 520px;
}

.hero h1 {
    font-size: 45px;
    margin-bottom: 18px;
}

.hero p {
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 25px;
}

.btn {
    display: inline-block;
    background: #f5bd42;
    color: #263729;
    text-decoration: none;
    padding: 14px 25px;
    border-radius: 9px;
    font-weight: bold;
}

section {
    width: 88%;
    margin: 50px auto;
}

.section-title {
    margin-bottom: 25px;
}

.section-title h2 {
    font-size: 27px;
    margin-bottom: 8px;
}

.section-title p {
    color: #78847b;
}

.categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.category {
    background: white;
    padding: 25px;
    text-align: center;
    border-radius: 14px;
    box-shadow: 0 3px 12px #00000008;
    font-weight: bold;
    transition: .2s;
}

.category:hover {
    transform: translateY(-5px);
}

.category span {
    display: block;
    font-size: 35px;
    margin-bottom: 12px;
}

.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.product {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 3px 15px #0000000c;
}

.product img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.product-info {
    padding: 18px;
}

.product-info h3 {
    margin-bottom: 10px;
}

.price {
    color: #198754;
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 15px;
}

.buy {
    display: block;
    background: #198754;
    color: white;
    text-align: center;
    padding: 11px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
}

footer {
    background: #153b29;
    color: white;
    padding: 35px 8%;
    text-align: center;
    line-height: 1.8;
}

@media(max-width: 800px) {
    header {
        flex-direction: column;
        gap: 18px;
    }

    nav a {
        margin: 0 8px;
        font-size: 13px;
    }

    .hero {
        padding: 35px 25px;
    }

    .hero h1 {
        font-size: 32px;
    }

    .categories, .products {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width: 450px) {
    .categories, .products {
        grid-template-columns: 1fr;
    }
}
</style>
</head>

<body>

<header>
    <div class="logo">🌿 Andina Market</div>
    <nav>
        <a href="#">Inicio</a>
        <a href="#categorias">Categorías</a>
        <a href="#productos">Productos</a>
    </nav>
</header>

<main>
    <div class="hero">
        <div class="hero-content">
            <h1>Todo lo que necesitas, en un solo lugar</h1>
            <p>
                Encuentra productos frescos, alimentos y artículos
                de calidad para tu hogar. ¡Compra fácil y rápido!
            </p>
            <a href="#productos" class="btn">Explorar productos →</a>
        </div>
    </div>

    <section id="categorias">
        <div class="section-title">
            <h2>Nuestras categorías</h2>
            <p>Encuentra lo que buscas fácilmente.</p>
        </div>

        <div class="categories">
            <div class="category"><span>🥬</span>Frutas y verduras</div>
            <div class="category"><span>🥛</span>Lácteos</div>
            <div class="category"><span>🥩</span>Carnes</div>
            <div class="category"><span>🛒</span>Abarrotes</div>
        </div>
    </section>

    <section id="productos">
        <div class="section-title">
            <h2>Productos destacados</h2>
            <p>Algunos de nuestros productos favoritos.</p>
        </div>

        <div class="products">
            <article class="product">
                <img src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500" alt="Manzanas">
                <div class="product-info">
                    <h3>Manzanas frescas</h3>
                    <div class="price">S/ 4.50</div>
                    <a href="#" class="buy">Comprar</a>
                </div>
            </article>

            <article class="product">
                <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500" alt="Verduras">
                <div class="product-info">
                    <h3>Verduras frescas</h3>
                    <div class="price">S/ 5.00</div>
                    <a href="#" class="buy">Comprar</a>
                </div>
            </article>

            <article class="product">
                <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500" alt="Leche">
                <div class="product-info">
                    <h3>Leche fresca</h3>
                    <div class="price">S/ 4.00</div>
                    <a href="#" class="buy">Comprar</a>
                </div>
            </article>

            <article class="product">
                <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500" alt="Alimentos">
                <div class="product-info">
                    <h3>Productos variados</h3>
                    <div class="price">S/ 12.00</div>
                    <a href="#" class="buy">Comprar</a>
                </div>
            </article>
        </div>
    </section>
</main>

<footer>
    <h2>🌿 Andina Market</h2>
    <p>Calidad, frescura y confianza para tu hogar.</p>
    <p>© 2026 Andina Market | Versión ${VERSION}</p>
    <small>Desplegado mediante AWS CodeDeploy</small>
</footer>

</body>
</html>`;

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(html);
}).listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log(`Andina Market ${VERSION} funcionando`);
});
