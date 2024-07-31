import ShopBanner from "./ShopBanner";
import ProductList from "./ProductList";
export default function Shop() {
  return (
    <div className="mx-auto container">
      <ShopBanner></ShopBanner>
      <ProductList></ProductList>
    </div>
  );
}
