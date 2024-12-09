// Fetch data from the JSON file
fetch('Product.json')
    .then(response => response.json())
    .then(data => {
        // Assuming the JSON structure is an array of product categories and their items
        data.forEach(category => {
            // Create a section for each category
            const section = document.getElementById(category.name);
            if (section) {
                category.products.forEach(product => {
                    // Create product elements
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');

                    productDiv.innerHTML = `
                        <h3>${product.name}</h3>
                        <img src="${product.image}" alt="${product.name}">
                        <p>Price: ${product.price}</p>
                        <input type="number" value="1" min="1">
                        <button class="add-to-cart">Add to Cart</button>
                    `;

                    // Append product to the category section
                    section.appendChild(productDiv);
                });
            }
        });
    })
    .catch(error => console.error('Error fetching products JSON:', error));
