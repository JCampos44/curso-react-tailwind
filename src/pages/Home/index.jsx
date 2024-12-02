import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    const itemsToRender =
      context.searchByTitle?.length > 0 || context.searchByCategory?.length > 0
        ? context.filteredItems
        : context.items;

    if (itemsToRender?.length > 0) {
      return itemsToRender?.map((item) => <Card key={item.id} {...item} />);
    }

    return <p>No results found.</p>;
  };

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>

      <input
        className='rounded-lg border border-black focus:outline-none w-80 p-4 mb-4'
        type='text'
        placeholder='Search a product...'
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />

      <div className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}

export default Home;
