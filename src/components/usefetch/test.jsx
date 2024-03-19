import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, loading);

  return (
    <div>
      <h1>Custom Fetch Hook</h1>
      {loading ? <h3>Loading Data...</h3> : null}
      {error ? <div>{error}</div> : null}
      {data
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
