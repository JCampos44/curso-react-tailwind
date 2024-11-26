import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import './styles.css';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );

    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-sidemenu flex flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className='size-6' />
        </button>
      </div>

      <div className='px-6 overflow-y-scroll flex-grow'>
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className='p-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <button
          className='bg-black text-white py-3 w-full rounded-lg'
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
