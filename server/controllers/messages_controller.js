const messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body;
        let message = {
            text,
            time,
            id
        };

        id++;
        messages.push(message);
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req, res) => {
        let { text, time, id } = req.body;
        console.log(text, time, id)
        messages.forEach((message, i) => {
            if (+req.params.id === message.id) {
                message.text = text,
                message.time = time
            }
        })
        res.status(200).send(messages)
    },


    delete: (req, res) => {
        messages.forEach((message, i) => {
            console.log(+req.params.id, message.id)
            if (+req.params.id === message.id) {
                messages.splice(i, 1)
            }
        });
        res.status(200).send(messages)
    }
}