import axios from "axios";

export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.jakartanet.tzkt.io/v1/contracts/KT1GBcn3koxZ4AhNwBBc7hC3wxz1BeZLSgea/storage"
  );
  return res.data;
};