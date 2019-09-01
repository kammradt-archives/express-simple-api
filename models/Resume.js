const moongose = require('mongoose')

const ResumeSchema = moongose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        default: Date.now
    }
})

module.exports = moongose.model('Resume', ResumeSchema)