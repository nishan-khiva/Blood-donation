import { useEffect, useState } from "react";
import api from "../api/axiosInstance";

export default function SliderAdmin() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [replaceId, setReplaceId] = useState(null);
  const [slot, setSlot] = useState(1); // for new upload
  const [loading, setLoading] = useState(false);

  // Fetch slider images
  const fetchImages = async () => {
    try {
      const res = await api.get("/api/slider/");
      setImages(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Failed to fetch slider images");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle new image selection
  const handleNewSelect = (file) => {
    if (!file) return;
    setReplaceId(null);
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  // Handle replace image selection
  const handleReplaceSelect = (id, file) => {
    if (!file) return;
    setReplaceId(id);
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  // Upload or replace image
  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image first");
      return;
    }

    // Maximum 4 images for new upload
    if (!replaceId && images.length >= 4) {
      alert("Maximum 4 images allowed");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    if (!replaceId) formData.append("slot", slot);

    try {
      if (replaceId) {
        await api.put(`/api/slider/${replaceId}`, formData);
        alert("Image replaced successfully");
      } else {
        await api.post("/api/slider/upload", formData);
        alert("Image uploaded successfully");
      }

      // Reset state
      setFile(null);
      setPreview(null);
      setReplaceId(null);
      setSlot(1);

      fetchImages();
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // Delete image
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      await api.delete(`/api/slider/${id}`);
      alert("Image deleted successfully");
      fetchImages();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete image");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#7f0210] text-center mb-6">
        Manage Slider Images
      </h2>

      {/* Preview Section */}
      {preview && (
        <div className="max-w-md mx-auto mb-6 bg-white shadow-lg rounded-xl p-4">
          {!replaceId && (
            <div className="mb-3 text-center">
              <label className="mr-2 font-semibold">Slot:</label>
              <select
                value={slot}
                onChange={(e) => setSlot(Number(e.target.value))}
                className="border rounded px-2 py-1"
              >
                {[1, 2, 3, 4].map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          )}

          <p className="text-center text-sm font-semibold mb-2">Image Preview</p>

          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg"
          />

          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full mt-4 bg-[#7f0210] text-white py-2 rounded-lg hover:bg-[#5c010b]"
          >
            {loading
              ? "Uploading..."
              : replaceId
                ? "Replace Image"
                : "Upload Image"}
          </button>
        </div>
      )}

      {/* New Upload Box */}
      {images.length < 4 && !preview && (
        <label className="block mb-6 border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:border-[#7f0210]">
          <p className="text-gray-500">Click to select new image</p>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              if (!e.target.files || !e.target.files[0]) return;
              handleNewSelect(e.target.files[0]);
            }}
          />
        </label>
      )}

      {/* Image List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div key={img._id} className="bg-white shadow rounded-xl p-3">
            <img
              src={`${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/${img.image.replace(/^\/?/, '')}`}
              alt="Slider"
              className="h-40 w-full object-cover rounded-lg"
            />
            <div className="flex gap-2 mt-3">
              <label className="flex-1 bg-blue-600 text-white py-1 rounded text-sm text-center cursor-pointer">
                Edit
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    if (!e.target.files || !e.target.files[0]) return;
                    handleReplaceSelect(img._id, e.target.files[0]);
                  }}
                />
              </label>

              <button
                onClick={() => handleDelete(img._id)}
                className="flex-1 bg-red-600 text-white py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Maximum 4 slider images allowed
      </p>
    </div>
  );
}
