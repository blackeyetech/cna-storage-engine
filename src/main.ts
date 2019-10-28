import { CNStorageEngine } from "@cn-shell/storage-engine";

(async () => {
  // Create the new CNStorageEngine
  let app = new CNStorageEngine("StorageEngine");

  // Now start storing!!
  await app.init();

  app.info("Now Storing!!");
})();
