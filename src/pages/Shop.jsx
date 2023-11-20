import Pagination from '../components/Pagination';
import SingleItem from '../components/SingleItem';

const Shop = () => {
  return (
    <div className="my-12">
      <div className="container">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          Our Shop
        </h2>
        <div className="grid gap-4 md:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="">
            <SingleItem />
          </div>
          <div className="">
            <SingleItem />
          </div>
          <div className="">
            <SingleItem />
          </div>
          <div className="">
            <SingleItem />
          </div>
          <div className="">
            <SingleItem />
          </div>
          <div className="">
            <SingleItem />
          </div>
          <div className="">
            <SingleItem />
          </div>
          <div className="">
            <SingleItem />
          </div>
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default Shop;
