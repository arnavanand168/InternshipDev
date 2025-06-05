const descInput = document.getElementById('description');
const addBtn = document.querySelector('button[type="submit"]');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const imagelinkInput = document.getElementById('imagelink');

const descCounter = document.createElement('span');
descCounter.id = 'desc-counter';
descCounter.style.position = 'absolute';
descCounter.style.bottom = '8px';
descCounter.style.right = '10px';
descCounter.style.fontSize = '0.9em';
descCounter.style.color = '#555';
descCounter.textContent = '0/10';
descInput.parentNode.style.position = 'relative';
descInput.parentNode.appendChild(descCounter);

const descError = document.getElementById('desc-error') || document.createElement('div');
descError.id = 'desc-error';
descError.style.color = 'red';
descError.style.fontSize = '0.95em';
descError.style.display = 'none';
descError.style.marginBottom = '8px';
if (!document.getElementById('desc-error')) {
    descInput.parentNode.parentNode.insertBefore(descError, descInput.parentNode.nextSibling);
}

function validateForm() {
    const nameFilled = nameInput.value.trim() !== '';
    const priceFilled = priceInput.value.trim() !== '';
    const descFilled = descInput.value.trim() !== '';
    const imageFilled = imagelinkInput.value.trim() !== '';
    const descValid = descInput.value.length <= 10;

    if (nameFilled && priceFilled && descFilled && imageFilled && descValid) {
        addBtn.disabled = false;
        addBtn.style.opacity = '1';
        addBtn.style.cursor = 'pointer';
    } else {
        addBtn.disabled = true;
        addBtn.style.opacity = '0.6';
        addBtn.style.cursor = 'not-allowed';
    }
}

[nameInput, priceInput, descInput, imagelinkInput].forEach(input => {
    input.addEventListener('input', validateForm);
});

descInput.addEventListener('input', function() {
    const len = descInput.value.length;
    descCounter.textContent = `${len}/10`;
    if (len > 10) {
        descInput.style.borderColor = 'red';
        descCounter.style.color = 'red';
        descError.style.display = 'block';
        descError.textContent = 'Character limit exceeded';
    } else {
        descInput.style.borderColor = '';
        descCounter.style.color = '#555';
        descError.style.display = 'none';
    }
    validateForm();
});

validateForm();

document.getElementById('addProductForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const price = parseInt(priceInput.value, 10);
    const description = descInput.value.trim();
    const imagelink = imagelinkInput.value.trim();

    if (description.length > 10) {
        descInput.style.borderColor = 'red';
        descCounter.style.color = 'red';
        descError.style.display = 'block';
        descError.textContent = 'Character limit exceeded';
        validateForm();
        return;
    }

    let products = JSON.parse(localStorage.getItem('products')) || [];
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

    localStorage.setItem('products', JSON.stringify(products));

    alert('Product Added Successfully!');
    document.getElementById('addProductForm').reset();
    descCounter.textContent = '0/10';
    validateForm();
});
