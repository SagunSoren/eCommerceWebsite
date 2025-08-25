function Card(props: any) {
  const rating = props.rating;

  const stars = [];

  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push("★");
  }
  if (rating % 1 != 0) {
    stars.push("⯪");
  }

  return (
    <div>
      <div className="w-60 h-60 max-sm:h-50 max-sm:w-50 ">
        <img src={props.productImage} alt="shirt" className="rounded-3xl"></img>
      </div>
      <div className="pl-3 flex flex-col mt-3 leading-4">
        <p className="font-semibold">{props.name}</p>
        <div className="flex gap-2 text-yellow-400 items-center">
          {stars}
          <p className="text-black text-sm ">{props.rating}/5.0</p>
        </div>
        <p className="font-bold text-lg">{props.price}$</p>
      </div>
    </div>
  );
}
export default Card;
