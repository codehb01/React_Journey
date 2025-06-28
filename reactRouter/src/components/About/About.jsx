import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1746845165033-7b6d84ddfe97?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sint
              porro dolores eos totam aperiam, quos velit facere distinctio,
              suscipit quasi? Quod culpa hic sequi accusamus similique,
              blanditiis laudantium cum. Dolores sapiente, nisi deleniti porro
              magni libero aut debitis nostrum. Est quam fuga minima, odio quasi
              cumque eveniet, eaque nesciunt commodi nemo corporis facilis totam
              veritatis modi eos fugiat! Cum! Odio quia inventore ad. Ex commodi
              accusantium libero veritatis recusandae sapiente, sed iure ratione
              dignissimos, perspiciatis et at molestias alias dolore nulla
              assumenda natus architecto impedit tenetur incidunt provident.
              Nemo. Aut, temporibus. Quisquam recusandae rerum impedit animi
              odio maiores repudiandae. Eum cum explicabo alias nisi, quisquam,
              quia excepturi laudantium temporibus rerum enim mollitia sapiente
              architecto adipisci officia blanditiis doloribus obcaecati?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
