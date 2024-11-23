import { XMarkIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  // console.log('PRODUCT TO SHOW: ', context.productToShow);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button onClick={() => context.closeProductDetail()}>
          <XMarkIcon className='size-6' />
        </button>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.images[0]}
          alt={context.productToShow.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>
          ${context.productToShow.price}
        </span>
        <span className='font-medium text-md'>
          {context.productToShow.title}
        </span>
        <span className='font-light text-sm'>
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
