import React from 'react';

const PropertyDetails = ({ images, description, mapImage, onFormSubmit }) => {
  return (
    <div style={{ margin: '20px' }}>
      {/* Images Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.slice(0, 6).map((image, index) => (
          <div key={index} style={{ flex: '1 1 calc(50% - 10px)', marginBottom: '10px' }}>
            <img
              src={image}
              alt={`Property image ${index + 1}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        ))}
      </div>

      {/* Description and Buttons Section */}
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <p>{description}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <button style={buttonStyle}>Request Details</button>
          <button style={buttonStyle}>Schedule a Showing</button>
          <button style={buttonStyle}>View More Listings</button>
        </div>
      </div>

      {/* Map and Social Sharing Section */}
      <div style={{ margin: '20px 0' }}>
        <img
          src={mapImage}
          alt="Map location"
          style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
        />
        <div style={{ textAlign: 'center' }}>
          <p>Share This Listing:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button style={socialButtonStyle}>Facebook</button>
            <button style={socialButtonStyle}>Twitter</button>
            <button style={socialButtonStyle}>LinkedIn</button>
          </div>
        </div>
      </div>

      {/* Interest Form Section */}
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <h3>Interested in this?</h3>
        <form onSubmit={onFormSubmit}>
          <input type="text" placeholder="Name" required style={inputStyle} />
          <input type="email" placeholder="Email" required style={inputStyle} />
          <textarea placeholder="Message" rows="4" style={textareaStyle}></textarea>
          <button type="submit" style={submitStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
};

// Inline Styles
const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const socialButtonStyle = {
  padding: '5px 10px',
  backgroundColor: '#ddd',
  color: '#000',
  border: '1px solid #ccc',
  borderRadius: '5px',
  cursor: 'pointer',
};

const inputStyle = {
  display: 'block',
  width: '80%',
  margin: '10px auto',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  display: 'block',
  width: '80%',
  margin: '10px auto',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const submitStyle = {
  padding: '10px 20px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default PropertyDetails;
