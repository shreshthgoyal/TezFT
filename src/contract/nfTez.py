import smartpy as sp

# Import FA2 template
FA2 =  sp.io.import_template("FA2.py")

class Token(FA2.FA2):
    pass

class nfTez(sp.Contract):

    """
        This is a contract of an NFT Marketplace - nfTez, where user can mint and buy nfts.
    """

    def __init__(self, token, metadata, admin):

    """
    Initialising the contract.

        Parameters : 
                token : Fa2 Token
                metadata : metadata of the intialised Fa2 Token
                admin : address of the admin
    """

        self.init(
            token = token,
            metadata = metadata,
            admin = admin,
            data = sp.big_map(
                    tkey=sp.TNat, 
                    tvalue=sp.TRecord(
                        holder=sp.TAddress, 
                        author = sp.TAddress, 
                        amount=sp.TNat, 
                        token_id=sp.TNat, 
                        collectable=sp.TBool
                        )
                    ),
            counter = 0,
            token_id = 0,
            )

    # Minting Funtion
    @sp.entry_point
    def mint(self, params):

    """ 
    Defining minting function, user can mint a new NFT with a defined metadata.
    Parameters :
        params.amount : defines the amount of NFT minted
        params.metadata : defines the metadata of the NFT minted

    """

    # Verifies if amount of minted NFT is greather than zero
        sp.verify(
                params.amount > 0,
                message = "Invalid amount of token"
                )
    
    #Defining the data types for various parameters
        c = sp.contract(
            sp.TRecord(
            address=sp.TAddress,
            amount=sp.TNat,
            token_id=sp.TNat,
            metadata=sp.TMap(sp.TString, sp.TBytes)
            ), 
            self.data.token, 
            entry_point = "mint").open_some()
    
    #Minting a token
        sp.transfer(
            sp.record(
            address = sp.self_address,
            amount = 1,
            token_id = self.data.token_id,
            metadata={ '' : params.metadata }
            ), 
            sp.mutez(0), 
            c)
    
    #Mapping NFT's metadata to its token ID
        self.data.data[self.data.token_id] = sp.record(
                                                holder=sp.self_address, 
                                                author = sp.sender, 
                                                amount = params.amount, 
                                                token_id=self.data.token_id, 
                                                collectable=True
                                                )

    #Incrementing token ID after minting an NFT
        self.data.token_id += 1


    #Collecting a minted NFT
    @sp.entry_point
    def collect(self, params):

    """
    Defining collecting an nft function, user can collect a new collectable NFT.
    Parameters :
        params.amount : defines the amount of NFT to be collected
        params.token_id : defines the token ID of the NFT

    """

    #Checks if amount given by user is equal to collected NFT
        sp.verify(
                sp.amount == sp.utils.nat_to_mutez(self.data.data[params.token_id].amount),
                message = "Amount not equal to price of token"
                )

    #Checks if token's amount is valid
        sp.verify(
                self.data.data[params.token_id].amount != 0,
                message = "Token you are trying to buy has an inappropriate amount"
                )

    #Checks if token is collectable
        sp.verify(
                self.data.data[params.token_id].collectable == True,
                message = "Token is not collectable"
                ) 

    #Checks if buyer is not the original author of the NFT
        sp.verify(
                self.data.data[params.token_id].author != sp.sender,
                message = "As an author you can't but this token"
                )

    #Tags the NFT as not collectable after buying it
        self.data.data[params.token_id].collectable = False
    
    #Changes the value of holder of the NFT
        self.data.data[params.token_id].holder = sp.sender
    
    #Transfers the amount of NFT to the author of the NFT
        sp.send(self.data.data[params.token_id].author, sp.amount)

        self.fa2_transfer(
                        self.data.token, 
                        sp.self_address, 
                        sp.sender, 
                        params.token_id, 
                        1
                        )


    #Updating the admin function
    @sp.entry_point
    def update_admin(self, params):
    """
    
    This functions updates the admin for the contract.

    Parameters :
        params - address of the user

    """

    #Checks if function caller is already an admin
        sp.verify(
                sp.sender == self.data.admin,
                message = "Non-admin cannot update an admin"
                )
        self.data.admin = params
        
    
    #Fa2 Transfer function of Fa2 Token Tempelate

    def fa2_transfer(self, fa2, from_, to_, token_id, amount):
    """
    Transfers a number of editions of a FA2 token between two addresses.
    Parameters :
        fa2: The FA2 token contract address.
        from_: The address from which the tokens will be transferred.
        to_: The address that will receive the tokens.
        token_id: The token id.
        token_amount: The number of token editions to transfer.

     """
        c = sp.contract(sp.TList(
                            sp.TRecord(
                                    from_=sp.TAddress, 
                                    txs=sp.TList(
                                                sp.TRecord(
                                                        amount=sp.TNat, 
                                                        to_=sp.TAddress, 
                                                        token_id=sp.TNat)
                                                        .layout((
                                                                "to_", 
                                                                ("token_id", "amount")))))), 
                                                                fa2, 
                                                                entry_point='transfer').open_some()

        sp.transfer(sp.list(
                        [sp.record(
                                from_=from_, 
                                txs=sp.list(
                                        [sp.record(
                                                amount=amount, 
                                                to_=to_, 
                                                token_id=token_id
                                                )
                                        ])
                                )
                        ]), 
                        sp.mutez(0), 
                        c
                        )



#Testing the contract
@sp.add_test(name = "Non Fungible Token")
def test():

#Starting the testing enviornment
    scenario = sp.test_scenario()

#Adding test users
    admin = sp.test_account("Admin")
    alice = sp.test_account("Alice")
    bob = sp.test_account("Bob")

#Integrating Fa2 Token Contracts
    token_contract = Token(FA2.FA2_config(non_fungible = True), admin = admin.address, metadata = sp.utils.metadata_of_url("ipfs://QmW8jPMdBmFvsSEoLWPPhaozN6jGQFxxkwuMLtVFqEy6Fb"))
    
    scenario += token_contract

#Testing the marketplace class
    scenario.h1("MarketPlace")

#Initialising a token
    marketplace = nfTez(token_contract.address, sp.utils.metadata_of_url("ipfs://QmW8jPMdBmFvsSEoLWPPhaozN6jGQFxxkwuMLtVFqEy6Fb"), admin.address)
    scenario += marketplace

#Minting an NFT
    scenario.h1("Mint")
    scenario += marketplace.mint(sp.record(amount = 100000000, metadata = sp.pack("ipfs://bafyreibwl5hhjgrat5l7cmjlv6ppwghm6ijygpz2xor2r6incfcxnl7y3e/metadata.json"))).run(sender = admin, valid = False)
    scenario += token_contract.set_administrator(marketplace.address).run(sender = admin)
    scenario += marketplace.mint(sp.record(amount = 100000000, metadata = sp.pack("ipfs://bafyreibwl5hhjgrat5l7cmjlv6ppwghm6ijygpz2xor2r6incfcxnl7y3e/metadata.json"))).run(sender = admin)
    scenario += marketplace.mint(sp.record(amount = 5600000, metadata = sp.pack("123423"))).run(sender = alice)

#Minted two NFTs : Token ID 0 : amount 100000000 , Token ID 1 : amount 5600000

#Collecting a minted NFT
    scenario.h1("Collect")

#Collecting a NFT with token ID 1 : author - alice
    scenario += marketplace.collect(sp.record(token_id = 1)).run(sender = bob, amount = sp.mutez(5600000))
