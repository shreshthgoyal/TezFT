import axios from "axios";
import config from "./config";
import { tezos } from "./tezos";

export const hex2buf = (hex) => {
	return new Uint8Array(
		hex.match(/[\da-f]{2}/gi).map((h) => parseInt(h, 16))
	);
};

export function bytes2Char(hex) {
	return Buffer.from(hex2buf(hex)).toString("utf8");
}

export const mintNFT = async (amount,metadata) => {

		try {
			const contract = await tezos.wallet.at(config.contractAddress);
			let bytes = "";
			for (var i = 0; i < metadata.length; i++) {
				bytes += metadata.charCodeAt(i).toString(16).slice(-4);
			}
      		console.log(contract.methods);
			const op = await contract.methods.mint(amount, bytes).send();
			await op.confirmation();

		} catch (e) {
			console.log(e);
		}

};
