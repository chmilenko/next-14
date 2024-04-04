import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useProducts(url) {
  const { data, error } = useSWR(url, fetcher);

  return { products: data, error };
}

export default useProducts;
