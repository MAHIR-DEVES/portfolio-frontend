export const uploadImageToImgbb = async (imageFile: File) => {
  const apiKey = process.env.NEXT_PUBLIC_API_IMGBB_KEY;

  const formData = new FormData();
  formData.append('image', imageFile);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  // Check if upload was successful
  if (data.success && data.data && data.data.url) {
    return data.data.url;
  }

  // Fallback to direct URL if available
  if (data.data && data.data.url) {
    return data.data.url;
  }

  throw new Error(data.error?.message || 'Image upload failed');
};
