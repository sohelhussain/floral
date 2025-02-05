import 'remixicon/fonts/remixicon.css';


function Nav() {
  return (
    <div className='fixed top-0 flex w-full py-12 px-16 items-center justify-between'>
        <h2>F</h2>
        <div className='flex gap-10'>
        <div className='flex gap-8 items-center'>
            <h3 className='text-md font-light'>Shop</h3>
            <h3 className='text-md font-light'>New</h3>
            <h3 className='text-md font-light'>About</h3>
            <h3 className='text-md font-light'>Stores</h3>
            <h3 className='text-md font-light'>Search</h3>
        </div>
        <div className='text-md font-light flex gap-10'>
        <i className="ri-shopping-bag-3-line"></i>
        <i className="ri-menu-4-line"></i>
        </div>
        </div>
    </div>
  )
}

export default Nav