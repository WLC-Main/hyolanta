module.exports = {
    name: 'üye',
    description: 'test!',
    execute(message, args) {
        const uyesema = require('../models/uye')
      const uye = new uyesema({
          uid: message.author.id,
          unvan: 'Beater',
          stat: "0"
      })

uyesema.findOne({uid: message.author.id}).exec((err, data) => {



    const embed = {
        "footer": {
            "text": "iletişim için @Hyo"
        },
        "image": {
            "url": data.alink
        },

        "fields": [
            {
                "name": "<:thonkang:219069250692841473>",
                "value": "these last two",
                "inline": true
            },
            {
                "name": "<:thonkang:219069250692841473>",
                "value": "are inline fields",
                "inline": true
            }
        ]
    };

    message.channel.send({ embed });


})


    },
};