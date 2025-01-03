import React, { useState } from 'react';

const ColorPicker = () => {
  const [newColor, setNewColor] = useState('#000000');
  const [newColorName, setNewColorName] = useState('');
  const [customColors, setCustomColors] = useState([
    { name: 'Primary Blue', hex: '#007bff' },
    { name: 'Success Green', hex: '#28a745' },
    { name: 'Warning Yellow', hex: '#ffc107' },
    { name: 'Danger Red', hex: '#dc3545' },
    { name: 'Info Cyan', hex: '#17a2b8' },
    { name: 'Dark Gray', hex: '#343a40' }
  ]);

  const handleAddColor = (e) => {
    e.preventDefault();
    if (newColorName.trim() && newColor) {
      setCustomColors([
        ...customColors,
        { name: newColorName.trim(), hex: newColor }
      ]);
      setNewColorName('');
      setNewColor('#000000');
    }
  };

  const handleDeleteColor = (indexToDelete) => {
    setCustomColors(customColors.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container py-4">
      {/* Add Color Section */}
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-white">
          <h5 className="mb-0">Add New Color</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleAddColor}>
            <div className="row align-items-end">
              <div className="col-md-3 mb-3 mb-md-0">
                <label className="form-label">Pick Color</label>
                <input
                  type="color"
                  className="form-control form-control-color w-100"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  title="Choose your color"
                />
              </div>
              <div className="col-md-6 mb-3 mb-md-0">
                <label className="form-label">Color Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter color name"
                  value={newColorName}
                  onChange={(e) => setNewColorName(e.target.value)}
                />
              </div>
              <div className="col-md-3">
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                  disabled={!newColorName.trim()}
                >
                  Add Color
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Colors Grid */}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">My Colors</h5>
        </div>
        <div className="card-body">
          <div className="row g-3">
            {customColors.map((color, index) => (
              <div key={index} className="col-md-3">
                <div className="card h-100">
                  <div 
                    className="card-img-top"
                    style={{
                      height: '120px',
                      backgroundColor: color.hex
                    }}
                  ></div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h6 className="card-title mb-1">{color.name}</h6>
                        <p className="text-muted small mb-0">{color.hex.toUpperCase()}</p>
                      </div>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteColor(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;