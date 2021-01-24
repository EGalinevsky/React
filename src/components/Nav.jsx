import  "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className='item'>
        <li>
          <a href="">Profile</a>
        </li>
      </ul>
      <ul className='item'>
        <li>
          <a href="">Messages</a>
        </li>
      </ul>
      <ul className='item'>
        <li>
          <a href="">Music</a>
        </li>
      </ul>
      <ul className='item'>
        <li>
          <a href="">News</a>
        </li>
      </ul>
      <ul className='item'>
        <li>
          <a href="">Setting</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
