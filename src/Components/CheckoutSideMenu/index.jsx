import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import './styles.css';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );

    context.setCartProducts(filteredProducts);
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

      <div className='px-6 overflow-y-scroll'>
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
    </aside>
  );
};

export default CheckoutSideMenu;
