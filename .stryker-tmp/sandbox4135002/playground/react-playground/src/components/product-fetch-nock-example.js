import { cleanup, render } from "@testing-library/react";
import { get } from "http";

export default function ProductsList() { 
    const [products, setProducts] = useState(false)

    const fetchProducts = async() => {
      const products = await axios.get('api/products')
      setProducts(products);
    }

    useEffect(() => {
      fetchProducts();
    }, []);

  return products ? <div>{products}</div> : <div data-testid='no-products-message'>No products</div>
}

test('When no products exist, show the appropriate message', () => {
    //Arrange
    nock("api")
            .get(`/products`)
            .reply(404);

    //Act
    const {getByTestId} = render(<ProductsList/>);

    //Assert
    expect(getByTestId('no-products-message')).toBeTruthy();
});