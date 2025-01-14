// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract assetContract {
    
    mapping(string => address) ownershipLog;
    mapping(address => uint) addressOwnershipLog;
    mapping(string => bool) mintLogs;
    mapping(string => address[]) transferLogs;
    mapping(string => uint) ownershipHistoryCount;

    function setItem (string calldata ID) public returns (string memory done) {
        require(ownershipLog[ID] != msg.sender, "This item has already been minted by you");
        require(mintLogs[ID] != true, "The item already belongs to an entity");

        ownershipLog[ID] = msg.sender;
        mintLogs[ID] = true;
        ownershipHistoryCount[ID] += 1;
        addressOwnershipLog[msg.sender] += 1;
        return done;
    }

    function getItemOwner (string calldata ID) view public returns (address) {
        return ownershipLog[ID];
    }

    
    function transferItem (string calldata ID, address _to) public returns (string memory successfull) {
        require(ownershipLog[ID] == msg.sender, "This item does not belong to you");

        transferLogs[ID].push(_to);
        ownershipHistoryCount[ID] += 1;
        ownershipLog[ID] = _to;
        addressOwnershipLog[_to] += 1;
        return successfull;
    }

    function itemOwnershipHistoryCount (string calldata ID) view public returns (uint) {
        return ownershipHistoryCount[ID];
    }

    function itemHistoricOwnership (string calldata ID) view public returns (address[] memory) {
        return transferLogs[ID];
    }

} 