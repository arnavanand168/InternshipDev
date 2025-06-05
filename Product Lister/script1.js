const defaultProducts = [
    {id: 1, name: "Apple iPhone 15 Pro Max", price: 149900, description: "6.7-inch Super Retina XDR display, A17 Pro chip, 256GB, Titanium finish.", imagelink: "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_SL1500_.jpg"},
    {id: 2, name: "Samsung Galaxy S24 Ultra", price: 129999, description: "6.8-inch QHD+ display, Snapdragon 8 Gen 3, 200MP camera, 512GB.", imagelink: "https://m.media-amazon.com/images/I/71Sa3dqRZBL._AC_SL1500_.jpg"},
    {id: 3, name: "Sony WH-1000XM5 Wireless Headphones", price: 29990, description: "Industry-leading noise cancellation, 30-hour battery, touch controls.", imagelink: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"},
    {id: 4, name: "Apple MacBook Air M3", price: 114900, description: "13-inch, 8GB RAM, 256GB SSD, Liquid Retina display, Space Gray.", imagelink: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg"},
    {id: 5, name: "Kindle Paperwhite (11th Gen)", price: 13999, description: "6.8-inch display, adjustable warm light, waterproof, 16GB.", imagelink: "https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_SL1000_.jpg"},
    {id: 6, name: "Fitbit Charge 6 Fitness Tracker", price: 15999, description: "Heart rate, GPS, sleep tracking, 7-day battery life, Black.", imagelink: "https://m.media-amazon.com/images/I/61TnX0PmqES._AC_SL1500_.jpg"},
    {id: 7, name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker", price: 9499, description: "6 Quart, slow cooker, rice cooker, steamer, sauté, yogurt maker.", imagelink: "https://m.media-amazon.com/images/I/81iY5bKk5dL._AC_SL1500_.jpg"},
    {id: 8, name: "Bose SoundLink Flex Bluetooth Speaker", price: 13999, description: "Portable, waterproof, 12 hours playtime, Black.", imagelink: "https://m.media-amazon.com/images/I/81+1n5K9dJL._AC_SL1500_.jpg"},
    {id: 9, name: "Logitech MX Master 3S Wireless Mouse", price: 8999, description: "Ergonomic design, ultra-fast scrolling, USB-C, Graphite.", imagelink: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg"},
    {id: 10, name: "Nespresso VertuoPlus Coffee and Espresso Maker", price: 24999, description: "Single serve, includes milk frother, Black.", imagelink: "https://m.media-amazon.com/images/I/81pJcK6rJPL._AC_SL1500_.jpg"},
    {id: 11, name: "Samsung 65-Inch QLED 4K Smart TV (2024)", price: 104990, description: "Quantum HDR, Alexa built-in, Motion Xcelerator Turbo+.", imagelink: "https://m.media-amazon.com/images/I/91Qzq6z9p3L._AC_SL1500_.jpg"},
    {id: 12, name: "Dyson V15 Detect Cordless Vacuum Cleaner", price: 62900, description: "Laser reveals microscopic dust, up to 60 minutes run time.", imagelink: "https://m.media-amazon.com/images/I/71F1I4wqkKL._AC_SL1500_.jpg"},
    {id: 13, name: "GoPro HERO12 Black", price: 45990, description: "5.3K video, 27MP photos, waterproof, front and rear screens.", imagelink: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"},
    {id: 14, name: "Anker PowerCore 20000mAh Portable Charger", price: 3499, description: "Ultra-high capacity, PowerIQ technology, dual USB ports.", imagelink: "https://m.media-amazon.com/images/I/71Qe6yoE5pL._AC_SL1500_.jpg"},
    {id: 15, name: "Canon EOS R50 Mirrorless Camera", price: 79990, description: "24.2MP APS-C sensor, 4K video, RF-S 18-45mm lens kit.", imagelink: "https://m.media-amazon.com/images/I/81b6kGmJ5NL._AC_SL1500_.jpg"},
    {id: 16, name: "Apple Watch Series 9 GPS 45mm", price: 44900, description: "Always-On Retina display, Blood Oxygen, ECG, Midnight Aluminum Case.", imagelink: "https://m.media-amazon.com/images/I/71vCuRn6eGL._AC_SL1500_.jpg"},
    {id: 17, name: "Echo Show 10 (3rd Gen)", price: 24999, description: "10.1” HD screen, motion, Alexa smart home hub, Charcoal.", imagelink: "https://m.media-amazon.com/images/I/71pQKQ4dKpL._AC_SL1500_.jpg"},
    {id: 18, name: "JBL Flip 6 Portable Bluetooth Speaker", price: 9999, description: "Waterproof, 12 hours playtime, deep bass, Blue.", imagelink: "https://m.media-amazon.com/images/I/81wFumyZ6wL._AC_SL1500_.jpg"},
    {id: 19, name: "Philips Hue White & Color Ambiance Starter Kit", price: 16999, description: "3 bulbs, bridge, app control, works with Alexa & Google.", imagelink: "https://m.media-amazon.com/images/I/81b4r4wQK5L._AC_SL1500_.jpg"},
    {id: 20, name: "ASUS ROG Strix G16 Gaming Laptop", price: 179990, description: "16” 165Hz, Intel i9, RTX 4070, 16GB RAM, 1TB SSD.", imagelink: "https://m.media-amazon.com/images/I/81n5N-C6N6L._AC_SL1500_.jpg"}
];
if (sessionStorage.getItem('isNewSession') === null) {
    localStorage.setItem('products', JSON.stringify(defaultProducts));
    sessionStorage.setItem('isNewSession', 'true');
}

function getProducts() {
    return JSON.parse(localStorage.getItem('products')) || defaultProducts;
}
function setProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

const isAddPage = window.location.pathname.endsWith('add.html');

if (isAddPage) {
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('addProductForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('name').value.trim();
                const price = parseInt(document.getElementById('price').value, 10);
                const description = document.getElementById('description').value.trim();
                const imagelink = document.getElementById('imagelink').value.trim();

                let products = getProducts();
                const newId = products.length > 0 
                    ? Math.max(...products.map(p => p.id || 0)) + 1 
                    : 1;

                products.push({ 
                    id: newId,
                    name, 
                    price, 
                    description, 
                    imagelink 
                });

                setProducts(products);
                window.location.href = 'index.html';
            });
        }
    });
}
else {
    let productDetails = getProducts();
    let currentPage = 1;
    const productsPerPage = 10;
    let sortOrder = 'asc';
    let searchTerm = '';

    document.addEventListener('DOMContentLoaded', () => {
        renderProducts();
        const sortAscBtn = document.getElementById('sortAsc');
        const sortDescBtn = document.getElementById('sortDesc');
        if (sortAscBtn) sortAscBtn.addEventListener('click', () => sortProducts('asc'));
        if (sortDescBtn) sortDescBtn.addEventListener('click', () => sortProducts('desc'));

        const searchInput = document.getElementById('searchBar');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchTerm = e.target.value.toLowerCase();
                currentPage = 1;
                renderProducts();
            });
        }
    });

    function formatIndianCurrency(price) {
        return '₹' + price.toLocaleString('en-IN');
    }

    function renderProducts() {
        const container = document.getElementById('product-container');
        if (!container) return;
        container.innerHTML = '';

        productDetails = getProducts();

        let filteredProducts = productDetails;
        if (searchTerm && searchTerm.trim() !== '') {
            filteredProducts = productDetails.filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
        }

        const sortedProducts = [...filteredProducts].sort((a, b) =>
            sortOrder === 'asc' ? a.price - b.price : b.price - a.price
        );

        const start = (currentPage - 1) * productsPerPage;
        const paginatedProducts = sortedProducts.slice(start, start + productsPerPage);

        paginatedProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.imagelink}" class="product-image" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <p>${product.description}</p>
                <button class="delete-item">Delete Item</button>
            `;
            card.querySelector('.delete-item').addEventListener('click', () => {
                let products = getProducts();
                const index = products.findIndex(p => p.id === product.id);
                if (index !== -1) {
                    products.splice(index, 1);
                    setProducts(products);
                    const totalPages = Math.ceil(products.length / productsPerPage);
                    if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
                    productDetails = products;
                    renderProducts();
                }
            });
            container.appendChild(card);
        });

        renderPagination(filteredProducts.length);
    }

    function renderPagination(totalProducts) {
        const pagination = document.getElementById('pagination');
        if (!pagination) return;
        pagination.innerHTML = '';

        const pageCount = Math.ceil(totalProducts / productsPerPage);

        for (let i = 1; i <= pageCount; i++) {
            const btn = document.createElement('button');
            btn.className = `page-btn ${i === currentPage ? 'active-page' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', () => {
                currentPage = i;
                renderProducts();
            });
            pagination.appendChild(btn);
        }
    }

    function sortProducts(order) {
        sortOrder = order;
        currentPage = 1;
        renderProducts();
    }
}
