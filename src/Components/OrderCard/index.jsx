import { TrashIcon } from '@heroicons/react/24/outline';

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;

  let renderDelete;
  if (handleDelete) {
    renderDelete = (
      <button onClick={() => handleDelete(id)}>
        <TrashIcon className='size-6' />
      </button>
    );
  }

  return (
    <div className='flex justify-between items-center gap-2 mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='size-20'>
          <img
            className='size-full rounded-lg object-cover'
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light line-clamp-1'>{title}</p>
      </div>

      {renderDelete}
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        {renderDelete}
      </div>
    </div>
  );
};

export default OrderCard;
