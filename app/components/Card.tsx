interface CardProps {
  rating: number;
  productImage: string;
  name: string;
  price: string;
}

function Card({ productImage, name, price, rating }: CardProps) {
  const rating1 = rating;

  const stars = [];

  for (let i = 0; i < Math.floor(rating1); i++) {
    stars.push("★");
  }
  if (rating % 1 != 0) {
    stars.push("⯪");
  }

  return (
    <div>
      <div className="w-60 h-60 max-sm:h-50 max-sm:w-50 ">
        <img src={productImage} alt="shirt" className="rounded-3xl"></img>
      </div>
      <div className="pl-3 flex flex-col mt-3 leading-4">
        <p className="font-semibold">{name}</p>
        <div className="flex gap-2 text-yellow-400 items-center">
          {stars}
          <p className="text-black text-sm ">{rating}/5.0</p>
        </div>
        <p className="font-bold text-lg">{price}$</p>
      </div>
    </div>
  );
}
export default Card;
