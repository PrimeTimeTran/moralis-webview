const serverUrl = "https://xdfyrvucctvb.usemoralis.com:2053/server";
const appId = "iahVs9hPRAj4S9Yv0U8kAII4K6Lul94Oft1BilUj";

Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      console.log(user)
      console.log(user.get('ethAddress'))
      document.getElementById("prompt").innerHTML = 'Welcome user with eth wallet address' + user.get('ethAddress');
    } catch (error) {
      console.log('Error!', error);
      alert('Error!', error);
    }
  }
}


async function loginWalletConnect() {
  try {
    const user = await Moralis.authenticate({ provider: "walletconnect" })
    console.log(user);
    console.log(user.get('ethAddress'))
    document.getElementById("prompt").innerHTML = 'Welcome user with eth wallet address' + user.get('ethAddress');
  } catch (error) {
    console.log('Error!', error);
    alert('Error!', error);
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
  document.getElementById("prompt").innerHTML = 'Goodbye!'
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-wallet").onclick = loginWalletConnect;
document.getElementById("btn-logout").onclick = logOut;