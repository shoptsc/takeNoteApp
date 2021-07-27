const Notes = require("../models/noteModel");

exports.createNote = async(req, res) => {
    const { title, event } = req.body
    try {
        const newNote = await new Notes({
            title,
            event
        })
        await newNote.save();
        res.status(200).json({
            title: title,
            event: event
        })
    } catch (error) {
        res.status(401).json({
            error: error.message
        });
    }
}


exports.getNote = async(req, res) => {
    try {
        const note = await Notes.find({})
        if (!note) throw Error("There are no event available")
        res.json({
            note
        })
    } catch (err) {
        res.status(401).json({
            error: error.message
        });
    }

}


exports.getOneNote = async(req, res) => {
    try {
        const note = await Notes.findOne({ _id: req.params.id });
        res.json({
            note
        })
    } catch (error) {
        res.status(401).json({
            error: error.message
        });
    }
}