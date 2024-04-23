import Image from "next/image";
// import nextImage from "../../assets/istockphoto-539208441-2048x2048.jpg";
import nextImage from "@/assets/istockphoto-539208441-2048x2048.jpg";
export const metadata = {
  title: "Gallery Page",
  description: "This is gallery page",
};
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
      <div>
        <h2 className="text-center pb-2">Local image</h2>
        <Image
          src={nextImage}
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
