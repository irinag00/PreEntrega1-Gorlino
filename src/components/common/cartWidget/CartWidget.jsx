import { AiOutlineShoppingCart } from "react-icons/ai";
const CartWidget = () => {
  return (
    <button>
      <AiOutlineShoppingCart />
      <span className="sr-only">Carrito</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-pinkLogo border-2 border-pinkLogo rounded-full -top-2 -right-2">
        2
      </div>
    </button>
  );
};

export default CartWidget;
