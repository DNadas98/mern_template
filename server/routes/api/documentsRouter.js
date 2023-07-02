const express = require("express");
const {
  readAllDocuments,
  readDocumentById,
  createDocument,
  updateDocument,
  deleteDocument
} = require("../../controller/documentsController");

const router = express.Router();

router.route("/").get(readAllDocuments).post(createDocument);
router.route("/:id").get(readDocumentById).patch(updateDocument).delete(deleteDocument);

module.exports = router;
