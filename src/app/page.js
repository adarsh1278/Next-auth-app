
import { revalidatePath } from 'next/cache';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function Home() {
  async function create(formData) {
    try {
      'use server';
      const file = formData.get('image');
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);

      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            tags: ['nextjs-server-actions-upload-sneakers'],
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        ).end(buffer);
      });

      console.log('result is', result);
      revalidatePath('/');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Add a New Image</h2>
      <form
        action={create}
        className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6"
      >
        <p className="mb-6">
          <label htmlFor="image" className="block font-semibold text-sm mb-2">
            Select an Image to Upload
          </label>
          <input
            id="image"
            className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="file"
            name="image"
            required
          />
        </p>
        <button
          className="m-2 p-6 bg-blue-800 text-white text-3xl"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            create(new FormData(e.target.form));
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Home;
