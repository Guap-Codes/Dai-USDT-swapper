# Dai-USDT-swapper
This JavaScript code snippet uses the Uniswap SDK and ethers.js library to swap Dai for USDT tokens on the Ethereum blockchain. It starts by initializing the provider and signer, defining the token addresses and amounts, and creating token objects. Then it fetches the token pairs and calculates the current price before creating a trade object. The trade is approved and then executed on the Uniswap decentralized exchange contract by calling the swapExactTokensForTokens function with the specified parameters, including the deadline for the transaction to be executed by. This code demonstrates how to perform a simple token swap using the Uniswap decentralized exchange and Ethereum blockchain.

# To execute this script, you need to perform the following steps: 

1. Install Node.js on your computer, if you haven't already done so. You can download the latest version of Node.js from the official website (https://nodejs.org).

2. Save the JavaScript code in a file with a .js extension, for example, swap.js.

3. Open a command prompt or terminal window and navigate to the directory where you saved the swap.js file.

4. Install the required packages by running the following command: 'npm install ethers @uniswap/sdk'

5. Replace the placeholder values for your-project-id, your-private-key, and 0xYourWalletAddress with the actual values for your Infura project ID, private key, and wallet address.

6. Run the script by typing the following command in the terminal window: 'node swap.js'

7. The script should execute and perform the swap of Dai for USDT tokens on the Uniswap exchange. If the swap is successful, you should see the transaction hash printed in the console.
