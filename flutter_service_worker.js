'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d57fbe472a406551599ec583151a306a",
".git/config": "eda643622171f572418716a88aa49112",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "60067012da95944119d5a2c77c859ee7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "ecf9bf3690e6e85547caddaaa1bd08e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6b898719caa274ebfde8e3aa02c49650",
".git/logs/refs/heads/main": "66ff093a3f490a128fc930f59bc4bc0a",
".git/logs/refs/remotes/origin/main": "326501a86d3742c97d876e4b8d8b60e9",
".git/objects/02/20533beccfb93832bca3c5c8ead108e92ecf7d": "eff640f1e50ca83b9e11084c54d5b770",
".git/objects/03/38b1719ee98bc49bcef1cc371f387aa964797e": "842756ff000d3e3c352a3e2a8e96e394",
".git/objects/04/b1a97eaed0fb245692c0d94e28c3eed3a5db8e": "ccb27ee7b0fe3f7644f0a220c2b7267c",
".git/objects/0e/4b12c851270e8f369caeb46588ed7c21c5fa5b": "cf7d1b29f64c7567a2969aa7f9c592bf",
".git/objects/0f/2d58b5cd6daf879ab4be1b4164e4ab7258c478": "5902d2e0ae2b446258fb8e336066421b",
".git/objects/11/52f68c1b6d106ea32e5109928b275619aed63a": "783f0d355130778847f40bd23fa4347a",
".git/objects/12/c8992ddd9e6367435139c1f2a6e7add040357f": "54d53114f4b270a79464d77392856de4",
".git/objects/14/aa1aefa74a31912d740abc623380af238df9e0": "48c445354ae0e1307a656633d36744fb",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/1d/c529df5eb396957407c20bc201caa193571d3b": "bddb0ef05c8829ac123810683df3d2cd",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/09599826b8c232c0118b897a93a46a650181c8": "098eed62f3dbc374b21a885bd7fc4a27",
".git/objects/22/97eb9a0220e7e0a4d359ceef95cd0636f5d7fc": "a824b3841748564718d6b12021f93e0c",
".git/objects/23/78f8fd2fbcd32815121cae045176c66ae4fe4a": "4ae09a472fd740e4e027ee0177f81125",
".git/objects/25/f0f44ff9110af1f0d28c3428573d33667a61c2": "2a4610c98170823d8f08ad567a0791d4",
".git/objects/2b/523bcc8ed55195b919ab1c86ab0827c0a99e8c": "873b68b19d3c208918c6a0272c4a2dc6",
".git/objects/31/2a1fc038df71a2f8696654a13bef7eea669a29": "11de6761ad1da9858f3efbcbfce0b57d",
".git/objects/31/c08c03e80e576310e8811089967d50c1c5adcc": "94136180d8b7add2a3169342490baaf5",
".git/objects/33/d12c4d69a4765f9fe4bacb7e743f045e6f81fe": "27a003e8e36e4b3d2a4d0968d5d93abd",
".git/objects/34/23239bc3a3376fb6541879ce9d0036816303c3": "472e0e359f52f064f2631917da4ddc47",
".git/objects/34/37b084c3f4f1d4542deb6222934a878748456e": "975ba82493a7cb5cefd97e1c261ffacb",
".git/objects/34/8bb8f77717bd96b50442b3f4b234c73d99d340": "be0167104a6f633947331f0ab4fdf227",
".git/objects/34/a058292b4b3b4e4dcf7577df0eb3f42ed26ae9": "4187e7bd17e41abc3ac33c73cf8e8bc3",
".git/objects/35/772a7f6a230e8e3165ebf0d566a55de7656cad": "80545ce2cb1e0b072d22356f3b576833",
".git/objects/36/2b66dc92b89d889a4fabb4dd5067e1d29639c1": "5f2dfa8bd92a556509b18abcea4e6c65",
".git/objects/3a/252b2038945f387594ede36d7d566f521157f0": "47c9edd051dee4d79e31cc5beccf2cd0",
".git/objects/41/04c79859cd6f2d6d9251c5a230c4b6f6e8567a": "43c1b24a51d23eee32c3cae3eeea2303",
".git/objects/45/57fc572d6f30f60e99adae7b30807caba86a1d": "c1ead8d9d61f4c0731cba3140f52065e",
".git/objects/47/e791a7571ca0646a32725b020a03280edbe8a1": "f55d4a31befaddce332052df762e6000",
".git/objects/48/0f364c8f67ff9d1fb51ac5c9091caaeb305636": "29128c1fb134e68b1a0b4aaf5d9ae041",
".git/objects/49/2b7c260334152b8a79efcabe66ec78fa5e657c": "4c22b60195cef484876db841cb73e5d8",
".git/objects/4e/21f6fc4b82e1ce74260a032a87e84e33dbc52c": "0d0a766af175b42cf9f1253647759b7d",
".git/objects/52/46370769e798fc4ff01b35ba83c5315f1a10d6": "165a9374aa750099729a735e2d8abcb8",
".git/objects/52/725c337fad1560c6fbd7c8b18ceaa80c73fb97": "8864b16da285d9f7c7edc5ba2811f43b",
".git/objects/54/5489dc829a731f4de377ac88961e0c4d2fba1d": "aa8490ca38cf26dd92c3450c1a7b3f7f",
".git/objects/57/4608a3ce8eeb044db2bb47ce5539f299f9e731": "8f20924e6f7081e76507dfffbcea79b7",
".git/objects/5d/6f5a65e01d5ece34334bd9d14a48b8b44e1660": "6eb243cfa5adf5a6edf54cbd989d16b3",
".git/objects/61/8402d46d292fce66547f64009f308295078a28": "7dc01816047766f40ef68c992b371a66",
".git/objects/62/2d60a047449655160fb5189f0ebb1cfa60cd8d": "f3c563ffc2c01b9aa5062e069a127d9c",
".git/objects/62/4a45daa0f04e60300faf30d99f95a724de2962": "12db489ade58d960f96decaa80cfeebc",
".git/objects/63/ed7bc9824e21e7f489884ff252c40be9a75680": "26bdf74c45135a85e9db2b1d5a8e88d7",
".git/objects/63/f82bbe869984582028d283272c2a727712f86b": "ee3c42b85d51a8eabc2b7c4ae0afe620",
".git/objects/65/1fd933275ea6219daf0653c0953c2de7960fc6": "7e489d519e00cf9d5d9652fdd9c4c1da",
".git/objects/65/7582a974f432ca521015d8a3d40d971120b6fc": "59a6ccb8ab153a72d061082b8dca0884",
".git/objects/74/7377f08c1724ea0c16f30fcc8f533cc2de2f0d": "e31b10b311940ae2aaca1bef9ee9f45d",
".git/objects/77/cc3e6cf9a976ee1a1f475da9eaa786e752cffe": "cd06af84a869c7ee1e3d35d8dec3bad3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/bb23243be32f5b1c2c190b3c82b0a9150a8558": "9cee7b113c5e698915b4727a89540ef9",
".git/objects/7a/e594c95b58d2733bc4dacaa1c6ed5bcd84b478": "71b0516ea125be53c8bb02a7965f4f82",
".git/objects/7b/16b290543ef0b5abc9f145228ff79ced082241": "3513cfa348f14e9cb4cd4fad199c067a",
".git/objects/7b/888e1e30fc50592f33c93f6976c66d5929d5ac": "8be06023782bb82961408a4d9ac9e1e3",
".git/objects/7c/2bcffe1313c028f8fda1bdd62bdd45d304a304": "f89a2a9225dd86683c12d5581f55304d",
".git/objects/7e/55196e6faaaa889e498df22a5bc228c92ef060": "c1f33140be53b514b922e7b0444c82c3",
".git/objects/80/0a436d0428749a56a6488693857374f10bb2cd": "d422cb2848a36088e8c771c1bd183394",
".git/objects/88/0eab6bdca52dd50ee7cfde70d47816d54ae4e4": "c712486a9ff6ef4b5f19de95ab396200",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/71a4217705b41388f8e3a72aa9e2691eacb7d6": "aad1fb8b44fbffd0a254dd20ed42b917",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a56a1a327ac950a47bfb55362402fe9bcf4241": "749f822556a3bb613b08f18e7319df5d",
".git/objects/8d/90a65e5f4ca2e8d8aaf3dd67645501522b58a8": "cddaef363ec9c9daa4a2a45ce3ab4fec",
".git/objects/91/209ac39229e1b5169770d6a53467817f954588": "7ec03608431cfda68b989e4412689378",
".git/objects/91/fccd06f8057b860fc17f52a2389cf46a8bd0ae": "a4efefcdf801a563d13fc2b7011b5c43",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/96/05cebdebcf0fbb037e4aacdec8e9f2c3a3234b": "316cd6e3ebed5979fa95e89dee3915c4",
".git/objects/97/8ffebe18fac942f9ff012e15d88091ca88682b": "5477d5041f9e2f37f0610ea5f5140a25",
".git/objects/98/0a0d5f19a64b4b30a87d4206aade58726b60e3": "e1767f661eccfea03998fafd5dbbc8bf",
".git/objects/9d/f6018d4815b22603a0cea692d36fe16d435fd8": "a336d2b56e835bad3eb38b345438a721",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/9340816665df01dd3140555fc868f70a407507": "7a24b751a3935303899e31db18c8c6e7",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a7/23ba03335a7d1b558a75a49a32325100d9799d": "0bf6689befc4c261e877685d35f7195a",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a9/9adc14ac072be3605c363cc20fcac5fec70ba1": "3f28bef7a8bf03d6ab14e09202e3f50a",
".git/objects/aa/75ce24e2e77e4087e3bd4096ad459fc07c0fba": "b338cf4e3e0286337bedbafc5988f8a8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/a7e3d4f41ad2e7b612d018a8dd0647b962689e": "0d9981b8a81d7f1471abff190267ba7a",
".git/objects/b0/d6969c2223ebaff0391f69f3454b0c2108d78e": "84f92e1f318c1e9e28667cb24ec8b357",
".git/objects/b4/51fb1b0c058aa9d0ca41ed49343e2afa49909c": "9813138dc8938d2e3f4ffb14762ca2a3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c099084e24b8e1a10ecb5161ff3b23d8f6c4ad": "6b53811584c2bce03a23385e8d86b088",
".git/objects/b9/9d4f595fd103c636e31d35f594fe417779fcaf": "51ff5390243de4f1c685d47f1c22e1f8",
".git/objects/c0/127cb64a4b2505166e92818410120ddae7b8a0": "6d94ee572665aa90197f3afb3e244b61",
".git/objects/c2/b3684e61551a0078041d5f50352773ba64a59f": "612a283e2ccf45df34c713528e885e24",
".git/objects/c3/4673e04d6d90d6ee18aadc468603208c51a42c": "2be8a470086464da145deb195423030c",
".git/objects/ca/723a29d1345b3020263a13a80d09c26fa33528": "de7f2071348fcf8ebbf5707e456e1d16",
".git/objects/ca/bf9fb3813986830d71e8ade8449458d2bf40f1": "94f1c7bd9fe0227a4992ee6580d687bd",
".git/objects/cb/e58a27d907edbc5d96d6526c89316de95a95a6": "121225391624f4f0ee515b7e030e4c3e",
".git/objects/ce/ca369cd10e4e0b9be04a85fb7d2b69fec7a759": "104cacd623e83801ac405d968b2cb526",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/cf/b0a9bc73570a1cde1a3dd935b096552a7255e2": "cede17aef0626d8b015f9b8e5f9905e1",
".git/objects/d1/b58dcfd5aa2bf9c1ae35d1a4be31220bf260ea": "3965dfe96170c2f718da1f46f00bec6b",
".git/objects/d2/23116e14f30923a0e37be823bf4d8b47fc191c": "cb991dd3f66e9d09e2cc9337f9690783",
".git/objects/d6/9cbdb416c064b362019fbae748f191753fd07d": "35886b41b68ba9344ae47d12e7993704",
".git/objects/d7/3d65b9ab202ee3b09c45196241075ce6cb7542": "b329f673f84f2b7a44a3a764fb5b0852",
".git/objects/dc/99b5ca43231c49165e9304095350db3fec9c90": "bedd41a47b3c3c3c2f351c3c865d2075",
".git/objects/dd/0c9ddf185f2769c64887763c0f6fbb07660c44": "70a685a79d903c6d2fa4ea29f36008b5",
".git/objects/dd/9ad1ab6a7c873de84db9ad5aa298bc24e19798": "2d94aef061e427decd4a870a60b4a9ad",
".git/objects/de/a919bacccbbd02d3e3a37d25bb6b05b4d8faac": "9a5fe38f54f25c1cf789e956d420e191",
".git/objects/df/90c9cb71af2e47d6ea9da97e524b1e4dff5994": "3159467d7ab1c32cde824b01bd5e6778",
".git/objects/e1/9508d4a70ea97f51dd6a9bfd1417f2898c85e6": "c880ad7533369bf9fe597f5e8aff217d",
".git/objects/e2/0d15cc7733853a2b5f6bd97699a8597208029d": "187df6c5569347abef5a10cada7c1c4f",
".git/objects/e2/fc04eb06538e31ea425d159d9a19a7c6d92b1f": "04c16451dde589e77f588f1c736c86b3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/41acb4d2d7d109c5160c24f5aec6de15556b4f": "6a32f56d46fa409685a75c57f274352f",
".git/objects/eb/5acdf987368c87a76fce769209a0a3b0c98397": "ea3673614b5df1e053c2457fe4632eb9",
".git/objects/eb/d087dbec16465d4a6357cafeef1c01c9d286f3": "f65f606dc1e6cbc6fb0bd4f5991b0b9e",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/f0/71897a130c550c40f362c0c2d7c57c13030cb0": "90cbbe00865076c6c139e2ac45293caa",
".git/objects/f6/5ec9a4c22e5d16a0f1159bf9ecc99a7d70b3f6": "5d1b59380dd3c5e771f3ec6e8fc6b00f",
".git/objects/fb/4893d429983d4e879e77072259e31027e5b18b": "642d7a611c0c61f35ce81486c5eb3893",
".git/objects/fe/07df7939be0efcf9e6e3fe934cd8d5a27f5793": "5c18577dfb2d0dc2c8f3b4a54f566078",
".git/objects/fe/0ee17b19ae21aacc13007da3b7d680dcedac63": "5660e3496fb38fc99218818c7ef29953",
".git/ORIG_HEAD": "638219283e681c156dff09d5d6845dfe",
".git/refs/heads/main": "df58f68ce411a50b488de552d3d0bf2e",
".git/refs/remotes/origin/main": "df58f68ce411a50b488de552d3d0bf2e",
"assets/AssetManifest.json": "8a35519184c15cd86199f8cfb1b6c95e",
"assets/FontManifest.json": "24a749d74bf775404da387fc5afdaea8",
"assets/fonts/AlegreyaSans/AlegreyaSans-Bold.ttf": "1e3960b45fa41b6383b8f34c181432d0",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/welcome_screen/hayden.png": "836b88cbfa469fce5ff457638f86a867",
"assets/images/welcome_screen/wallpaper-1280.jpg": "e6a918d9a6d20a5c5ea25e5c9519364e",
"assets/images/welcome_screen/wallpaper-2560.jpg": "4f9052a28b6007c9a9b1de892d0c18ee",
"assets/images/welcome_screen/wallpaper-640.jpg": "6b7cfda3fd2e3928aeb3f1bdb327d33e",
"assets/NOTICES": "af0a1c9ca9030075ee97a0c5b49f4a7d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"CNAME": "07589f37bf5db54c45e086b523e145fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1109dc3f790f149361cee8f713c77aeb",
"/": "1109dc3f790f149361cee8f713c77aeb",
"main.dart.js": "aa6348281d1c49147f90b4f2517d2e28",
"manifest.json": "02feb935cbfd76bb5b22f5256cfa8a36",
"README.md": "9081db1249deb18dedc04d203a3c6762",
"version.json": "fa4e76c3bd2fbaf6840f5635e14b1586"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
