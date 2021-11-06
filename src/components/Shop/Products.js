import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    id: 1,
    title: 'Product A',
    price: 6,
    description: 'This is the first product - amazing!'
  },
  {
    id: 2,
    title: 'Product B',
    price: 10,
    description: 'This is another product - how fun!'
  },
]

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          products.map(item => {return <ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />})
        }
      </ul>
    </section>
  );
};

export default Products;
