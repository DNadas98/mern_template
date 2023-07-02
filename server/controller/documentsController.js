const Document = require("../model/Document");
const { isValidObjectId } = require("mongoose");
const { logError } = require("../middleware/logger");

//GET /api/documents/
async function readAllDocuments(req, res) {
  try {
    const documents = await Document.find().select("-__v").lean();
    if (documents?.length >= 1) {
      return res.status(200).json({ data: documents });
    }
    return res.status(404).json({ message: "No documents found" });
  } catch (err) {
    logError(err, req);
    return res.status(500).json({ message: "Unable to read documents" });
  }
}

//GET /api/documents/:id
async function readDocumentById(req, res) {
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
    return res.status(500).json({ message: "Unable to read document" });
  }
}

//POST /api/documents
async function createDocument(req, res) {
  try {
    const { title, text } = req.body;
    if (!title || !text) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await Document.create({ title, text });
    if (result) {
      return res.status(200).json({ message: "Document created" });
    }
    return res.status(404).json({ message: "No documents found" });
  } catch (err) {
    logError(err, req);
    return res.status(500).json({ message: "Unable to create document" });
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
    if (title) updateQuery.title = title;
    if (text) updateQuery.text = text;
    const result = await Document.findByIdAndUpdate(_id, updateQuery);
    if (result) {
      return res.status(200).json({ message: "Document updated" });
    }
    throw new Error();
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
    if (result) {
      return res.status(200).json({ message: "Document deleted" });
    }
    throw new Error();
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