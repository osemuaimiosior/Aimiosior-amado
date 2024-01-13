// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract assetContract {
    address payable companyAccount = payable (0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);

    struct regDetails{
        string email;
        string location;
        uint age;
        uint phoneNumber;
    }

    struct transactionLog{
        uint assetAmount;
        uint transactionTime;
        string assetName;
    }

    mapping(uint => address) carDemoLog;
    mapping(address => transactionLog) assetTransaction;
    mapping(address => string) subEmail;
    address[] subscribers;
    mapping(address => regDetails) userDet;
    
    function subscribe(string memory email) public returns(string memory Done){
        subEmail[msg.sender] = email;
        subscribers.push(msg.sender);
        return Done;
    }

    function getAllSubscribers() view public returns(address[] memory){
        return subscribers;
    }
    
    function assetPayment(uint _assetAmount, string memory _assetName) public returns(string memory Successful){
        transactionLog memory tl;
        tl.assetAmount = _assetAmount;
        tl.assetName = _assetName;
        assetTransaction[msg.sender] = tl;
        companyAccount.transfer(_assetAmount);
        return Successful;
    }

    function mintAsset( string memory assetName, 
                        string memory assetIDNumber,
                        string memory assetDesc) public returns(string memory confirmed){
        // Logic goes here
        return confirmed;
    }
}