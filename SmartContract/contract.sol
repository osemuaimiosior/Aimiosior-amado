// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract carContract {
    address payable companyAccount = payable (0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);

    struct regDetails {
        string email;
        string location;
        uint age;
        uint phoneNumber;
    }

    mapping (uint => address) userLog;
    mapping (address => regDetails[]) userDet;
    
    function carPayment (uint carAmount) public returns(string memory Successful){
        require(msg.sender );
        companyAccount.transfer(carAmount);
        return Successful;
    }
}