const mongosee = require('mongoose')
const conf = require('../conf.json')
const uri = conf.uri;
mongosee.connect(uri,  { useUnifiedTopology: true, useNewUrlParser: true  } )

const sema = mongosee.Schema

const uye = new sema({
   uid: String,
   klan: String,
   para: String,
   unvan: String,
   work: String,
   ulke: String,
    mulk: String,
    alink: String,
    monnsterkills: String,
    arenaticket: String,
    can: String,
    atk: Number,
    din: String,
    gsayı: String
    })

const Uye = mongosee.model('oyuncu', uye)
module.exports = Uye