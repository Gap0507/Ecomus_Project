import React, { useState } from 'react';
import { MdOutlineDelete, MdAdd } from "react-icons/md";

const SizePicker = () => {
  const [newSize, setNewSize] = useState('');
  const [sizes, setSizes] = useState([
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL'
  ]);

  const handleAddSize = (e) => {
    e.preventDefault();
    if (newSize.trim()) {
      setSizes([...sizes, newSize.trim().toUpperCase()]);
      setNewSize('');
    }
  };

  const handleDeleteSize = (indexToDelete) => {
    setSizes(sizes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container py-4">
      {/* Add Size Form */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-white py-3">
          <h5 className="card-title mb-0">Add Size</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleAddSize}>
            <div className="row g-3 align-items-center">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="sizeInput"
                    placeholder="Enter size"
                    value={newSize}
                    onChange={(e) => setNewSize(e.target.value)}
                    maxLength={10}
                  />
                  <label htmlFor="sizeInput">Enter size (e.g., XL, 42, M)</label>
                </div>
              </div>
              <div className="col-auto">
                <button 
                  type="submit" 
                  className="btn btn-primary px-4"
                  disabled={!newSize.trim()}
                >
                  <MdAdd className="me-2" size={20} />
                  Add Size
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Sizes Grid */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white py-3">
          <h5 className="card-title mb-0">Available Sizes</h5>
        </div>
        <div className="card-body">
          {sizes.length > 0 ? (
            <div className="row g-4">
              {sizes.map((size, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="card h-100 border shadow-sm">
                    <div className="card-body p-3 text-center position-relative">
                      <button
                        className="btn btn-outline-danger btn-sm position-absolute top-0 end-0 m-2"
                        onClick={() => handleDeleteSize(index)}
                        title="Delete size"
                      >
                        <MdOutlineDelete size={18} />
                      </button>
                      <h3 className="display-6 mb-0 mt-2">{size}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5 text-muted">
              <p className="mb-0">No sizes added yet. Add your first size above.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SizePicker;