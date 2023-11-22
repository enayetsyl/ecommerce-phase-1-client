import swal from 'sweetalert';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';
const VITE_IMAGE_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGE_HOSTING_KEY}`;

const EditBlog = () => {
  const axiosSecure = useAxiosSecure()
  const blogDetails = useLoaderData();
  console.log(blogDetails)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const featuredImage = formData.get('featured_image');

    try {
      // Upload featured image
      const featuredImageFormData = new FormData();
      featuredImageFormData.append('image', featuredImage);

      const featuredImageRes = await axios.post(
        image_hosting_api,
        featuredImageFormData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }
      );
      // console.log('Featured Image URL:', featuredImageRes.data);


      const blogTitle = formData.get('title');
      const blog = formData.get('desc');

      const updatedBlogData = {
        blogTitle,
        blog,
        featured_image: featuredImageRes.data.data.display_url,
      };
      console.log(updatedBlogData);
      // Send blog data to your server
      const updateBlog = await axiosSecure
        .patch(`/api/v1/allblogs/${blogDetails._id}`, updatedBlogData)
       {
        if(updateBlog.data.modifiedCount > 0) {
          swal("Congratulation!", "Your blog updated successfully!", "success");
        }
       }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return (
    <div className="py-12">
      <div className="container">
        <h2 className="text-center font-bold text-xl md:text-5xl mb-12">
          Edit Blog
        </h2>
        <form
          className="max-w-[900px] black-shadow mx-auto py-12 px-8 md:px-12 rounded-xl"
          onSubmit={handleSubmit}
        >
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* title */}
            <div className=" flex flex-col gap-y-3 w-full ">
              <label htmlFor="title" className="form-label">
                Product Title
              </label>
              <input
                type="text"
                placeholder="Your Product Title"
                name="title"
                className="input-with-shadow"
                required
                defaultValue={blogDetails.blogTitle}
              />
            </div>
          </div>

          {/* input group */}
          <div className="flex flex-col gap-4 justify-between mt-6">
            {/* description */}
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <textarea
              type="number"
              placeholder="Enter your product details"
              name="desc"
              className="input-with-shadow"
              rows="4"
              defaultValue={blogDetails.blog}
              required
            />
          </div>
          {/* featured image */}
          <div className="flex flex-col gap-4 justify-between mt-6">
            <label htmlFor="featured_image" className="form-label">
              Featured Image
            </label>
            <input
              type="file"
              name="featured_image"
              accept="image/png, image/gif, image/jpeg"
            />
          </div>

          <div className="mt-12">
            <button
              className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded w-full"
              type="submit"
            >
              Edit Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
