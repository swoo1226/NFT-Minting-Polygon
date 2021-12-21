# How to Mint 

## Step 1 - Deploy Contract
deploy contract with scripts and get contract address

## Step 2 - Mint
1. upload art with pinata
2. get uploaded art's ipfs url
3. make metadata json file with below information
```json
 { "name" : "name of art",
    "description" : "description of art",
    "image" : "art's ipfs url"
 }
 ```
 4. upload metadata json file with pinata
 5. mint art with mint scripts and uploaded metadata json file's ipfs url as URI variable value
