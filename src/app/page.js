import Image from "next/image";

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};
const Page = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 15,
    },
  });
  const shoes = await res.json();

  return (
    <div>
      <h2 className="text-center p-5 ">Welcome to NextJs Application!!!</h2>

      <div className="grid grid-cols-3 justify-between p-5">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <Image
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                height={500}
                width={500}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <div className="btn btn-outline btn-secondary">Buy Now</div>
                <div className="btn btn-outline btn-secondary">Details</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
