import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import swal from 'sweetalert';
import { GridLoader } from 'react-spinners';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const AllBlog = () => {
  const axiosPublic = useAxiosPublic();
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['blog'],
    queryFn: () =>
      axiosPublic
        .get('/api/v1/allblogs')
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log('axios get error', error);
          throw error;
        }),
  });

  const handleDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await axiosPublic.delete(`/api/v1/allblogs/${id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();

          swal(' Your  file has been deleted!', {
            icon: 'success',
          });
        }
      } else {
        swal('Your file is safe!');
      }
    });
  };

  return (
    <div className="my-12 overflow-x-auto h-[700px] md:h-auto">
      <div className="container">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          All Blogs
        </h2>
        {isLoading ? (
          <div className="flex justify-center items-center text-center w-full my-20">
            <GridLoader color="#36d7b7" size={50} />
          </div>
        ) : (
          <Table striped>
            <Table.Head>
              <Table.HeadCell className="text-start">Thumbnail</Table.HeadCell>
              <Table.HeadCell className="text-start">Title</Table.HeadCell>
              <Table.HeadCell className="text-start">Edit</Table.HeadCell>
              <Table.HeadCell className="text-start">Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.map((blog) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={blog._id}
                >
                  <Table.Cell>
                    <img
                      src={blog.featured_image}
                      alt=""
                      className="w-[80px] h-[80px] object-cover"
                    />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
                    {blog.blogTitle
}
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/dashboard/edit-blog/${blog._id}`}
                      className="cursor-pointer hover:text-blue-800"
                    >
                      <FaEdit />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <FaTrash
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDelete(blog._id)}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </div>
    </div>
  );
};

export default AllBlog;
