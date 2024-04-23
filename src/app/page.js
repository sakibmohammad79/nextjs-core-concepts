export const metadata = {
  title: "Home Page",
  description: "This is home page",
};
const Page = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();

  return (
    <div>
      <h2 className="text-center p-5">Welcome to NextJs Application!!</h2>

      <div className="grid grid-cols-3 justify-between p-5">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
