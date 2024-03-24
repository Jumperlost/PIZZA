import Pizzas from "../data";

const Menu = () => {
  const menuList = Pizzas.map((pizza) => {
    return (
      <li
        className="flex justify-between items-end w-4/5 border-b gap-y-3.5 py-2 px-0"
        key={pizza.id}
      >
        <div className="flex w-3/5">
          {pizza.soldOut === !true ? (
            <img
              className="w-24 h-24 mr-5"
              src={pizza.imageUrl}
              alt={pizza.name}
            />
          ) : (
            <img
              className="w-24 h-24 mr-5 opacity-40"
              src={pizza.imageUrl}
              alt={pizza.name}
            />
          )}
          <div className="flex flex-col w-4/5">
            <p className="font-extrabold">{pizza.name}</p>
            <p className="italic mb-2.5 mr-2">{pizza.ingredients.join(", ")}</p>
            <div className="flex item-center justify-between">
              {pizza.soldOut === !true ? (
                <p className="text-sm">€{pizza.unitPrice}</p>
              ) : (
                <p className="text-lg">Sold Out</p>
              )}
            </div>
          </div>
        </div>
        {pizza.soldOut === !true ? (
          <button
            className="px-3 py-3 h-max rounded-lg bg-yellow-500"
            soldOut={pizza.soldOut}
          >
            Add to cart
          </button>
        ) : null}
      </li>
    );
  });
  return <ul className="w-9/12 m-0 m-auto">{menuList}</ul>;
};

export default Menu;
