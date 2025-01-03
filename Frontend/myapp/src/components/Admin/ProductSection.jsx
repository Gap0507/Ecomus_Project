import React, { useState } from 'react'

const ProductSection = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: 0,
    category: '', // Store the ObjectId of the category
    sizes: [{ name: '' }], // Initial size array with one empty size
    colors: [{ name: '', hexCode: '' }], // Initial color array with one empty color
    stock: 0,
    images: [''], // Initial images array with one empty string
});
  return (
    <div>
      <h2>Manage Products</h2>
      {/* Accordion for Add Marquee */}
      <div className="accordion" id="addProductAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${accordionOpen ? '' : 'collapsed'}`}
              type="button"
              onClick={() => setAccordionOpen(!accordionOpen)}
              aria-expanded={accordionOpen}
              aria-controls="collapseOne"
            >
              Add Product
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${accordionOpen ? 'show' : ''}`}
            aria-labelledby="headingOne"
            data-bs-parent="#addProductAccordion"
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
  )
}

export default ProductSection