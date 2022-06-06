import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality... Eg: Indian"
        value={formData.nationality}
        onChange={(e) =>
          setFormData((prev) => {
            return {
              ...prev,
              nationality: e.target.value
            };
          })
        }
      />
      <input
        type="text"
        placeholder="Other..."
        value={formData.other}
        onChange={(e) =>
          setFormData((prev) => {
            return {
              ...prev,
              other: e.target.value
            };
          })
        }
      />
    </div>
  );
}

export default OtherInfo;
