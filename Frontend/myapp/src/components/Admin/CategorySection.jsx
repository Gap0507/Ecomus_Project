import React, { useEffect, useRef, useState } from 'react'
import { Alert, Snackbar } from '@mui/material';
import axios from 'axios';

const CategorySection = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null);
    const [updateName, setUpdateName] = useState('');
    const [updateDescription, setUpdateDescription] = useState('')
    const [updateImage, setUpdateImage] = useState(null);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error2, setError2] = useState(null);
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [toastOpen, setToastOpen] = useState(false);
    const [errorToastOpen, setErrorToastOpen] = useState(false);
    const [whichCategory, setWhichCategory] = useState(-1);
    const [accordionOpen, setAccordionOpen] = useState(false);

    const fileInputRef = useRef(null);
    const fileInputRef1 = useRef(null);

    const handleToastClose = () => {
        setToastOpen(false);
    };
    const handleErrorToastClose = () => {
        setErrorToastOpen(false);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:7777/homePage/categories');

                setCategories(response.data.categories || []); // Adjust to your API response
                setLoading(false);
            } catch (err) {
                setError2(err.message);
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            alert('Please select an image!');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:7777/admin/create-category', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setCategories([...categories, response.data.category]); // Update list after adding
            setSuccess("Category added successfully");
            setToastOpen(true);
            setName("")
            setDescription("")
            setImage(null)
            if (fileInputRef.current) {
                fileInputRef.current.value = ""; // Reset file input
            }
        } catch (err) {
            setError(err.response.data.message)
            setErrorToastOpen(true)
        }
    };

    const handleOpenModal = (index) => {

        setWhichCategory(index)
        setUpdateName(categories[index].name)
        setUpdateDescription(categories[index].description)
    }

    const handleUpdateCategory = async () => {
        if (whichCategory === -1) return;

        const formData = new FormData();
        formData.append('name', updateName);
        formData.append('description', updateDescription);
        if (updateImage) formData.append('image', updateImage);

        try {
            const response = await axios.put(
                `http://localhost:7777/admin/update-category/${categories[whichCategory]._id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            // Update the banners list with the updated banner
            const updatedCategories = [...categories];
            updatedCategories[whichCategory] = response.data.category;
            setCategories(updatedCategories);

            setSuccess("Category updated successfully");
            setToastOpen(true);
            if (fileInputRef1.current) {
                fileInputRef1.current.value = ""; // Reset file input
            }
        } catch (err) {
            setError(err.response.data.message)
            setErrorToastOpen(true)
        }
    };

    const handleDeleteCategory = async (index) => {
        try {

            const response = await axios.delete(
                `http://localhost:7777/admin/delete-category/${categories[index]._id}`
            );

            // Update the categories list with the updated banner
            const updatedCategories = [...categories];
            updatedCategories.splice(index, 1)
            setCategories(updatedCategories);
            setSuccess("Category deleted successfully");
            setToastOpen(true);
        } catch (err) {
            console.log(err);

            setError(err.response.data.message)
            setErrorToastOpen(true)
        }
    }
    return (
        <div>
            <h2>Manage Categories</h2>
            {/* Accordion for Add Marquee */}
            <div className="accordion" id="addMarqueeAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className={`accordion-button ${accordionOpen ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => setAccordionOpen(!accordionOpen)}
                            aria-expanded={accordionOpen}
                            aria-controls="collapseOne"
                        >
                            Add Marquee
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${accordionOpen ? 'show' : ''}`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#addMarqueeAccordion"
                    >
                        <div className="accordion-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(e) => setImage(e.target.files[0])}
                                        ref={fileInputRef}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100">
                                    Add Category
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {loading ? (
                <p>Loading categories...</p>
            ) : error2 ? (
                <p className="text-danger">Error: {error2}</p>
            ) : (
                <div className="mt-4">
                    <div className=' d-flex align-items-center gap-2'>

                        <h3 >Existing Categories </h3><h5>({categories.length} Categories)</h5>
                    </div>
                    {categories.length === 0 ? (
                        <p>No categories found.</p>
                    ) : (
                        <div className="row">
                            {categories.map((category, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="card hover-card">
                                        <img
                                            src={`http://localhost:7777${category.image}`} // Use relative path
                                            alt={category.image}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                            className="card-img-top"
                                        />
                                        <div className="card-body">
                                            <h4 className="card-title">{category.name}</h4>
                                            <p className="card-text">{category.description}</p>
                                        </div>
                                        <div className="hover-overlay">
                                            <button className="btn btn-outline-info w-50 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleOpenModal(index)}>Update</button>
                                            <button className="btn btn-outline-danger w-50 mt-2" onClick={() => handleDeleteCategory(index)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            {/* Snackbar */}
            <Snackbar
                open={toastOpen}
                autoHideDuration={3000}
                onClose={handleToastClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert onClose={handleToastClose} severity="success" sx={{ width: "100%" }}>
                    {success}
                </Alert>
            </Snackbar>
            <Snackbar
                open={errorToastOpen}
                autoHideDuration={3000}
                onClose={handleErrorToastClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert onClose={handleErrorToastClose} severity="error" sx={{ width: "100%" }}>
                    {error}
                </Alert>
            </Snackbar>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update Category</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" value={whichCategory != -1 && updateName} onChange={(e) => setUpdateName(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Description:</label>
                                    <textarea class="form-control" id="message-text" value={whichCategory != -1 && updateDescription} onChange={(e) => setUpdateDescription(e.target.value)}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        required
                                        onChange={(e) => setUpdateImage(e.target.files[0])}
                                        ref={fileInputRef1}
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleUpdateCategory}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategorySection