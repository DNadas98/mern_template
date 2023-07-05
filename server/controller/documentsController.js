const Document = require("../model/Document");
const { isValidObjectId } = require("mongoose");
const { logError } = require("../middleware/logger");

//GET /api/documents/
async function readAllDocuments(req, res, next) {
  try {
    const documents = await Document.find().select("-__v").lean();
    if (documents?.length >= 1) {
      return res.status(200).json({ data: documents });
    }
    return res.status(404).json({ message: "No documents found" });
  } catch (err) {
    logError(err, req);
    return next(err);
  }
}

//GET /api/documents/:id
async function readDocumentById(req, res, next) {
  try {
    const _id = decodeURI(req?.params?.id);
    if (!_id || !isValidObjectId(_id)) {
      return res.status(400).json({ message: "Invalid document ID" });
    }
    const document = await Document.findById(_id).select("-__v").lean();
    if (document) {
      return res.status(200).json({ data: document });
    }
    return res.status(404).json({ message: "Document not found" });
  } catch (err) {
    logError(err, req);
    return next(err);
  }
}

//POST /api/documents
async function createDocument(req, res) {
  try {
    const { title, text } = req.body;
    if (!title || !text) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const duplicate = await Document.findOne({ "title": title });
    if (duplicate) {
      return res
        .status(409)
        .json({ message: `Document with title ${title} already exists` });
    }
    const result = await Document.create({ title, text });
    if (!result) {
      throw new Error("");
    }
    return res.status(200).json({ message: "Document created" });
  } catch (err) {
    logError(err, req);
    return res.status(400).json({ message: "Failed to create document" });
  }
}

//PATCH /api/documents/:id
async function updateDocument(req, res) {
  try {
    const _id = decodeURI(req?.params?.id);
    const { title, text } = req.body;
    if (!_id || !isValidObjectId(_id)) {
      return res.status(400).json({ message: "Invalid document ID" });
    }
    if (!title && !text) {
      return res.status(400).json({ message: "Nothing to update" });
    }
    const updateQuery = {};
    if (title?.length >= 1) {
      const duplicate = await Document.findOne({ "title": title });
      if (duplicate && duplicate._id.toString() !== _id.toString()) {
        return res
          .status(409)
          .json({ message: `Document with title ${title} already exists` });
      }
      updateQuery.title = title;
    }
    if (text?.length >= 1) updateQuery.text = text;
    const result = await Document.findByIdAndUpdate(_id, updateQuery);
    if (!result) {
      throw new Error("");
    }
    return res.status(200).json({ message: "Document updated" });
  } catch (err) {
    logError(err, req);
    return res.status(400).json({ message: "Failed to update document" });
  }
}

//DELETE /api/documents
async function deleteDocument(req, res) {
  try {
    const _id = decodeURI(req?.params?.id);
    if (!_id || !isValidObjectId(_id)) {
      return res.status(400).json({ message: "Invalid document ID" });
    }
    const result = await Document.findByIdAndDelete(_id).lean();
    if (!result) {
      throw new Error();
    }
    return res.status(200).json({ message: "Document deleted" });
  } catch (err) {
    logError(err, req);
    return res.status(400).json({ message: "Failed to delete document" });
  }
}

module.exports = {
  readAllDocuments,
  readDocumentById,
  createDocument,
  updateDocument,
  deleteDocument
};
