# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.3.1](https://github.com/ecomplus/application-starter/compare/v1.3.0...v1.3.1) (2022-09-11)


### Bug Fixes

* **list-payments:** add installments with initial amount when no discount for credit card [[#85](https://github.com/ecomplus/application-starter/issues/85)] ([92ad658](https://github.com/ecomplus/application-starter/commit/92ad658c8e598145b334b18bd5060d3fc8bbbab6))

## [1.3.0](https://github.com/ecomplus/application-starter/compare/v1.2.0...v1.3.0) (2022-07-08)


### Features

* **pix:** Insert pix as a new payment method ([#83](https://github.com/ecomplus/application-starter/issues/83)) [skip ci] ([f52527b](https://github.com/ecomplus/application-starter/commit/f52527be5272163b31daac39647550014c9a8d17))


### Bug Fixes

* **admin-settings:** pix disabled by default ([1cb76b3](https://github.com/ecomplus/application-starter/commit/1cb76b36a06381fea6044fee9768050ec4c85bdb)), closes [#discussion_r914312128](https://github.com/ecomplus/application-starter/issues/discussion_r914312128)
* **create-transaction:** check each item quantity ([#49](https://github.com/ecomplus/application-starter/issues/49)) ([e697ce2](https://github.com/ecomplus/application-starter/commit/e697ce2ad728d3b6601f93131a2ba8182474c4e6))
* **deps:** update all non-major dependencies ([#20](https://github.com/ecomplus/application-starter/issues/20)) ([68144e5](https://github.com/ecomplus/application-starter/commit/68144e59d697d4a85c3ffc4396834d8519946185))
* **deps:** update all non-major dependencies ([#44](https://github.com/ecomplus/application-starter/issues/44)) ([f826478](https://github.com/ecomplus/application-starter/commit/f826478e89d30c5351070d13efffa540c1466188))
* **deps:** update all non-major dependencies ([#50](https://github.com/ecomplus/application-starter/issues/50)) ([8349b13](https://github.com/ecomplus/application-starter/commit/8349b13a689b66e4b25e7669f9bf72bd3b62b942))
* **deps:** update all non-major dependencies ([#53](https://github.com/ecomplus/application-starter/issues/53)) ([58706d2](https://github.com/ecomplus/application-starter/commit/58706d2bd07876baabb3be3d1bccba447029761b))
* **deps:** update all non-major dependencies ([#64](https://github.com/ecomplus/application-starter/issues/64)) ([c07e126](https://github.com/ecomplus/application-starter/commit/c07e1267df97d130f4cb99ea7ecb13ac3438da5a))

## [1.2.0](https://github.com/ecomplus/application-starter/compare/v1.1.4...v1.2.0) (2021-02-15)


### Features

* **create-transaction:** add partnet code to pagar.me transaction body ([#26](https://github.com/ecomplus/application-starter/issues/26)) ([3de831d](https://github.com/ecomplus/application-starter/commit/3de831d79b124c890172e46d8f5d5ca91285da12))


### Bug Fixes

* **create-transaction:** prevent sending `complementary` with empty string ([#25](https://github.com/ecomplus/application-starter/issues/25)) ([ee711ca](https://github.com/ecomplus/application-starter/commit/ee711ca267fbd967c81dfc126b26073795281af2))
* **create-transaction:** unset `complementary` (undefined) if empty ([f9ee54d](https://github.com/ecomplus/application-starter/commit/f9ee54d87bc45c679e58fa6d7aeb06775cb30d5e))
* **deps:** update all non-major dependencies ([13b073d](https://github.com/ecomplus/application-starter/commit/13b073d6e2cfbf14e52f09a5c540740b9886cda7))

### [1.1.4](https://github.com/ecomplus/application-starter/compare/v1.1.3...v1.1.4) (2020-11-05)


### Bug Fixes

* **deps:** update all non-major dependencies ([#16](https://github.com/ecomplus/application-starter/issues/16)) ([5d9034b](https://github.com/ecomplus/application-starter/commit/5d9034b7b17d7c246af89bf40c56bb1d9e8466f6))
* **refresh-tokens:** add scheduled cloud function to run update ([a0e97e1](https://github.com/ecomplus/application-starter/commit/a0e97e1e1872402a9a07050d2af6f95f9ff024fb))

### [1.1.3](https://github.com/ecomplus/application-starter/compare/v1.1.2...v1.1.3) (2020-10-08)


### Bug Fixes

* **add-installments:** fix treating min installment config value ([#12](https://github.com/ecomplus/application-starter/issues/12)) ([efa04d2](https://github.com/ecomplus/application-starter/commit/efa04d2e053374b90330554dd91d4c8a9d19b2d7))
* **deps:** update all non-major dependencies ([#13](https://github.com/ecomplus/application-starter/issues/13)) ([ec2e6ec](https://github.com/ecomplus/application-starter/commit/ec2e6ec043e065ef11898b78fb6100f61369a8ba))

### [1.1.2](https://github.com/ecomplus/application-starter/compare/v1.1.1...v1.1.2) (2020-09-02)


### Bug Fixes

* **deps:** bump @ecomplus/application-sdk@firestore ([65caee4](https://github.com/ecomplus/application-starter/commit/65caee46e0ea30bfbbe5769e82173b6d0e0851dd))
* **deps:** update all non-major dependencies ([#10](https://github.com/ecomplus/application-starter/issues/10)) ([9c1270e](https://github.com/ecomplus/application-starter/commit/9c1270e76a596793f43e8e2801873be788801d98))
* **deps:** update dependency firebase-admin to v9 ([#9](https://github.com/ecomplus/application-starter/issues/9)) ([cc933b3](https://github.com/ecomplus/application-starter/commit/cc933b38b232594bf776ee38141d40b01626be4e))
* **list-payments:** fix handling max installments number ([#11](https://github.com/ecomplus/application-starter/issues/11)) ([cc54179](https://github.com/ecomplus/application-starter/commit/cc541792a4c7138cf12ff124cb4b8e03cc0a3e04))

### [1.1.1](https://github.com/ecomplus/application-starter/compare/v1.1.0...v1.1.1) (2020-07-29)


### Bug Fixes

* **admin-settings:** minor config field description fix ([038c51f](https://github.com/ecomplus/application-starter/commit/038c51f4ef350d424aab7964afe31b87a521395a))
* **deps:** update all non-major dependencies ([#6](https://github.com/ecomplus/application-starter/issues/6)) ([47e3a66](https://github.com/ecomplus/application-starter/commit/47e3a667c46a2ba5d024a15341f836c142a64cb5))

## [1.1.0](https://github.com/ecomplus/application-starter/compare/v1.0.1...v1.1.0) (2020-07-24)


### Features

* **installments-config:** add 'interest_free_min_amount' optional field ([e1cc32a](https://github.com/ecomplus/application-starter/commit/e1cc32a1247cb659a064727b312627908999274a))

### [1.0.1](https://github.com/ecomplus/application-starter/compare/v1.0.0...v1.0.1) (2020-06-03)


### Bug Fixes

* **deps:** update all non-major dependencies ([#3](https://github.com/ecomplus/application-starter/issues/3)) ([c3bfe41](https://github.com/ecomplus/application-starter/commit/c3bfe41895992aaee0add727e5fe73d429fe1129))
* **deps:** update to @ecomplus/application-sdk v1.13.0 ([4e63b6e](https://github.com/ecomplus/application-starter/commit/4e63b6e4a5960a9d80c7fd40dfbddd460537c983))
* **deps:** update to @ecomplus/application-sdk@firestore ([1cea536](https://github.com/ecomplus/application-starter/commit/1cea536a4fb45f88e01d2def2cc0df2f19fbe4d0))
* **refresh-tokens:** force update tokens service ([77ed8fb](https://github.com/ecomplus/application-starter/commit/77ed8fb656d08069594c3e0b10746f4bd00953a7))
* **setup:** setup appSdk with disableUpdates ([8494348](https://github.com/ecomplus/application-starter/commit/8494348fdaf4772d83c139b7dcfe859c8f93e349))

## 1.0.0 (2020-04-27)


### Features

* **app:** setup admin settings ([b3f4b86](https://github.com/ecomplus/application-starter/commit/b3f4b86de7b6d0fa276adbfa279b589ab74fae72))
* **config:** setup basic pagarme app config ([765fe22](https://github.com/ecomplus/application-starter/commit/765fe22a7a54a2a055cd26773e49e9399a3ee2a6))
* **create-transaction:** first version creating pagarme transaction ([2326a12](https://github.com/ecomplus/application-starter/commit/2326a12f5bf741448a20ae72d8274fb5f4ad2898))
* **lib:** helpers for installments and status parsing ([4dcbd57](https://github.com/ecomplus/application-starter/commit/4dcbd57623642c5f2699d6c27ce8d0506e2758cc))
* **list-payments:** setup list payments with credit card and boleto ([6fb09b6](https://github.com/ecomplus/application-starter/commit/6fb09b68755e1276e984be36bf308058fab95cc3))
* **onload-expression:** handle pagarmejs to create card hash ([7f11230](https://github.com/ecomplus/application-starter/commit/7f11230875cba7e8d3b522b56dfc315502823aae))
* **postback:** endpoint to treat pagarme postback (status changes) ([d486542](https://github.com/ecomplus/application-starter/commit/d4865424362957e5901324de5fcbe5598b6494f8))


### Bug Fixes

* **create-transacion:** fix soft descriptor size, send pagarme error msg ([f012444](https://github.com/ecomplus/application-starter/commit/f0124446604f7138e6411bd4df8f8177465d7aab))
* **create-transaction:** fix pagarme address object (number field) ([f835e65](https://github.com/ecomplus/application-starter/commit/f835e65858e895600a7cad307440272f8a1959b6))
* **create-transaction:** not addresses field on customer (pagar api v4) ([b0ed52d](https://github.com/ecomplus/application-starter/commit/b0ed52d3ed7a050426d6743b5f830387f8fe11b9))
* **create-transaction:** properly declare items array ([4cb1f9a](https://github.com/ecomplus/application-starter/commit/4cb1f9a933ea5c74dc5c2d813c18e004150b0427))
* **create-transaction:** set state param with province code ([e5a611a](https://github.com/ecomplus/application-starter/commit/e5a611a3bf64cff56a6b69a7e3a8669584f7de20))
* **deps:** update @ecomplus/application-sdk to v1.11.11 ([e4036c3](https://github.com/ecomplus/application-starter/commit/e4036c349f85c0275f52c351565ba4690f2042f7))
* **deps:** update @ecomplus/application-sdk to v1.11.12 ([1df4748](https://github.com/ecomplus/application-starter/commit/1df4748630a2f1dd4a09ea5cdcc0b5e1659ed670))
* **deps:** update @ecomplus/application-sdk to v1.11.13 ([32f60fa](https://github.com/ecomplus/application-starter/commit/32f60fab7ae1c9da740d6430493c5e82aec2d7ed))
* **deps:** update all non-major dependencies ([5726398](https://github.com/ecomplus/application-starter/commit/5726398096a22478e8decbb41c649a5e0a5a8e63))
* **ecom-auth:** ensure debugging appSdk processes ([6f3de6e](https://github.com/ecomplus/application-starter/commit/6f3de6e46537d8fe15a6a09a8482e469f1661b63))
* **list-payments:** add all payment methods by default ([7d54c93](https://github.com/ecomplus/application-starter/commit/7d54c93b779b8a7f1c33dfdc3573725ebe46fe39))
* **modules:** minor fixes handling admin settings config ([452079a](https://github.com/ecomplus/application-starter/commit/452079adefd5d71490b83cff8bbc3429c6019c0d))
* **postback:** fix requiring from lib ([1a62439](https://github.com/ecomplus/application-starter/commit/1a624393dcb6588cbe0a53a4cbe3e661c8295c61))
* **postback:** parse storeId int and debug postback requests ([f965a4e](https://github.com/ecomplus/application-starter/commit/f965a4e381ecac9a853cfa98a6c8c5d26eddfbb2))
* **refresh-tokens:** fix checking refresh tokens request and debug ([16256c6](https://github.com/ecomplus/application-starter/commit/16256c6064a280ec27f3d79b63f26a745d4fc4c1))
* **refresh-tokens:** fix handling ecomAuth to update current tokens ([5f0c0ae](https://github.com/ecomplus/application-starter/commit/5f0c0ae68830b0bf73689c79c59490d9dfd4426b))
* **setup:** do not disable updates on refresh-tokens route ([a8d64d5](https://github.com/ecomplus/application-starter/commit/a8d64d5141793d7094f3f42a4ad75a74dcfec685))
* **setup:** ensure enable token updates by default ([c5a2eb2](https://github.com/ecomplus/application-starter/commit/c5a2eb2474bf8de22137b24534b8ea9ec1e7bf5b))
* **setup:** ensure enable token updates by default ([83a8f45](https://github.com/ecomplus/application-starter/commit/83a8f450ff294f6952fa2134db1e9aa75b18d1df))

## [1.0.0-starter.9](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.8...v1.0.0-starter.9) (2020-04-21)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.11.10 ([8da579c](https://github.com/ecomplus/application-starter/commit/8da579c19c6530e8cc9fd338a07aece1fccc64ff))

## [1.0.0-starter.8](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.7...v1.0.0-starter.8) (2020-04-18)


### Bug Fixes

* **deps:** update all non-major dependencies ([#17](https://github.com/ecomplus/application-starter/issues/17)) ([785064e](https://github.com/ecomplus/application-starter/commit/785064ef5bf06db7c084f9b17b37a6077645735b))

## [1.0.0-starter.7](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.6...v1.0.0-starter.7) (2020-04-07)

## [1.0.0-starter.6](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.5...v1.0.0-starter.6) (2020-04-06)


### Bug Fixes

* **deps:** update all non-major dependencies ([#10](https://github.com/ecomplus/application-starter/issues/10)) ([b3c65e5](https://github.com/ecomplus/application-starter/commit/b3c65e5c7eb89a4825eb47c852ce65293d172314))
* **deps:** update all non-major dependencies ([#13](https://github.com/ecomplus/application-starter/issues/13)) ([33ff19b](https://github.com/ecomplus/application-starter/commit/33ff19bbdad1f34b6d1c255089dc0a0e4092b955))
* **deps:** update all non-major dependencies ([#8](https://github.com/ecomplus/application-starter/issues/8)) ([feba5b9](https://github.com/ecomplus/application-starter/commit/feba5b9cdc54e8304beff2b12658a6343ef37569))
* **deps:** update dependency firebase-functions to ^3.6.0 ([#15](https://github.com/ecomplus/application-starter/issues/15)) ([5f7f0a2](https://github.com/ecomplus/application-starter/commit/5f7f0a2bf5c744000996e2a0b78690b363462ee7))
* **deps:** update dependency firebase-tools to ^7.16.1 ([#14](https://github.com/ecomplus/application-starter/issues/14)) ([b8e4798](https://github.com/ecomplus/application-starter/commit/b8e479851bd02bf5929a7df8a71a761f1c1c1654))
* **deps:** update dependency firebase-tools to v8 ([#16](https://github.com/ecomplus/application-starter/issues/16)) ([b72560e](https://github.com/ecomplus/application-starter/commit/b72560e4fc86496499d553e47094ace25436272b))
* **ecom-modules:** fix parsing mod names to filenames and vice versa ([99c185a](https://github.com/ecomplus/application-starter/commit/99c185afebeae77deb61537ed9de1c77132c16ce))

## [1.0.0-starter.5](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.4...v1.0.0-starter.5) (2020-03-05)


### Features

* **market-publication:** handle full featured app publication to Market ([28379dc](https://github.com/ecomplus/application-starter/commit/28379dc3c4784e757c8f25e5d737f6143682b0db))
* **static:** handle static with server app files from public folder ([827d000](https://github.com/ecomplus/application-starter/commit/827d00079b0dc169b2eef31b8e0ac73c596307a8))

## [1.0.0-starter.4](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.3...v1.0.0-starter.4) (2020-02-21)


### Features

* **calculate-shipping:** basic setup for calculate shipping module ([db77595](https://github.com/ecomplus/application-starter/commit/db7759514bb25d151dd4508fb96b84c52b3e94ba))


### Bug Fixes

* **home:** fix replace accets regex exps to generate slug from title ([198cc0b](https://github.com/ecomplus/application-starter/commit/198cc0b911d4874d96f3cd5254d30cab5fe89765))
* **home:** gen slug from pkg name or app title if not set or default ([25c20bf](https://github.com/ecomplus/application-starter/commit/25c20bfade65a86e4f4b1026ef59a5694a022a74))

## [1.0.0-starter.3](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.2...v1.0.0-starter.3) (2020-02-21)

## [1.0.0-starter.2](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.1...v1.0.0-starter.2) (2020-02-21)


### Bug Fixes

* **config:** stop reading app from functions config ([7b9aab7](https://github.com/ecomplus/application-starter/commit/7b9aab727fefe8a5b84695e90a0d68e02b8c3f62))

## [1.0.0-starter.1](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.0...v1.0.0-starter.1) (2020-02-20)


### Features

* **get-auth:** endpoint to return auth id and token for external usage ([40a8ae2](https://github.com/ecomplus/application-starter/commit/40a8ae2e895d6e32c7032ca500040ec82c80dc5d))
* **server:** also supporting passing Store Id from query ([111f3a7](https://github.com/ecomplus/application-starter/commit/111f3a716fbfd2e155e3fb24242bddcae7cb065c))


### Bug Fixes

* **server:** remove 'routes' path when setting filename for routes ([119524c](https://github.com/ecomplus/application-starter/commit/119524c523a11364ed912769637a6f8e479af5f1))

## [1.0.0-starter.0](https://github.com/ecomplus/application-starter/compare/v0.1.1...v1.0.0-starter.0) (2020-02-18)


### Features

* **router:** recursive read routes dir to auto setup server routes ([ff2b456](https://github.com/ecomplus/application-starter/commit/ff2b45604723a8146c9481ea36a9400da5ccc2bc))


### Bug Fixes

* **home:** fix semver on for app.version (remove version tag if any) ([ad36461](https://github.com/ecomplus/application-starter/commit/ad364614a7f5599850ad39e00a94d310742e8f80))
* **middlewares:** update route files exports (named exports by methods) ([6a22e67](https://github.com/ecomplus/application-starter/commit/6a22e67135bc6110e6da6b4ab25f67ad8d77f597))

### [0.1.1](https://github.com/ecomplus/application-starter/compare/v0.1.0...v0.1.1) (2020-02-18)


### Features

* **env:** get 'pkg' from functions config ([bf45ec3](https://github.com/ecomplus/application-starter/commit/bf45ec33a2147d5be91fdc4955bd6cfa1b0867e2))
* **home:** set version and slug from root package, fix with uris ([d4b61fa](https://github.com/ecomplus/application-starter/commit/d4b61fab427aefdb2ac485d90eb1abe15d6aafc6))


### Bug Fixes

* **env:** firebase doesnt uppercase config ([502185e](https://github.com/ecomplus/application-starter/commit/502185ed30f346d8db77b849d6ba0eb48cb777cb))
* **require:** update @ecomplus/application-sdk dependency name ([d4174ac](https://github.com/ecomplus/application-starter/commit/d4174ac5425b85590db0e92d4b1d69a8567a6c55))

## [0.1.0](https://github.com/ecomplus/application-starter/compare/v0.0.4...v0.1.0) (2020-02-17)

### [0.0.4](https://github.com/ecomclub/firebase-app-boilerplate/compare/v0.0.3...v0.0.4) (2020-02-16)


### Bug Fixes

* **server:** update routes names (refresh-tokens) ([79a2910](https://github.com/ecomclub/firebase-app-boilerplate/commit/79a2910817cf4193b40e02b2b1e6b920e7fefb2d))

### [0.0.3](https://github.com/ecomclub/express-app-boilerplate/compare/v0.0.2...v0.0.3) (2020-02-15)


### Features

* **server:** start reading env options, handle operator token ([ce107b7](https://github.com/ecomclub/express-app-boilerplate/commit/ce107b74cde375e875a85cc3ba0cc6a73740785d))
* **update-tokens:** adding route to start update tokens service (no content) ([20c62ec](https://github.com/ecomclub/express-app-boilerplate/commit/20c62ec6800fc326b89e8cf54b2916f56e5910e4))


### Bug Fixes

* **auth-callback:** fix handling docRef (desn't need to get by id again) ([629ca5a](https://github.com/ecomclub/express-app-boilerplate/commit/629ca5ab9849e3822cc190f423da5bf2e0c4daab))
* **auth-callback:** save procedures if not new, check and set 'settep_up' ([#3](https://github.com/ecomclub/express-app-boilerplate/issues/3)) ([4a01f86](https://github.com/ecomclub/express-app-boilerplate/commit/4a01f86c37e09cd7c0363f6fbc80de6eeef3ba20))
* **ECOM_AUTH_UPDATE_INTERVAL:** disable set interval (no daemons on cloud functions) ([2aa2442](https://github.com/ecomclub/express-app-boilerplate/commit/2aa2442061f0308be9eb9430552fa04ad148788c))
* **env:** fixed to get appInfor variable ([e9b1a3c](https://github.com/ecomclub/express-app-boilerplate/commit/e9b1a3ce0d17ee74a5eada70589340fd5a70e786))
* **env:** fixed to get appInfor variable ([22687e2](https://github.com/ecomclub/express-app-boilerplate/commit/22687e25f611d49f8c01494af114e0289cec251e))
* **middleware:** check standard http headers for client ip ([5045113](https://github.com/ecomclub/express-app-boilerplate/commit/504511329afe9277d540f0f542a316d04634ce9e))

### 0.0.2 (2020-02-11)


### Bug Fixes

* **lib:** remove unecessary/incorrect requires with new deps ([69f2b77](https://github.com/ecomclub/express-app-boilerplate/commit/69f2b77))
* **routes:** fix handling appSdk (param) ([0cf2dde](https://github.com/ecomclub/express-app-boilerplate/commit/0cf2dde))
* **setup:** added initializeApp() to firebase admin ([e941e59](https://github.com/ecomclub/express-app-boilerplate/commit/e941e59))
* **setup:** manually setup ecomplus-app-sdk with firestore ([64e49f8](https://github.com/ecomclub/express-app-boilerplate/commit/64e49f8))
* **setup:** manually setup ecomplus-app-sdk with firestore ([c718bd0](https://github.com/ecomclub/express-app-boilerplate/commit/c718bd0))
* **setup:** manually setup ecomplus-app-sdk with firestore ([33909bf](https://github.com/ecomclub/express-app-boilerplate/commit/33909bf)), closes [/github.com/ecomclub/ecomplus-app-sdk/blob/master/main.js#L45](https://github.com/ecomclub//github.com/ecomclub/ecomplus-app-sdk/blob/master/main.js/issues/L45)
* **startup:** setup routes after appSdk ready, add home route ([d182555](https://github.com/ecomclub/express-app-boilerplate/commit/d182555))


### Features

* **firestore-app-boilerplate:** Initial commit ([c9963f0](https://github.com/ecomclub/express-app-boilerplate/commit/c9963f0))
* **firestore-app-boilerplate:** Initial commit ([be493ea](https://github.com/ecomclub/express-app-boilerplate/commit/be493ea))
* **firestore-support:** minor changes ([3718cba](https://github.com/ecomclub/express-app-boilerplate/commit/3718cba))
* **firestore-support:** refactoring to  use saveProcedures function ([62971ef](https://github.com/ecomclub/express-app-boilerplate/commit/62971ef))
* **firestore-support:** removed sqlite error clausule ([2d47996](https://github.com/ecomclub/express-app-boilerplate/commit/2d47996))
* **routes:** add home route (app json) ([42a3f2b](https://github.com/ecomclub/express-app-boilerplate/commit/42a3f2b))

# [LEGACY] Express App Boilerplate

### [0.1.1](https://github.com/ecomclub/express-app-boilerplate/compare/v0.1.0...v0.1.1) (2019-07-31)


### Bug Fixes

* **procedures:** fix checking for procedures array to run configureSetup ([1371cdc](https://github.com/ecomclub/express-app-boilerplate/commit/1371cdc))

## [0.1.0](https://github.com/ecomclub/express-app-boilerplate/compare/v0.0.2...v0.1.0) (2019-07-31)

### 0.0.2 (2019-07-31)


### Bug Fixes

* chain promise catch on lib getConfig ([281abf9](https://github.com/ecomclub/express-app-boilerplate/commit/281abf9))
* fix mergin hidden data to config ([8b64d58](https://github.com/ecomclub/express-app-boilerplate/commit/8b64d58))
* fix path to require 'get-config' from lib ([11425b0](https://github.com/ecomclub/express-app-boilerplate/commit/11425b0))
* get storeId from header and set on req object ([a3bebaa](https://github.com/ecomclub/express-app-boilerplate/commit/a3bebaa))
* handle error on get config instead of directly debug ([f182589](https://github.com/ecomclub/express-app-boilerplate/commit/f182589))
* routes common fixes ([2758a57](https://github.com/ecomclub/express-app-boilerplate/commit/2758a57))
* using req.url (from http module) instead of req.baseUrl ([d9057ca](https://github.com/ecomclub/express-app-boilerplate/commit/d9057ca))


### Features

* authentication callback ([8f18892](https://github.com/ecomclub/express-app-boilerplate/commit/8f18892))
* conventional store api error handling ([bcde87e](https://github.com/ecomclub/express-app-boilerplate/commit/bcde87e))
* function to get app config from data and hidden data ([ba470f5](https://github.com/ecomclub/express-app-boilerplate/commit/ba470f5))
* getting store id from web.js ([72f18c6](https://github.com/ecomclub/express-app-boilerplate/commit/72f18c6))
* handling E-Com Plus webhooks ([63ba19f](https://github.com/ecomclub/express-app-boilerplate/commit/63ba19f))
* main js file including bin web and local ([6b8a71a](https://github.com/ecomclub/express-app-boilerplate/commit/6b8a71a))
* pre-validate body for ecom modules endpoints ([f06bdb0](https://github.com/ecomclub/express-app-boilerplate/commit/f06bdb0))
* setup app package dependencies and main.js ([b2826ed](https://github.com/ecomclub/express-app-boilerplate/commit/b2826ed))
* setup base app.json ([015599a](https://github.com/ecomclub/express-app-boilerplate/commit/015599a))
* setup daemon processes, configure store setup ([db3ca8c](https://github.com/ecomclub/express-app-boilerplate/commit/db3ca8c))
* setup procedures object ([c5e8627](https://github.com/ecomclub/express-app-boilerplate/commit/c5e8627))
* setup web app with express ([d128430](https://github.com/ecomclub/express-app-boilerplate/commit/d128430))
