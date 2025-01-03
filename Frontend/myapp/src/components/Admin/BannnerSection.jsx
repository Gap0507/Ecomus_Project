import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';
import '../../assets/styles/HomeSection.css'; // Custom CSS for hover effects

const BannerSection = () => {
    const [heading, setHeading] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState("")
    const [toastOpen, setToastOpen] = useState(false);
    const [whichBanner, setWhichBanner] = useState(-1);
    const [accordionOpen, setAccordionOpen] = useState(false);

    const handleToastClose = () => {
        setToastOpen(false);
    };

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await axios.get('http://localhost:7777/homePage/banners');
                setBanners(response.data.banners || []); // Adjust to your API response
                setLoading(false);
            } catch (err) {
                console.error('Error fetching banners:', err.message);
                setError(err.message);
                setLoading(false);
            }
        };



        fetchBanners();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            alert('Please select an image!');
            return;
        }

        const formData = new FormData();
        formData.append('heading', heading);
        formData.append('text', text);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:7777/admin/add-banner', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setBanners([...banners, response.data.banner]); // Update list after adding
            setSuccess("Banner added successfully");
            setToastOpen(true);
            setHeading("")
            setText("")
            setImage(null)
        } catch (err) {
            console.error('Error adding banner:', err.message);
            alert('Error adding banner: ' + err.message);
        }
    };

    const handleOpenModal = (index) => {

        setWhichBanner(index)
        setHeading(banners[index].heading)
        setText(banners[index].text)
    }

    const handleUpdateBanner = async () => {
        if (whichBanner === -1) return;

        const formData = new FormData();
        formData.append('heading', heading);
        formData.append('text', text);
        if (image) formData.append('image', image);


        try {
            const response = await axios.put(
                `http://localhost:7777/admin/update-banner/${banners[whichBanner]._id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            // Update the banners list with the updated banner
            const updatedBanners = [...banners];
            updatedBanners[whichBanner] = response.data.banner;
            setBanners(updatedBanners);

            setSuccess("Banner updated successfully");
            setToastOpen(true);
        } catch (err) {
            console.error('Error updating banner:', err.message);
            alert('Error updating banner: ' + err.message);
        }
    };

    const handleDeleteBanner = async (index) => {
        try {

            const response = await axios.delete(
                `http://localhost:7777/admin/delete-banner/${banners[index]._id}`
            );

            // Update the banners list with the updated banner
            const updatedBanners = [...banners];
            updatedBanners.splice(index, 1)
            setBanners(updatedBanners);
            setSuccess("Banner deleted successfully");
            setToastOpen(true);
        } catch (err) {
            alert('Error deleting banner: ' + err.message);
        }
    }


    return (
        <div>
            <h2>Manage Banners</h2>
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
                                    <label className="form-label">Heading</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={heading}
                                        onChange={(e) => setHeading(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Text</label>
                                    <textarea
                                        className="form-control"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(e) => setImage(e.target.files[0])}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100">
                                    Add Banner
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {
                loading ? (
                    <p>Loading banners...</p>
                ) : error ? (
                    <p className="text-danger">Error: {error}</p>
                ) : (
                    <div className="mt-4">
                        <div className=' d-flex align-items-center gap-2'>

                            <h3 >Existing Banners </h3><h5>({banners.length} Banners)</h5>
                        </div>
                        {banners.length === 0 ? (
                            <p>No banners found.</p>
                        ) : (
                            <div className="row">
                                {banners.map((banner, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="card hover-card">
                                            <img
                                                src={`http://localhost:7777${banner.image}`} // Use relative path
                                                alt={banner.heading}
                                                style={{ height: '200px', objectFit: 'cover' }}
                                                className="card-img-top"
                                            />
                                            <div className="card-body">
                                                <h4 className="card-title">{banner.heading}</h4>
                                                <p className="card-text">{banner.text}</p>
                                            </div>
                                            <div className="hover-overlay">
                                                <button className="btn btn-outline-info w-50 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleOpenModal(index)}>Update</button>
                                                <button className="btn btn-outline-danger w-50 mt-2" onClick={() => handleDeleteBanner(index)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )
            }
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
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update Banner</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label class="col-form-label">Heading:</label>
                                    <input type="text" class="form-control" value={whichBanner != -1 && heading} onChange={(e) => setHeading(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Description:</label>
                                    <textarea class="form-control" id="message-text" value={whichBanner != -1 && text} onChange={(e) => setText(e.target.value)}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        required
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleUpdateBanner}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BannerSection;
