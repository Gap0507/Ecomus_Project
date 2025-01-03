import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

const ProductSection = () => {
    const initialProducts = [
        {
            id: 1,
            name: "Ribbed Tank Top",
            description: "Comfortable ribbed tank top perfect for summer",
            category: "Tops",
            variants: [
                {
                    color: { name: "Orange", hexCode: "#FFA500" },
                    size: "M",
                    price: 16.95,
                    stock: 100,
                    images: ["/api/placeholder/400/300"]
                },
                {
                    color: { name: "Black", hexCode: "#000000" },
                    size: "L",
                    price: 16.95,
                    stock: 150,
                    images: ["/api/placeholder/400/300"]
                }
            ]
        },
        {
            id: 2,
            name: "Ribbed Modal T-shirt",
            description: "Classic modal t-shirt with ribbed texture",
            category: "T-Shirts",
            variants: [
                {
                    color: { name: "White", hexCode: "#FFFFFF" },
                    size: "S",
                    price: 18.95,
                    stock: 75,
                    images: ["/api/placeholder/400/300"]
                },
                {
                    color: { name: "Pink", hexCode: "#FFC0CB" },
                    size: "M",
                    price: 18.95,
                    stock: 85,
                    images: ["/api/placeholder/400/300"]
                }
            ]
        }
    ];

    const [products, setProducts] = useState(initialProducts);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [variants, setVariants] = useState([{
        color: { name: '', hexCode: '' },
        size: '',
        price: '',
        stock: '',
        images: ["/api/placeholder/400/300"]
    }]);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [toastOpen, setToastOpen] = useState(false);
    const [errorToastOpen, setErrorToastOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [accordionOpen, setAccordionOpen] = useState(false);

    const categories = ['T-Shirts', 'Tops', 'Bottoms', 'Dresses', 'Accessories'];
    const colors = [
        { name: 'White', hexCode: '#FFFFFF' },
        { name: 'Black', hexCode: '#000000' },
        { name: 'Orange', hexCode: '#FFA500' },
        { name: 'Pink', hexCode: '#FFC0CB' },
        { name: 'Blue', hexCode: '#0000FF' }
    ];
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    const handleAddVariant = () => {
        setVariants([...variants, {
            color: { name: '', hexCode: '' },
            size: '',
            price: '',
            stock: '',
            images: ["/api/placeholder/400/300"]
        }]);
    };

    const handleRemoveVariant = (index) => {
        const newVariants = variants.filter((_, idx) => idx !== index);
        setVariants(newVariants);
    };

    const handleVariantChange = (index, field, value) => {
        const newVariants = [...variants];
        if (field === 'color') {
            const selectedColor = colors.find(c => c.name === value);
            newVariants[index].color = selectedColor;
        } else if (field === 'images') {
            const file = value.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    newVariants[index].images = [reader.result];
                    setVariants([...newVariants]);
                };
                reader.readAsDataURL(file);
            }
        } else {
            newVariants[index][field] = value;
        }
        if (field !== 'images') {
            setVariants(newVariants);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: editingProduct ? editingProduct.id : products.length + 1,
            name,
            description,
            category,
            variants
        };

        if (editingProduct) {
            setProducts(products.map(p => p.id === editingProduct.id ? newProduct : p));
            setSuccess('Product updated successfully');
        } else {
            setProducts([...products, newProduct]);
            setSuccess('Product added successfully');
        }

        setToastOpen(true);
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setDescription('');
        setCategory('');
        setVariants([{
            color: { name: '', hexCode: '' },
            size: '',
            price: '',
            stock: '',
            images: ["/api/placeholder/400/300"]
        }]);
        setEditingProduct(null);
        setAccordionOpen(false);
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setName(product.name);
        setDescription(product.description);
        setCategory(product.category);
        setVariants(product.variants);
        setAccordionOpen(true);
    };

    const handleDelete = (productId) => {
        setProducts(products.filter(p => p.id !== productId));
        setSuccess('Product deleted successfully');
        setToastOpen(true);
    };

    return (
        <div className="container-fluid px-4">
            <h2 className="mb-4">Manage Products</h2>

            <div className="accordion mb-4" id="productAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${accordionOpen ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => setAccordionOpen(!accordionOpen)}
                        >
                            {editingProduct ? 'Edit Product' : 'Add New Product'}
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${accordionOpen ? 'show' : ''}`}>
                        <div className="accordion-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Product Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Category</label>
                                        <select
                                            className="form-select"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            {categories.map((cat, index) => (
                                                <option key={index} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h5>Product Variants</h5>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary"
                                            onClick={handleAddVariant}
                                        >
                                            Add Variant
                                        </button>
                                    </div>

                                    {variants.map((variant, index) => (
                                        <div key={index} className="card mb-3 p-3">
                                            <div className="row g-3">
                                                <div className="col-12 col-sm-6 col-md-2">
                                                    <label className="form-label">Color</label>
                                                    <select
                                                        className="form-select"
                                                        value={variant.color.name}
                                                        onChange={(e) => handleVariantChange(index, 'color', e.target.value)}
                                                        required
                                                    >
                                                        <option value="">Select Color</option>
                                                        {colors.map((color, idx) => (
                                                            <option key={idx} value={color.name}>
                                                                {color.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-2">
                                                    <label className="form-label">Size</label>
                                                    <select
                                                        className="form-select"
                                                        value={variant.size}
                                                        onChange={(e) => handleVariantChange(index, 'size', e.target.value)}
                                                        required
                                                    >
                                                        <option value="">Select Size</option>
                                                        {sizes.map((size, idx) => (
                                                            <option key={idx} value={size}>{size}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-2">
                                                    <label className="form-label">Price</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        value={variant.price}
                                                        onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-2">
                                                    <label className="form-label">Stock</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        value={variant.stock}
                                                        onChange={(e) => handleVariantChange(index, 'stock', e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-3">
                                                    <label className="form-label">Image</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        onChange={(e) => handleVariantChange(index, 'images', e)}
                                                        accept="image/*"
                                                    />
                                                    {variant.images[0] && (
                                                        <div className="mt-2">
                                                            <img
                                                                src={variant.images[0]}
                                                                alt="Preview"
                                                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                                className="rounded"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-1 d-flex align-items-end">
                                                    {variants.length > 1 && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-danger"
                                                            onClick={() => handleRemoveVariant(index)}
                                                        >
                                                            ✕
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        {editingProduct ? 'Update Product' : 'Add Product'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
    <h3 className="mb-4">Product List</h3>
    {products.map((product) => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="card-title">{product.name}</h5>
                        <div>
                            <button
                                className="btn btn-light btn-sm me-2"
                                onClick={() => handleEdit(product)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(product.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><small className="text-muted">Category: {product.category}</small></p>
                    
                    <div className="mt-3">
                        <h6 className="mb-3">Product Variants:</h6>
                        {product.variants.map((variant, idx) => (
                            <div key={idx} className="mb-3 d-flex align-items-center">
                                <div className="flex-shrink-0" style={{ width: '40%' }}>
                                    <div className="text-center mb-2">
                                        <img
                                            src={variant.images[0]}
                                            className="img-fluid rounded"
                                            alt={`${product.name} - ${variant.color.name}`}
                                            style={{ 
                                                height: '120px',
                                                maxWidth: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-nowrap" style={{ width: '33%' }}>
                                            {variant.color.name} - {variant.size}
                                        </div>
                                        <div className="text-center" style={{ width: '33%' }}>
                                            ${variant.price}
                                        </div>
                                        <div className="text-end" style={{ width: '33%' }}>
                                            Stock: {variant.stock}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>



            <Snackbar
                open={toastOpen}
                autoHideDuration={3000}
                onClose={() => setToastOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert onClose={() => setToastOpen(false)} severity="success" sx={{ width: "100%" }}>
                    {success}
                </Alert>
            </Snackbar>

            <Snackbar
                open={errorToastOpen}
                autoHideDuration={3000}
                onClose={() => setErrorToastOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert onClose={() => setErrorToastOpen(false)} severity="error" sx={{ width: "100%" }}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default ProductSection;