// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract assetContract {
    
    struct mintedItems {
        string idNumber;
        string itemName; 
        string itemClass;
        string itemDesc; 
    }

    mapping (address => mintedItems) mintLog;
    mintedItems m;

    function mintItem ( string memory _idNumber,
                        string memory _itemName, 
                        string memory _itemClass,
                        string memory _itemDesc)  public returns(string memory confirmed){
        m.idNumber = _idNumber;
        m.itemName = _itemName;
        m.itemClass = _itemClass;
        m.itemDesc = _itemDesc;
        mintLog[msg.sender] = m;
        return confirmed;
    }
 
}