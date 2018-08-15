
var qrcodeAddress = new QRCode(document.getElementById("qrcodeAddress"),{width: 120,height: 120});
var qrcodeSecret = new QRCode(document.getElementById("qrcodeSecret"),{width: 120, height: 120});

newripple();

function newripple() {
  var api = new ripple.RippleAPI();
  var account = api.generateAddress();
  document.getElementById("address").innerHTML = account.address;
  document.getElementById("secret").innerHTML = account.secret;
  qrcodeAddress.makeCode(account.address);
  qrcodeSecret.makeCode(account.secret);
}
