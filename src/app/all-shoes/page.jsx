import Image from "next/image";

const Page = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();
  console.log(shoes);
  return (
    <div>
      <h2 className="text-center font-3xl">All Shoes</h2>
      <div className="grid grid-cols-3 gap-4 justify-between p-4">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card  bg-base-100 shadow-xl">
            <figure>
              <Image
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                height={300}
                width={300}
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
