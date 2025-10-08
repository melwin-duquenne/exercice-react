
'use server'
import { fetchData } from '../external/fetch';
import ProductCard from './producCard';

export default async function ProductList() {
  const data = await fetchData();
  const products = data.products || [];
  return (
    <div className='flex'>
      {products.map((product: any) => (
        <ProductCard key={product.code} product={product} />
      ))}
    </div>
  );
}