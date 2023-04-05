import Web3 from "web3";
import { AbiItem } from "web3-utils";

const endpoint = process.env.REACT_APP_INFURA_ENDPOINT;
export let web3:any;

if (window.ethereum) {
	web3 = new Web3(window.ethereum);
} else {
	web3 = new Web3(new Web3.providers.HttpProvider(endpoint!));
};


export const saleMemeTokenAddress = "0x991A4A2c004061a87D26E5aDB19f827F64078FB8";
export const mintMemeTokenAddress = "0x729c78AE9F9c186Fbac20f7f2BfEAC363150dcea";

const saleMemeTokenAbi:AbiItem[] = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mintCoin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferCoin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const mintMemeTokenAbi:AbiItem[] = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "mintMemeToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferNFT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

export const mintMemeTokenContract =  new web3.eth.Contract(
	mintMemeTokenAbi,
	mintMemeTokenAddress
);

export const saleMemeTokenContract = new web3.eth.Contract(
	saleMemeTokenAbi,
	saleMemeTokenAddress
);

// Minting
export const memeOwnerAccess = async () => {
	const account = JSON.parse(sessionStorage.getItem('user')!).walletAddress;
  
	const ownerAddress = "0xd8df17B6a1758c52eA81219b001547A2c2e3d789";
	const privateKey = "0xcd3352d522fb229242472dddc60abc0831ba87db490573616e7cc43f4d179a28";
	
	const gasPrice = await web3.eth.getGasPrice();
	const gasLimit = 3000000;

	const data = mintMemeTokenContract.methods.mintMemeToken(account).encodeABI();

	const nonce = await web3.eth.getTransactionCount(ownerAddress, 'latest');
	
	const signedTx = await web3.eth.accounts.signTransaction({
	  from: ownerAddress,
	  to: mintMemeTokenAddress,
	  data: data,
	  gas: gasLimit,
	  gasPrice: gasPrice,
	  nonce: nonce,
	}, privateKey);

    let tokenId;
	if (signedTx.rawTransaction) {
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        const tokenIdHex = receipt.logs[0].topics[3];
        tokenId = parseInt(tokenIdHex, 16);
        console.log("memeOwnerAccess에서 찍은 ",tokenId)
        // return tokenId
	} else {
		console.error("Signed transaction is undefined");
    };
    return tokenId;
};

// NFT 소유권 이전 (경매 후)
export const transferNftOwnership = async (tokenId: number|undefined) => {
    console.log(tokenId)
    
    // 소유권을 가져갈 주소 (경매 끝나고 최고가로 사들이는 사람의 지갑 주소)
    const yenniAccount = "0x062294073b003EEB03eBA75B668c54C290F8730a";

    const ownerAddress = "0xd8df17B6a1758c52eA81219b001547A2c2e3d789";
    const privateKey = "0xcd3352d522fb229242472dddc60abc0831ba87db490573616e7cc43f4d179a28";
    
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 3000000;
    console.log("sale");
    
    let data;
    try {
      data = mintMemeTokenContract.methods.transferNFT(yenniAccount, tokenId).encodeABI();
    } catch (err) {
      console.error('Error encoding ABI:', err);
      return;
    }
    const nonce = await web3.eth.getTransactionCount(ownerAddress, 'latest');
    
    const signedTx = await web3.eth.accounts.signTransaction({
      from: ownerAddress,
      to: mintMemeTokenAddress,
      data: data,
      gas: gasLimit,
      gasPrice: gasPrice,
      nonce: nonce,
    }, privateKey);

    console.log("signedTx", signedTx)
    if (signedTx.rawTransaction) {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction);
		console.log("success transfer nft ownership")
    } else {
        console.error("Signed transaction is undefined");
    };
};

// 회원가입했을 때 코인 주기
export const giveSignInCoin = async () => {
	const account = JSON.parse(sessionStorage.getItem('user')!).walletAddress;
	console.log(account)
    const price = 10 ;

	const ownerAddress = "0xd8df17B6a1758c52eA81219b001547A2c2e3d789";
	const privateKey = "0xcd3352d522fb229242472dddc60abc0831ba87db490573616e7cc43f4d179a28";
	
	const gasPrice = await web3.eth.getGasPrice();
	const gasLimit = 3000000;
	let data;
	try {
	  data = saleMemeTokenContract.methods.mintCoin(account, price).encodeABI();
	  console.log("give sign in coin data : ", data)
	} catch (err) {
	  console.error('Error encoding ABI : ', err);
	  return;
	}

	const nonce = await web3.eth.getTransactionCount(ownerAddress, 'latest');
	
	const signedTx = await web3.eth.accounts.signTransaction({
	  from: ownerAddress,
	  to: saleMemeTokenAddress,
	  data: data,
	  gas: gasLimit,
	  gasPrice: gasPrice,
	  nonce: nonce,
	}, privateKey);

	console.log("signedTx", signedTx)
	if (signedTx.rawTransaction) {

		const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
		console.log(receipt.status)
		return receipt.status;
	} else {
		console.error("Signed transaction is undefined");
	};
	console.log("코인 주기 실행 끝")

};

// 코인 거래 (경매 후) : userAccount가 yenniAccount에게 돈을 줘야 함 (판매자 : yenniAccount, 구매자 : userAccount)
export const transferNftCoin = async () => {
    // 구매자 (돈이 빠져나가는 지갑)
	const account = JSON.parse(sessionStorage.getItem('user')!).walletAddress;
    // 판매자 (돈이 들어가야할 지갑)
    const yenniAccount = "0x062294073b003EEB03eBA75B668c54C290F8730a";
    // 경매 거래가
    const price = 10 ;

	const ownerAddress = "0xd8df17B6a1758c52eA81219b001547A2c2e3d789";
	const privateKey = "0xcd3352d522fb229242472dddc60abc0831ba87db490573616e7cc43f4d179a28";
	
	const gasPrice = await web3.eth.getGasPrice();
	const gasLimit = 3000000;
    console.log("sale");
    
	let data;
	try {
	  data = saleMemeTokenContract.methods.transferCoin(account, yenniAccount, price).encodeABI();
	  console.log("성공", data)
	} catch (err) {
	  console.error('Error encoding ABI:', err);
	  return;
	}
	const nonce = await web3.eth.getTransactionCount(ownerAddress, 'latest');
	
	const signedTx = await web3.eth.accounts.signTransaction({
	  from: ownerAddress,
	  to: saleMemeTokenAddress,
	  data: data,
	  gas: gasLimit,
	  gasPrice: gasPrice,
	  nonce: nonce,
	}, privateKey);

	console.log("signedTx", signedTx)
	if (signedTx.rawTransaction) {
		web3.eth.sendSignedTransaction(signedTx.rawTransaction);
	} else {
		console.error("Signed transaction is undefined");
	};
};

// 잔액 조회
export const checkMyBalance = async () => {
    const account = JSON.parse(sessionStorage.getItem('user')!).walletAddress;
	const balanceLength = await saleMemeTokenContract.methods.balanceOf(account).call();
	console.log("web3config.ts", balanceLength)
    return balanceLength;
};