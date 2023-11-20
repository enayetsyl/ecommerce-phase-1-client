import { useState } from 'react';
import { Link } from 'react-router-dom';

import eight from '../assets/eight.png';
import eleven from '../assets/eleven.png';
import five from '../assets/five.png';

const SingleProduct = () => {
  const [activeImage, setActiveImage] = useState(eight);

  return (
    <div className="my-12">
      <div className="container">
        <div className="grid gap-4 md:gap-10 md:grid-cols-2">
          {/* images */}
          <div>
            <div className="box-border overflow-hidden rounded-lg">
              <img
                src={activeImage}
                alt=""
                className=" hover:scale-110 duration-700"
              />
            </div>
            <div className="flex items-center gap-4 my-5">
              <img
                src={eight}
                alt=""
                className="rounded-lg max-w-[80px] max-h-[80px] cursor-pointer hover:scale-105 duration-500"
                onClick={() => setActiveImage(eight)}
              />
              <img
                src={eleven}
                alt=""
                className="rounded-lg max-w-[80px] max-h-[80px] cursor-pointer hover:scale-105 duration-500"
                onClick={() => setActiveImage(eleven)}
              />
              <img
                src={five}
                alt=""
                className="rounded-lg max-w-[80px] max-h-[80px] cursor-pointer hover:scale-105 duration-500"
                onClick={() => setActiveImage(five)}
              />
            </div>
          </div>
          {/* contents */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl md:text-3xl">
              Traditional Cotton Panjabi
            </h2>
            <p className="mb-4">
              <span className="text-lg font-bold text-red-500 opacity-75 line-through">
                $1999
              </span>
              <span className="text-2xl font-bold text-black"> $499</span>
            </p>
            <form
              action=""
              className="bg-white rounded black-shadow p-6 md:px-10"
            >
              {/* input group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between mt-6">
                {/* Size */}
                <div className="flex flex-col gap-y-2 w-full">
                  <label htmlFor="size" className="form-label">
                    Size
                  </label>
                  <select
                    name="size"
                    required
                    className="rounded input-with-shadow text-lg font-bold !focus:outline-0 "
                  >
                    <option value="" hidden defaultChecked>
                      Select Size
                    </option>
                    <option value="xs" className="text-gray-700 py-3">
                      XS
                    </option>
                    <option value="s" className="text-gray-700 py-3">
                      S
                    </option>
                    <option value="m" className="text-gray-700 py-3">
                      M
                    </option>
                    <option value="l" className="text-gray-700 py-3">
                      L
                    </option>
                    <option value="xl" className="text-gray-700 py-3">
                      XL
                    </option>
                  </select>
                </div>
                {/* Color */}
                <div className=" flex flex-col gap-y-3 w-full">
                  <label htmlFor="color" className="form-label">
                    Color
                  </label>
                  <select
                    name="color"
                    required
                    className="rounded input-with-shadow text-lg font-bold !focus:outline-0"
                  >
                    <option value="" hidden defaultChecked>
                      Select Color
                    </option>
                    <option value="black" className="text-gray-700 py-3">
                      Black
                    </option>
                    <option value="red" className="text-gray-700 py-3">
                      Red
                    </option>
                    <option value="white" className="text-gray-700 py-3">
                      White
                    </option>
                    <option value="green" className="text-gray-700 py-3">
                      Green
                    </option>
                    <option value="blue" className="text-gray-700 py-3">
                      Blue
                    </option>
                  </select>
                </div>
                {/* Quantity */}
                <div className=" flex flex-col gap-y-3 w-full">
                  <label htmlFor="quantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    required
                    className="input-with-shadow"
                  />
                </div>
              </div>
              <button
                className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded mt-6 w-full"
                type="submit"
              >
                Add To Cart
              </button>
            </form>
          </div>
        </div>

        {/* description */}
        <div className="mt-6">
          <h2 className="font-bold text-2xl md:text-3xl mb-4">
            Product Details
          </h2>
          <p className="font-[poppins] leading-loose max-w-4xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            quasi, labore aliquid eum suscipit error, debitis eligendi voluptate
            facilis nesciunt ad reprehenderit officia nisi placeat perspiciatis
            iste obcaecati magni inventore quod ipsam minima architecto, quidem
            alias incidunt. At ratione quos minus perspiciatis et blanditiis,
            officiis consequatur quo quidem facere? Deserunt eius maiores dicta
            modi, assumenda facere aliquam id. Eius cupiditate beatae
            consequatur quas dolor obcaecati quia repellat quaerat consequuntur
            ipsum. Nulla sit harum maiores magni quisquam maxime mollitia
            quibusdam voluptates rerum nostrum atque minima, aliquam cupiditate
            corrupti voluptatibus tempora. Error consectetur recusandae
            repudiandae quisquam esse! Adipisci laboriosam esse tenetur est quia
            asperiores doloribus aut maxime. Non, vel et veritatis eligendi ut
            optio. Accusamus architecto, voluptatem neque aliquid earum harum
            placeat deserunt tempora illum nesciunt cumque labore iste iusto
            eius nobis vel eum culpa totam sed tempore. Impedit ratione commodi
            quo enim incidunt non! Ratione officia, deleniti, dicta nihil
            doloremque a rem illum cum impedit dignissimos soluta harum
            provident corporis vel atque, eius accusamus dolores fugit qui
            temporibus nobis nemo architecto ad. Facere illo molestiae aperiam
            aliquam illum. Totam officiis animi eveniet nobis fuga eaque,
            placeat, accusamus beatae molestias laborum esse expedita quod enim
            velit dolores laboriosam modi dolor nulla, voluptate obcaecati et
            quia. Ea quos dolorem ullam voluptatibus minima animi saepe sequi
            officia. Ipsam saepe earum repellat velit delectus voluptates
            voluptatem eaque alias labore, placeat animi modi aspernatur ipsum!
            Quam ratione officiis natus voluptate saepe earum eius, minus
            tempore, totam quasi itaque. Corporis necessitatibus consequatur
            autem amet voluptates possimus ut quisquam eveniet ipsa debitis
            animi sequi minus quasi excepturi, nobis deleniti atque porro
            perspiciatis. Repellat accusamus similique temporibus. Expedita
            deserunt, exercitationem labore voluptatum corrupti eos ipsum?
            Consectetur obcaecati, neque doloribus quae repellat et nam placeat
            mollitia hic minima quidem. Totam, adipisci corrupti vero hic,
            provident ratione, beatae aspernatur esse in quisquam dicta sequi
            doloribus excepturi ea? Rem vel ullam unde! Voluptatum, velit
            consequatur fugiat fuga aliquid, natus veniam eum reiciendis rerum
            vero voluptatem nam ut ullam adipisci distinctio, laboriosam
            eligendi quibusdam optio similique dolor laudantium. Fuga
            repudiandae dolorum accusamus est. Eos quaerat adipisci fugiat vero
            provident enim quos velit porro, nam distinctio aliquid consequuntur
            dignissimos dolore iure rem, ipsum nobis. Illum libero eligendi
            aperiam enim expedita laborum, reprehenderit deleniti harum
            asperiores quibusdam? Odit esse praesentium, a soluta sit vero
            maxime! Autem velit facilis amet iusto. Praesentium, molestiae?
            Praesentium adipisci cumque consequatur minus, itaque illo.
            Similique quae quam eveniet, itaque nemo corrupti fugiat temporibus
            praesentium, tempore quasi placeat esse eaque minima unde minus
            expedita reprehenderit labore iste voluptatum laudantium quidem
            dolor? Accusantium, totam saepe repellat in corrupti vel dolorem
            voluptatem omnis error optio recusandae, sunt, assumenda ad rem.
            Cumque esse fuga soluta culpa eveniet repellendus beatae cupiditate
            adipisci eum quibusdam nisi aliquid molestias ducimus pariatur,
            error delectus excepturi commodi deleniti rerum et fugit accusamus.
            Necessitatibus culpa id similique fugit a esse repellendus
            voluptatum tempora, dolor illum incidunt voluptatem, officiis earum
            quos. Sequi repudiandae asperiores sapiente, veritatis iure culpa
            nostrum molestiae, esse est aliquid assumenda! Sit, quam laudantium
            asperiores recusandae omnis possimus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
