import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.closeCheckoutSideMenu();
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (e, productData) => {
    e.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.closeProductDetail();
    context.openCheckoutSideMenu();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-black text-white size-6 rounded-full m-2 p-1'
          disabled
        >
          <CheckIcon className='size-6' />
        </button>
      );
    }

    return (
      <button
        className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
        onClick={(e) => {
          addProductsToCart(e, data);
        }}
      >
        <PlusIcon className='size-6' />
      </button>
    );
  };

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={data.images[0]}
          alt={data.title}
        />
        {renderIcon(data.id)}
      </figure>
      <p className='flex justify-between items-center gap-2'>
        <span className='text-sm font-light line-clamp-2'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
