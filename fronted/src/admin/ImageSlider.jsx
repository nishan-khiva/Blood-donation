import { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import Cropper from "react-easy-crop";

/* ---------- crop helper ---------- */
const getCroppedImg = async (imageSrc, crop) => {
  const image = new Image();
  image.src = imageSrc;
  await new Promise((resolve) => (image.onload = resolve));

  const canvas = document.createElement("canvas");
  canvas.width = crop.width;
  canvas.height = crop.height;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        resolve(new File([blob], "slider.jpg", { type: "image/jpeg" }));
      },
      "image/jpeg",
      0.9
    );
  });
};

export default function SliderAdmin() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [replaceId, setReplaceId] = useState(null);
  const [slot, setSlot] = useState(1);
  const [loading, setLoading] = useState(false);

  // crop states
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  };

  /* ---------- fetch images ---------- */
  const fetchImages = async () => {
    try {
      const res = await api.get("/api/slider/");
      setImages(res.data);
    } catch (err) {
      alert("Failed to fetch slider images");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  /* ---------- select handlers ---------- */
  const handleNewSelect = (file) => {
    setReplaceId(null);
    setPreview(URL.createObjectURL(file));
  };

  const handleReplaceSelect = (id, file) => {
    setReplaceId(id);
    setPreview(URL.createObjectURL(file));
  };

  /* ---------- upload cropped image ---------- */
  const handleCropAndUpload = async () => {
    if (!croppedAreaPixels || !preview) return;

    if (!replaceId && images.length >= 4) {
      alert("Maximum 4 images allowed");
      return;
    }

    setLoading(true);

    try {
      const croppedFile = await getCroppedImg(
        preview,
        croppedAreaPixels
      );

      const formData = new FormData();
      formData.append("image", croppedFile);
      if (!replaceId) formData.append("slot", slot);

      if (replaceId) {
        await api.put(`/api/slider/${replaceId}`, formData);
        alert("Image replaced successfully");
      } else {
        await api.post("/api/slider/upload", formData);
        alert("Image uploaded successfully");
      }

      setPreview(null);
      setReplaceId(null);
      setSlot(1);
      fetchImages();
    } catch (err) {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- delete ---------- */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;
    await api.delete(`/api/slider/${id}`);
    fetchImages();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-[#7f0210] mb-6">
        Manage Slider Images
      </h2>

      {/* -------- CROPPER -------- */}
      {preview && (
        <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-4 mb-6">
          {!replaceId && (
            <div className="text-center mb-2">
              <label className="mr-2 font-semibold">Slot:</label>
              <select
                value={slot}
                onChange={(e) => setSlot(Number(e.target.value))}
                className="border rounded px-2 py-1"
              >
                {[1, 2, 3, 4].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          <div className="relative w-full h-[300px] bg-black rounded">
            <Cropper
              image={preview}
              crop={crop}
              zoom={zoom}
              aspect={16 / 5}   // 👈 slider banner ratio (~500px height feel)
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>

          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(e.target.value)}
            className="w-full mt-3"
          />

          <button
            onClick={handleCropAndUpload}
            disabled={loading}
            className="w-full mt-4 bg-[#7f0210] text-white py-2 rounded"
          >
            {loading ? "Uploading..." : replaceId ? "Crop & Replace" : "Crop & Upload"}
          </button>
        </div>
      )}

      {/* -------- NEW UPLOAD -------- */}
      {!preview && images.length < 4 && (
        <label className="block mb-6 border-2 border-dashed p-6 rounded-xl text-center cursor-pointer">
          <p className="text-gray-500">Click to select image</p>
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) =>
              e.target.files && handleNewSelect(e.target.files[0])
            }
          />
        </label>
      )}

      {/* -------- IMAGE LIST -------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div key={img._id} className="bg-white shadow rounded-xl p-3">
            <img
              src={`${import.meta.env.VITE_API_URL}/${img.image}`}
              className="h-40 w-full object-cover rounded"
            />
            <div className="flex gap-2 mt-3">
              <label className="flex-1 bg-blue-600 text-white text-center py-1 rounded cursor-pointer">
                Edit
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) =>
                    e.target.files &&
                    handleReplaceSelect(img._id, e.target.files[0])
                  }
                />
              </label>
              <button
                onClick={() => handleDelete(img._id)}
                className="flex-1 bg-red-600 text-white py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Maximum 4 slider images allowed
      </p>
    </div>
  );
}
