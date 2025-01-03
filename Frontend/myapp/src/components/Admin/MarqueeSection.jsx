import { Snackbar, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const MarqueeSection = () => {
  const [string, setString] = useState("");
  const [updateString, setUpdateString] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const [marquee, setMarquee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMarquee, setSelectedMarquee] = useState(null);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleToastClose = () => {
    setToastOpen(false);
  };

  useEffect(() => {
    const fetchMarquee = async () => {
      try {
        const response = await axios.get('http://localhost:7777/homePage/marquee');
        setMarquee(response.data.marquee || []); // Adjust to your API response
        setLoading(false);
      } catch (err) {
        console.error('Error fetching marquee:', err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMarquee();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:7777/admin/create-marquee', { marquee: string });

      setMarquee([...marquee, response.data.marquee]); // Update list after adding
      setSuccess("Marquee added successfully");
      setToastOpen(true);
      setString("");
    } catch (err) {
      console.error('Error adding marquee:', err.message);
      alert('Error adding marquee: ' + err.message);
    }
  };

  const handleMarqueeClick = async (index) => {
    try {
      setUpdateString(marquee[index].string)
      // Check if the clicked marquee is already active
      if (marquee[index].isActive) {
        return; // Exit the function if the marquee is already active
      }

      // Make the API call to set the selected marquee as active
      await axios.post(`http://localhost:7777/admin/set-marquee/${marquee[index]._id}`);

      // Update the marquee state to set isActive true for the clicked marquee and false for others
      const updatedMarquee = marquee.map((item, idx) => ({
        ...item,
        isActive: idx === index, // Set isActive to true for the clicked marquee, false for others
      }));

      setMarquee(updatedMarquee); // Update the state
      setSuccess("Marquee set successfully");
      setToastOpen(true);
    } catch (err) {
      console.error('Error updating marquee:', err.message);
      alert('Error updating marquee: ' + err.message);
    }
  };

  const handleUpdateMarquee = async () => {

    const index = marquee.findIndex((e) => e.isActive)

    try {
      const response = await axios.put(
        `http://localhost:7777/admin/update-marquee/${marquee[index]._id}`,
        { updateString },
      );

      // Update the banners list with the updated banner
      const updatedMarquee = [...marquee];
      updatedMarquee[index] = response.data.marquee;
      setMarquee(updatedMarquee);

      setSuccess("Marquee updated successfully");
      setToastOpen(true);
    } catch (err) {
      console.error('Error updating marquee:', err.message);
      alert('Error updating marquee: ' + err.message);
    }
  };

  const handleDeleteMarquee = async (index) => {
    try {

      const response = await axios.delete(
        `http://localhost:7777/admin/delete-marquee/${marquee[index]._id}`
      );

      // Update the marquee list with the updated banner
      const updatedMarquee = [...marquee];
      updatedMarquee.splice(index, 1)
      setMarquee(updatedMarquee);
      setSuccess("Marquee deleted successfully");
      setToastOpen(true);
    } catch (err) {
      alert('Error deleting marquee: ' + err.message);
    }
  }

  return (
    <div>
      <h2>Manage Marquee</h2>
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
                  <label className="form-label">String</label>
                  <input
                    type="text"
                    className="form-control"
                    value={string}
                    placeholder="Enter string"
                    onChange={(e) => setString(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-outline-primary w-100">
                  Add Marquee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <p>Loading banners...</p>
      ) : error ? (
        <p className="text-danger">Error: {error}</p>
      ) : (
        <div className="mt-4">
          <div className="d-flex align-items-center gap-2">
            <h3>Existing Marquee</h3>
            <h5>({marquee.length} Marquee)</h5>
          </div>
          {marquee.length === 0 ? (
            <p>No marquee found.</p>
          ) : (
            <div className="row">
              {marquee.map((m, index) => (
                <div className="col-md-4" key={index}>
                  <div
                    className={`card ${selectedMarquee === index || m.isActive ? 'border-primary' : ''}`}
                    style={{
                      borderWidth: selectedMarquee === index || m.isActive ? '2px' : '1px',
                      boxShadow: selectedMarquee === index || m.isActive ? '0 0 10px rgba(0, 123, 255, 0.5)' : 'none',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleMarqueeClick(index)}
                  >
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="card-title d-inline ms-2">{m.string}</h6>
                      </div>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-outline-info"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <FaRegEdit />
                        </button>
                        <button className="btn btn-outline-danger" onClick={() => handleDeleteMarquee(index)}>
                          <MdOutlineDelete />
                        </button>
                      </div>
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
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Update Marquee</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label class="col-form-label">String:</label>
                  <input type="text" class="form-control" value={updateString} onChange={(e) => setUpdateString(e.target.value)} />
                </div>

              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={() => handleUpdateMarquee()}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
