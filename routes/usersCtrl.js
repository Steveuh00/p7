var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var models = require ('../models')

module.exports = {
    register: function(req, res) {

        //Paramêtre
        var email = req.body.email;
        var prenom = req.body.prenom;
        var nom = req.body.nom;
        var password = req.body.password;
        var isAdmin = req.body.isAdmin;
        
        if (email == null || prenom == null || password == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }      
        //verifier si l'utilisateur existe
        models.User.findOne({
            attributes: ['email'],
            where: { email: email }
          })
        .then(function(userFound){
          if (!userFound){
              
             bcrypt.hash(password, 5, function( err, bcryptedPassword ){
                 var newUser = models.User.create({
                     email: email,
                     prenom: prenom,
                     nom: nom,
                     password: bcryptedPassword,
                     isAdmin: 0
                 })
                 .then(function(newUser){
                     return res.status(201).json({
                         'userId': newUser.id
                     })
                 })
                 .catch(function(err){
                     return res.status(500).json({ 'error': 'cannot add user'});
                 });
             });

          }else {
            return res.status(409).json({ 'error': 'unable already exist'});
          }
        })
        .catch(function(err){
            return res.status(500).json({ 'error': 'unable to verify user'});
        });
    },
    login: function (req, res){

    }
}