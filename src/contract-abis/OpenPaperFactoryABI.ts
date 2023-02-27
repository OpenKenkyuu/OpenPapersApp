const OpenPaperFactoryABI = [
    [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "address[]",
                    "name": "authors",
                    "type": "address[]"
                },
                {
                    "internalType": "string[]",
                    "name": "categories",
                    "type": "string[]"
                },
                {
                    "internalType": "uint8",
                    "name": "paperPrice",
                    "type": "uint8"
                },
                {
                    "internalType": "string",
                    "name": "contentURI",
                    "type": "string"
                }
            ],
            "name": "createPaper",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "deployedPapers",
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "missingSignatures",
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
                    "name": "author",
                    "type": "address"
                }
            ],
            "name": "removeMissingSignature",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
];

export default OpenPaperFactoryABI;