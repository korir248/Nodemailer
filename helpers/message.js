require('dotenv').config()

// const content = ""

const messageObj = {
    from: {
        name: 'Eugene Korir',
        address: process.env.EMAIL

    },
    to: 'eugene.korir@thejitu.com',
    subject: "Sending text",
    cc: [
        "",
        ""
    ],
    text: "Just an example!"

    // icalEvent: {
    //     filename: 'invitation.ics',
    //     method: 'request',
    //     content: content
    // }

}

module.exports = messageObj