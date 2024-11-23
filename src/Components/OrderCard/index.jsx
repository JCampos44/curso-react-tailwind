import { XMarkIcon } from '@heroicons/react/24/outline';

const OrderCard = (props) => {
  const { id, title, imageUrl, price } = props;

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='size-20'>
          <img
            className='size-full rounded-lg object-cover'
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        <button>
          <XMarkIcon className='size-6' />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;