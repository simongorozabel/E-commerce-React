import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getCart } from "../../services/cart/getCart";

export const useGetCart = () => {
  const { token, isLogged } = useSelector((store) => store.auth);
  const query = useQuery({
    queryKey: ["cart", isLogged],
    queryFn: () => getCart(token),
    enabled: isLogged,
  });

  return query;
};
