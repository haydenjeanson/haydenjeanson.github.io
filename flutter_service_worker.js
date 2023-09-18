'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "62368ac57a95f44369f849d44f903b74",
".git/config": "eda643622171f572418716a88aa49112",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "305161343c4acdd591d93382476ba90a",
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
".git/index": "c2dc20b22706e1fa84534a1fd0199a65",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "463564b72495e5c3bcc2e8038a4fe008",
".git/logs/refs/heads/main": "463564b72495e5c3bcc2e8038a4fe008",
".git/logs/refs/remotes/origin/HEAD": "9d96fe896246b7c964bc8588dd16ff06",
".git/logs/refs/remotes/origin/main": "efa6ea9212863871dc7018171ac948e4",
".git/objects/00/586e19d9a0c4ab4604e7530ba6d7d696e6ff30": "b8e6b36cfa5badbb4864176ea97097bd",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/00/e2bd1a4f48cde7c8b4bbeceabfc7946ed1c111": "e4d7d232c0629eaf528454dd11ff3b20",
".git/objects/01/e3f80f68424d5fce6c7860875418b3b40f92c4": "a267a30e1bc317d3972ad96e54095f56",
".git/objects/06/e6287c20ed3dea9b81d9daeeaa60e1a867c2fd": "4a6c28b5d14b57ce53b3b40d1838eb7d",
".git/objects/09/d0ea27a8234b3f7e3e400de874bfe0a88fcdde": "0cd19011571768b5a80951de57b0c4ba",
".git/objects/0a/525092630ea5743cf04cb29299b4d7cfa6be3e": "533f31b47db11e4d9f8d3a93a8df6350",
".git/objects/0a/6b71c8e25dea9a2abab73fe8e1d49013454833": "3e6fcb1c2ba1e7055f152f9831e5d0f1",
".git/objects/0b/3bebb78556a24343680f2cd46dcf04254e3f2e": "1a047195a16713502e7bf43ba85c30de",
".git/objects/0b/6577d30fd4d22cd42af046da37ecc1816ca954": "4fd0895f053d88c38188bc04e16739e8",
".git/objects/0b/66a28db2e89545745dd8b3095118b7d5bac043": "d613dbba5301e483a02d7ad2e6601952",
".git/objects/0e/1630e455a7b8d046187dafbc8a27481c511573": "3e8d5318a39dc01e2614c4af1eb7aa9b",
".git/objects/0e/d39c4c763cb0d5b28758772c9bc0393036c068": "af9d5cd65877b82d0e4e2b810871027d",
".git/objects/0e/f80cbd6b55f7ebbfd42ed1919d1ed83e3ac221": "8eb5880088b35cbc6c0ee2af05458e31",
".git/objects/0f/28473d701f144d5685be3450abe4ed5c2e550b": "c92163a721ef1bc2ba3c4f949ed6a9d5",
".git/objects/0f/706e83c0a6a7c1783b80f65a13e26ea4df4810": "07cd2157be740c4287fd2d589febefb9",
".git/objects/11/c12554344f98d2b3953bc61ab343105a56d98b": "f66e4bdebd28c53719eb3101a4344a29",
".git/objects/14/ffc7aec35aa24a32f03670f1c0d0f9515d5adc": "d357bb51284e8598f3914512e9993297",
".git/objects/16/8b23d74da456ffefa48a20bcf910b24bdb9e65": "b368c8683273601f80343501e32ffebe",
".git/objects/17/bd887b29ff43397cf43769aa591e6fe9d98c20": "0e69f231041251f124e9cc8e04887177",
".git/objects/19/6e00a762fc53dfebe12ddd21bd5221824e8d8b": "cd4df405ae418337475f412efd99a628",
".git/objects/1e/501c962a73d12aa63829a17dedcd6d770875ff": "49713e3413910af2e23493f7244ecb99",
".git/objects/1f/33b83911c46990965de4a64d643a5d39681808": "dd212a30df2d604eddbfdd2c06dbbda6",
".git/objects/1f/8f0e844d47279b5f03fa8b475f79b8dcfbdf7c": "11abc564f436607647b162ab5c43a75d",
".git/objects/20/90f02919fedf218ea45697110bd51653d365ca": "dc7276950917904d9f7f02f995b1e8aa",
".git/objects/22/11602519504c6a0262c37e28c451f33c55f237": "28051870668cc6f7e4371949231bd1ac",
".git/objects/22/9caf2112de117ce9e960f99c6faa76dafc19ae": "e36515c15d5d09e0e6dbbea35615e52f",
".git/objects/24/31c57b527c0201fe0a09e73ca0d06e7412a6fe": "4e2eed6f40a1f07fdf4959871ab5242b",
".git/objects/25/92e2f41b5eacfbfcfa88f78cefedbdf731b301": "ff7bc3a57306385ca6f762b07c2b9588",
".git/objects/26/0c7f77fbcf2271127ec02e61a66e877ee51e98": "4e21f16f6b5344e28c4f08c1fc4031e1",
".git/objects/27/9e3855e7adc6fb017be3c3f11e3e5ef926748f": "791bebb2e0046111ffc69862b051aeba",
".git/objects/28/612ecf43eb14553648ccd1cf56ef93ab9a9bc9": "9405190efaa7f70af2e5371097a24961",
".git/objects/2a/fa4912527f1c01810df26784a3ad18e9df53c0": "82fbddfffd13a8812c275f615bcc2963",
".git/objects/2b/cc15b510c41303f6fe50405778e5b5c5024fae": "c49e9ee00a2a1d2719f0440e4cbb9b3f",
".git/objects/2c/29fd7d23ca4f302cebdbc215180dd16b12fcfe": "a54571f682ef0ee9231e8530d2ddc191",
".git/objects/2e/1ad01b1cbf6fb853540b7c8e378064d65e16aa": "d631a3e1b800e1d605e44762108548a1",
".git/objects/2f/734bb4fb2b14d31a8d4a49d978ee40d34060bc": "fa40a56485c59a697cb9157bfa6a5042",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/bd296d3a02712409c46d921be462d024c74981": "79b7470d3e659b82689b92ebea2b3e2f",
".git/objects/39/863305874928019ac5869566b21145c066a550": "46213731e1d2b4665697e9a2e171c99a",
".git/objects/3b/a61c1382d0272a7eee2769de9e3e09dce7d4cf": "065b1536a6a824dd059d11024455827f",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/3e/932ca3dd2b0008ae675781de6d5c65de5ca9c0": "b7bd1a39be69131b2e11fc7b2f4d2fb0",
".git/objects/3e/d86a9d2e34a1e9dceef7b23fc27ad1e21dc329": "6cc89fd009baa6d4988c74a8ca753818",
".git/objects/46/cf68cd4161998ab641b773204fadbb6fdba4b1": "d6e6775c69ddabac93be618135689666",
".git/objects/48/be9d64868b493b49f9bd776a8c8030f3888303": "2a868fca84e3c115f6360c793c15d183",
".git/objects/4a/0fb8b5504b8589f69d0ed21adbf032de38e82a": "4a00b6e6d6b4bd22e2b5578c7c0de97a",
".git/objects/4b/6b786401c6753e63433e3757d1848456d3bd1b": "397a8065c038baffc7dffc16d6576774",
".git/objects/4c/3f07d77f9ce140dc279cdf02873f767129e096": "36f91413272b40ef0ecdba0684870f8a",
".git/objects/4e/6047d89032c01e0a0053836c0a48622c11bafe": "fd700f7a0bf762dc8585827f49755dad",
".git/objects/4e/c0da91e7598fa80df5c1e647dc934d88fe77e9": "247c590f8b21560387f45bc695050a11",
".git/objects/50/8d2b904309d9292f7b85f6440857e775efecf3": "a36c501b6938b3648b04512374245e12",
".git/objects/52/82167e6f3191f94107c13084f6c73ce6560ffc": "1fcc374a54af93574361e9da155b3236",
".git/objects/55/f22c1e32aa9a50f4d6a5da61ec310f4941970f": "3f0d7162da9b81838b7d0bd757618bdf",
".git/objects/56/1e69750ba7182efd99a4685d4ef5be80dfa927": "c9aa46ce60a21ee6063f6e45bf720c98",
".git/objects/57/ef1090ff2a8e1fb82f1d41a7a75b803a04f338": "ab1598c531ffb8dac92d15d2bb68af25",
".git/objects/57/f559eca8543543a16a12a8f1ff0bfb06769251": "3dcfc9cf54d4711b9420fd17444aa9ca",
".git/objects/59/6df675fb28fc62c00ebfd72a3a1a3b2cb5f692": "de780d690c4e6b33130c1146982dffe4",
".git/objects/59/aca9cb86ab12213af8581f283b5a670e7cf087": "e4b6558718bb76753710a94078122f82",
".git/objects/5c/59b90d1605fa256171cfa9a23bf7bed3de6eb7": "0d00d723fd93601dabf4038256290fe7",
".git/objects/5c/b8f5fb6d908300c5d73ca582898028046ff31c": "b163fde4c4f416679ac6847dc349cdf9",
".git/objects/5c/bbc9dcd6551fb4d9ac9cd2fd8d24633d6b914a": "1664efb362683d3db2be0b9b818012c2",
".git/objects/5f/3d1e1fbaadbd198d47430470448fc5db7bf562": "0cc8d9d53c46ea24c8da819985fd18b3",
".git/objects/62/beebd64b01f4e5cea2fba7dd3a6fc3f8d71b64": "17cf349d6c93b764f411cef72be8e989",
".git/objects/64/54905db0149c60c8907403e797b6e20c37fc5f": "a76ccf558e8d6dfa357bd3a4a8e2363b",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/6a/2ef823ce46a5962747251f92d743927977dc4f": "9f5629c14fe3ca6b817ab67b85e2b694",
".git/objects/6c/462bd8bfe9c229c4f8f22531f56c6cf748afe4": "3c9f89c234bdaf1b71360ea389276cd1",
".git/objects/6d/0fe2c008bcc85ef4650318f799de6ef7d94814": "6738bad0212b808b8b00a4d600588fcf",
".git/objects/71/a050165de2d8b6103f494fd77d8a18b84f581d": "e1afefef742ee6adb58649b12d5195a6",
".git/objects/76/6e85741dc707c3bfe3c68f44f421a06ccd1f0e": "2dcc715f1d0cb25764850147b6837cef",
".git/objects/7b/1e20bfcdad1b9bdbe186d45e6d5f8876121a9e": "4213273b2808cae37ec1ccab7fe8afc5",
".git/objects/81/2dd8a22dd5a64c159314af1765226c473c4f7b": "04eee9c2f47db89fb932a73c1e380be3",
".git/objects/86/894802103efca173363929f4357bef60082683": "2f15d27947098ea2ac2871fdf517d6d4",
".git/objects/86/b682b1cbc1c78d3327c0a849e5737c985dc7a1": "cd0a80725035498f90d0f6f6ee44c4e9",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cbf3e5a52c661b4d4a0fbe7fa2bbfd943ee58d": "6e862bdf272a8afd5ac903735b6cd3e4",
".git/objects/89/cdd20495d8aee973d186ce03c328d2a6914f7d": "74c7922b9bbc28dfb28ec69e40c071cf",
".git/objects/8d/9490f339199bcda0f06fa7720c486a3e694331": "b484dece03897f53a9bd71ab8dff593c",
".git/objects/8e/d75ca7cb59e9f66c95adb0edfe2f0cef12c8b6": "a3f76bf5c8b4df5cd16b9bcd4dbd5443",
".git/objects/91/5eed2d7410d7a57483caa93457a6c340e1454e": "e9b27609bb578ee3e9fe60d444b1f548",
".git/objects/92/428dfade17fafbd8b2affe25b4fba50bbba6bd": "3250f6abe7613032a8062eb7cc56ad6f",
".git/objects/97/6761190648b1e7b50c62b9597c5a22e5b0fc3e": "58ec06cb5974fafadc00996aba45b827",
".git/objects/99/aa64302e9381af522a74b7006cda5c06748e3f": "2539b6d3c9435df740eef984c5922c64",
".git/objects/9a/34903c56f638b0251bd8333d9fda1b051e06b9": "5435cb698760969da336de01642274a9",
".git/objects/a1/c33bfc0b49ffa08e92b2e4934d4dbcd8df7c4c": "d6f2d879242d0894842eba028d9b2495",
".git/objects/a1/cc7c64d41855139ad59f394a3bd72ab372f4d4": "1969460cd6b48fcaf749f5dd8d799c49",
".git/objects/a3/aac07d5913fafbc9ebd6e8c1c6925d3d9783b8": "4db0ab5c0dae2f27c94989334ad09135",
".git/objects/a8/154d034dcd61a12a7dc11bc3cecdbba164a291": "3c21493fe4c5a4d7c2e784b6662e45ad",
".git/objects/ad/be99aa28882ddf07e8d563b6173016b2993690": "596feee6194fd99032e2455c24343384",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b4/777eb70e5c381690003a3b8248dc0c77014ee2": "fb0985c3b22af85dcb32e76a34f585f5",
".git/objects/b5/1edef0b43aaf789291cc087b178efe3f09ae1a": "62a3c9d1026d374bbabd5bf08428906a",
".git/objects/b7/e84b605dd9944c09c336ca4a2451f58423ec5d": "157304b0635807947e46f92ec04c2cf0",
".git/objects/b9/301d5011b7e0931ac61d22847c126ebbac61e0": "db343bd4740a1d5c596d72b945697434",
".git/objects/b9/5609cfff0f34d666b7cc2ec2219ac25fdb7cc2": "0f6059e5a5a81c2a12befcefdde79fb6",
".git/objects/ba/2bf12230b924158a49d1e1788f88aaca6f1a1a": "a87dcc208f03dfa667ff94ba4b3fe552",
".git/objects/bc/08202784d8a17edeba9f05c68ea33107b0a52e": "6583a4e5387fde82d1a08a59fb9b8454",
".git/objects/bd/14e914295da525ecb958250ed0f186148fa4b2": "8dcfce18b1aa13c869372f8d883aa830",
".git/objects/bf/be789c326212eb01b0dee23a4d7f2d9cbd2577": "5e5662d5fea86ee162643d47326e670a",
".git/objects/c0/2c477e6c51754235d44fcd30a63421226c2bea": "f502dfc3ea0d25b0c35ab46d2b8d7f62",
".git/objects/c0/5b03cc48ad1fb1386ce11b1326ce5e15a2ee99": "fe2fad57c5caf5366a5c4caaf1e8b444",
".git/objects/c3/d29131201952f12325175b32a7d9816ed90ffb": "de01fc816f1d8dfff30a5e08a49e4d8b",
".git/objects/c5/3bbdd5975b5e232105bb479f44ede6b91cef9c": "c829f44e2b3d05cd8fe7d51525e6f413",
".git/objects/c5/b2a90b1960a5406a1841f3a63a044c08daef1c": "f7433ea4c3fa96810183a8bee7753695",
".git/objects/c7/0915546c58374a6c7843e8c115369268fa2c19": "f6a071f709c5c9743f5ec18260f418ce",
".git/objects/cc/2c6a9cca0970394841d52509474b838d1b1296": "ba3661492eb9312c8460ef2be0f19027",
".git/objects/d0/5d3f8be6cb9b51725bfafdc6af97f20406f51c": "88b625e96c12342b682ae0ad2982ee6d",
".git/objects/d1/20f86f00b31c38399bbf4f525218f1f92dc907": "c1f71d962635493166c8eb3fb0ef9667",
".git/objects/d2/5ee311872aef4b8f535f8f1219866879f3b0cb": "128f2bd5c2dc90dd4f0200880d901b1c",
".git/objects/d6/b4b497fb1becf4e5ddef1d1cb4c4c51b086108": "b497149b59aae77a86e713bef39d1212",
".git/objects/d7/9e980970b937a456a057322df2ba5dae77ded0": "e795a3bc2b68dd481095d642142150e5",
".git/objects/d9/f1575b7155833bdf96f537ab065e302be2ba4a": "6faf2cfad8424a97aad08c302faa7bb6",
".git/objects/da/2ff254d37023c261f119473731ebdc08f67d0d": "f2fe7605bafdc70915e4f8c11b4cce40",
".git/objects/db/ad8555cfc0967b691a3dd52031e6f3cc58b6df": "50e6ee57f261ef4a071af955c2c344ae",
".git/objects/de/0278ed1f33f9b4e934757ad7058eb3c3261ae1": "8e8831c0553d56efa0dd05e2ab6d2e9b",
".git/objects/de/153a56a81c70b5eaf709a5aaa4bed54302f62e": "2102353bda898cc3c51af834f03186f8",
".git/objects/df/293376d55fccc223b20337ef7631071abce2fd": "612b16338cdeba48a051c96246056c92",
".git/objects/e1/0d89f0fa1dc929654745bda7a2c42eb9471bf8": "f2797860bad03b96cb3288e9edd03746",
".git/objects/e2/a64d814c560dc4215c52d4d2f3c7ea5a43c8db": "b74ae84cd3a26df56b5cf977dd5606e2",
".git/objects/e2/bd529111003ba7f8ebd04fba3badad75024d23": "7d69c9fd6e1bd6dd7e304b8fa1d9e2e1",
".git/objects/e3/7e3935d379af3389041b95587f8f227ad967b4": "64d689445d1aba16261a6b913a311558",
".git/objects/e5/6c8e224fb0dd0ba0e8322551211bdfba3f9a44": "7a4c8b2dc581a265de58682519ef8b0e",
".git/objects/e8/73762dcb8c890943c680d8a2ef6fba11b4a113": "1d55a05243fe9cb088d4f3fbf5f4e254",
".git/objects/e8/ca7aba34a3d4e6a5485938f3ded1dd8bd6d28c": "b2a7773d44747953b125ad757c75fa88",
".git/objects/ec/8c0d2f53034f9c7216626c0f0df162a3282d6e": "bfc5f98b1af8659c997b348c84a9cd78",
".git/objects/ee/a3103b4953d93714dc2b8e133b1a8cb6aee55a": "9d8340246cbc76fd0057e6fbd2bd6f1e",
".git/objects/ee/c40ec099d894b9c1c8fb3e08b60f14587e11e6": "d7a4a7f8f7ef502b5b394532733bba45",
".git/objects/f0/e14e74b7adee0d03b556fab5fa6f2fa30dd6d7": "d37dfda19f8bae4343310835229bf337",
".git/objects/f1/ffce330ef24f15a7b30c8b332ddb3ea0b19809": "f1e81b6ece0dadcc684739159448a2b3",
".git/objects/f2/7bb2433042aea5fc34e19fcf90944430ec331b": "db65d025b0a48efed4adce09bf4f43cc",
".git/objects/f3/0b2edfecbd7e71612b02cfe0b7e6efb1751f3f": "529b8cbc43a903b011a4f2190ba8aea9",
".git/objects/f3/4fa281e1bc2a93f08ebaf03ea5afea258c3b87": "75195ab157f4ae2fd033545c5da47f4a",
".git/objects/f4/c45702061c585cf351ce4063646be9753278d6": "12ad57774100c3f2da9c3f26fadee058",
".git/objects/f9/83423884e41f44823f5c45b72a1cbe0451a1d1": "541d7207e78e97f9c5bb800fd475bdce",
".git/objects/fd/cf62c6da2d0adfe03ec0ab88556395f23675fb": "b1e40be0cbca2652ad96887aeb8fe8b4",
".git/objects/pack/pack-61e305f92916407a104c62d893af727df108df6c.idx": "9e82cb7bd4c174de70095c1139d03e05",
".git/objects/pack/pack-61e305f92916407a104c62d893af727df108df6c.pack": "dbe1c1936bc966ff1444c55170b3cf7e",
".git/ORIG_HEAD": "639f8ca407f8cddf0fff1acc1c98f78f",
".git/packed-refs": "b82e949104961d43f3126d852e534335",
".git/refs/heads/main": "639f8ca407f8cddf0fff1acc1c98f78f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "639f8ca407f8cddf0fff1acc1c98f78f",
"assets/AssetManifest.json": "56fe68c485839d9fce8c8a44191a2f8f",
"assets/FontManifest.json": "16e779461aed76b136ebcf9b231f4281",
"assets/fonts/AlegreyaSans/AlegreyaSans-Bold.ttf": "1e3960b45fa41b6383b8f34c181432d0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/advent_of_code.jpg": "ee4b99ac657c162e72d51125a12bc694",
"assets/images/apps-icon-18dp.png": "73317af457953dbd07af9a18773fdf4a",
"assets/images/apps-icon-24dp.png": "13fe7b4066cae716c32be10fe1bb3750",
"assets/images/apps-icon-36dp.png": "d6362a92cf37dd619d4b81bcf26334cf",
"assets/images/apps-icon-48dp.png": "64122f3fbe2eb021d93fe55b4e05747b",
"assets/images/camera.jpg": "8155c17df56afadabb3d4f92fdf30383",
"assets/images/cancel-icon-18dp.png": "1ce4f2e29e5045518c707c76282a0664",
"assets/images/cancel-icon-24dp.png": "4e7ae5be5bcae549e940a8a4d60abff0",
"assets/images/cancel-icon-36dp.png": "cfba63195198be1165f0d585ec204bad",
"assets/images/cancel-icon-48dp.png": "6eab17544aa88669b1da6c99a5348d96",
"assets/images/castle_siege.JPG": "e83efb318c8620db79d770c40ef3c604",
"assets/images/discord_bot.jpg": "0bd56a1573e64d4642ed72a874b99f9b",
"assets/images/GitHub-Mark-120px-plus.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/images/GitHub-Mark-32px.png": "f87561b8bb354ef83b09a66e54f70e08",
"assets/images/GitHub-Mark-64px.png": "438c17272c5f0e9f4a6da34d3e4bc5bd",
"assets/images/google_sign_in_dark.png": "56f00e35d133cf44f6590c095ce984da",
"assets/images/kovaaks_logo.jpg": "80685a3df4badb6c86ccdc5f6710ef49",
"assets/images/LI-In-Bug.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/images/route_locator.png": "1d224bba22fbd7c5cbb8eb7392bbff6d",
"assets/images/welcome_screen/hayden.png": "836b88cbfa469fce5ff457638f86a867",
"assets/images/welcome_screen/wallpaper-1280.jpg": "e6a918d9a6d20a5c5ea25e5c9519364e",
"assets/images/welcome_screen/wallpaper-2560.jpg": "4f9052a28b6007c9a9b1de892d0c18ee",
"assets/images/welcome_screen/wallpaper-640.jpg": "6b7cfda3fd2e3928aeb3f1bdb327d33e",
"assets/images/you_are_here.jpg": "56a0b8a1902b442adf654f1772a85caf",
"assets/NOTICES": "1a5512fe1df38b97ca4275e2a49ae29e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"CNAME": "c276cbe44883521267af6791d7521321",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "25fc41bd6404b25781ecfcfbede1f0af",
"/": "25fc41bd6404b25781ecfcfbede1f0af",
"main.dart.js": "a2ec3659cfc05d2f018ff373687fdbdb",
"manifest.json": "02feb935cbfd76bb5b22f5256cfa8a36",
"README.md": "9081db1249deb18dedc04d203a3c6762",
"version.json": "c1bd6a66eae1a6379d6c1658dfcc7f77"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
