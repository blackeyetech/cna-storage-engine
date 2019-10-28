"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_engine_1 = require("@cn-shell/storage-engine");
(async () => {
  // Create the new CNStorageEngine
  let app = new storage_engine_1.CNStorageEngine("StorageEngine");
  // Now start storing!!
  await app.init();
  app.info("Now Storing!!");
})();
//# sourceMappingURL=main.js.map
