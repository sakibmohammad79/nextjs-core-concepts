import Image from "next/image";

const Page = () => {
  return (
    <div>
      <h2 className="text-center text-4xl p-4">Image Optimization!</h2>
      <div>
        <h2 className="text-center pb-2">Reguler image optimization</h2>
        <img
          src="https://thumbs.dreamstime.com/b/all-sports-balls-stadium-d-imaginary-sport-modelled-rendered-78672313.jpg"
          alt="image"
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>
      <div>
        <h2 className="text-center pb-2">Next.Js image optimization</h2>
        <Image
          src="https://thumbs.dreamstime.com/b/all-sports-balls-stadium-d-imaginary-sport-modelled-rendered-78672313.jpg"
          alt="image"
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Page;
