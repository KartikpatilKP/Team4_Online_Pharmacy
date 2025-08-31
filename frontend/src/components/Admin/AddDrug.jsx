import React, { useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../Admin/AdminSidebar';
import '../../styles/AdminDashboard.css';
import '../../styles/AddDrug.css';

function AddDrug() {
  const [collapsed, setCollapsed] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    type: '',
    price: '',
    availableQuantity: '',
    rating: '',
    banned: false,
    description: '',
    imageFile: null
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      setFormData((prev) => ({ ...prev, imageFile: file }));
      if (file) {
        setPreview(URL.createObjectURL(file));
      } else {
        setPreview(null);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatted = new FormData();
    formatted.append('name', formData.name);
    formatted.append('company', formData.company);
    formatted.append('type', formData.type);
    formatted.append('price', parseFloat(formData.price));
    formatted.append('availableQuantity', parseInt(formData.availableQuantity));
    formatted.append('rating', parseInt(formData.rating));
    formatted.append('banned', formData.banned);
    formatted.append('description', formData.description);
    if (formData.imageFile) {
      formatted.append('imageFile', formData.imageFile);
    }

    try {
      await axios.post('http://localhost:8080/api/medicines/add', formatted);
      alert('Medicine added successfully!');
      setFormData({
        name: '',
        company: '',
        type: '',
        price: '',
        availableQuantity: '',
        rating: '',
        banned: false,
        description: '',
        imageFile: null
      });
      setPreview(null);
    } catch (err) {
      console.error('Error uploading medicine:', err.response?.data || err);
      alert('Error adding medicine. See console.');
    }
  };

  return (
    <div className="admin-dashboard-root">
      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main
        className="admin-main-content"
        style={{ marginLeft: collapsed ? 60 : 250, width: `calc(100vw - ${collapsed ? 60 : 250}px)` }}
      >
        <section className="add-drug-section">
          <form className="drug-form" onSubmit={handleSubmit}>
            <h2 className="gradient-heading">Add Drug</h2>
            <p className="sub-heading">Enter the details of the drug</p>

            <div className="form-grid">
              <input
                type="text"
                name="name"
                placeholder="Drug Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="availableQuantity"
                placeholder="Quantity"
                value={formData.availableQuantity}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="type"
                placeholder="Dosage"
                value={formData.type}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Manufacturer"
                value={formData.company}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                min="1"
                max="5"
                value={formData.rating}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="description"
              placeholder="Description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            />
            
            <div className="form-group toggle-switch">
              <label className="switch-label">Is Banned?</label>
              <label className="switch">
                <input
                  type="checkbox"
                  name="banned"
                  checked={formData.banned}
                  onChange={handleChange}
                />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="file-upload">
              <div className="drop-area">Drop image here</div>
              <label htmlFor="imageFile">Choose File</label>
              <input
                type="file"
                id="imageFile"
                name="imageFile"
                accept="image/*"
                onChange={handleChange}
                hidden
              />
            </div>

            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Preview" />
              </div>
            )}

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AddDrug;
