import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transfor transition duration-300 ease-out">
      {/* Left */}
      <div className="relative h-80 w-80">
        <Image className="rounded-lg" src={img} layout="fill" />
      </div>
      {/* Right */}
      <div>
        <h3 className="text-2xl mt-3 font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default MediumCard;
