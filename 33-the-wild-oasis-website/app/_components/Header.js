import Navigation from '21-the-wild-oasis-website/final-6-after-server-actions/app/_components/Navigation';
import Logo from '21-the-wild-oasis-website/final-6-after-server-actions/app/_components/Logo';

function Header() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
