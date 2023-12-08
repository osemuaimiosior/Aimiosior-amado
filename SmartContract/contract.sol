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

    mapping (uint => address) carDemoLog;
    mapping (address => transactionLog[]) assetTransaction;
    mapping(address => string) subEmail;
    address[] subscribers;
    mapping (address => regDetails[]) userDet;
    
    function subscribe(string memory email) public returns(string memory Done){
        subEmail[msg.sender] = email;
        subscribers.push(msg.sender);
        return Done;
    }

    function getAllSubscribers() view public returns(address[] memory){
        return subscribers;
    }
    
    function assetPayment(uint carAmount) public returns(string memory Successful){
        companyAccount.transfer(carAmount);
        return Successful;
    }

    function bookCarDemo() public returns(string memory confirmed){
        uint ID;
        carDemoLog[ID] = msg.sender;
        return confirmed;
    }
}