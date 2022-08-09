import { BeaconWallet } from "@taquito/beacon-wallet";

export const wallet = new BeaconWallet({
    name: "nfTez",
    preferredNetwork: "jakartanet",
});

export const connectWallet = async () => {
    await wallet.requestPermissions({
        network: {
            type: "jakartanet",
            disableDefaultEvents: true,
        }
    });
}

export const getAccount = async () => {
    const activeAccount = await wallet.client.getActiveAccount();

    if(activeAccount)
        return activeAccount.address;
    else
        return "";
}