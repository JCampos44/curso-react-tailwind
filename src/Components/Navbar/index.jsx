import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4';

  const context = useContext(ShoppingCartContext);

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/' onClick={() => context.setSearchByCategory(null)}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory(null)}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/clothes'
            onClick={() => context.setSearchByCategory('Clothes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/electronics'
            onClick={() => context.setSearchByCategory('Electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/furnitures'
            onClick={() => context.setSearchByCategory('Furnitures')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/toys'
            onClick={() => context.setSearchByCategory('Toys')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/others'
            onClick={() => context.setSearchByCategory('Others')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>jecv.dev@gmail.com</li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className='flex gap-2 items-center'>
          <ShoppingBagIcon className='size-5' /> {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
