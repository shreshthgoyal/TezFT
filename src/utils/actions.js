import axios from "axios";
import { tezos } from "./tezos";

export const hex2buf = (hex) => {
	return new Uint8Array(
		hex.match(/[\da-f]{2}/gi).map((h) => parseInt(h, 16))
	);
};

export function bytes2Char(hex) {
	return Buffer.from(hex2buf(hex)).toString("utf8");
}

export const mintNFT = (activeAccount, amount,metadata) => {
  return async () => {
		try {
			const contract = await tezos.wallet.at("KT1GBcn3koxZ4AhNwBBc7hC3wxz1BeZLSgea");
      console.log(contract.methods)

		} catch (e) {
			console.log(e);
		}
	};
};
