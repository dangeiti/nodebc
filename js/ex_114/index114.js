let message = "";

function revert(revertMessage) {
    for (i = revertMessage.length - 1; i >= 0 ; i--) {
        message += revertMessage.charAt(i);
    }
    console.log(message);
}

revert('dyan');
