import { PAGE_INFO_MAP } from '../../../page-info/pageInfo';

export default function navBuilder() {
  function build() {
    console.log('building nav links...');
    console.log('PAGE_INFO_MAP = ', PAGE_INFO_MAP);

    return (
      <nav id="nav-list">
        <ul>
          <li className="nav-items">
            <a href="./pages/menus.html">Menus</a>
          </li>
          <li className="nav-items">
            <a href="#">Dessert Artists</a>
          </li>
          <li className="nav-items">
            <a href="./pages/order-ahead.html">Order Ahead</a>
          </li>
        </ul>
      </nav>
    );
  }

  return build();
}
