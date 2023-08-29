"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Category = exports.Store = void 0;
var Store;
(function (Store) {
    Store[Store["supreme"] = 0] = "supreme";
    Store[Store["snkrs"] = 1] = "snkrs";
    Store[Store["bodega"] = 2] = "bodega";
    Store[Store["shoepalace"] = 3] = "shoepalace";
    Store[Store["undefeated"] = 4] = "undefeated";
})(Store = exports.Store || (exports.Store = {}));
var Category;
(function (Category) {
    Category[Category["all"] = 0] = "all";
    Category[Category["new"] = 1] = "new";
    Category[Category["jackets"] = 2] = "jackets";
    Category[Category["shirts"] = 3] = "shirts";
    Category[Category["topsOrSweaters"] = 4] = "topsOrSweaters";
    Category[Category["sweatshirts"] = 5] = "sweatshirts";
    Category[Category["pants"] = 6] = "pants";
    Category[Category["shorts"] = 7] = "shorts";
    Category[Category["hats"] = 8] = "hats";
    Category[Category["bags"] = 9] = "bags";
    Category[Category["accessories"] = 10] = "accessories";
    Category[Category["shoes"] = 11] = "shoes";
    Category[Category["skate"] = 12] = "skate";
    Category[Category["tShirts"] = 13] = "tShirts";
})(Category = exports.Category || (exports.Category = {}));
var Status;
(function (Status) {
    Status[Status["idle"] = 0] = "idle";
    Status[Status["stopped"] = 1] = "stopped";
    Status[Status["failed"] = 2] = "failed";
    Status[Status["waiting"] = 3] = "waiting";
    Status[Status["waitingForCancel"] = 4] = "waitingForCancel";
    Status[Status["loading"] = 5] = "loading";
    Status[Status["captcha"] = 6] = "captcha";
    Status[Status["checkingOut"] = 7] = "checkingOut";
    Status[Status["done"] = 8] = "done";
})(Status = exports.Status || (exports.Status = {}));
//# sourceMappingURL=models.js.map