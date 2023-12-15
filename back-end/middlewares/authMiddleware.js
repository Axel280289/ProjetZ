const jwt = require("jsonwebtoken"); // C'est une bibliothèque qui permet de créer et de vérifier des JSON Web Tokens (JWT). Les JWT sont des jetons d'authentification qui sont souvent utilisés pour sécuriser les communications entre parties d'une application.
const User = require("../models/User");

exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    //Récupère le token JWT à partir des cookies de la requête.
    if (!token) {
      return res.status(402).json({ message: "Non autorisé" });
      //Si aucun token n'est présent, renvoie une réponse avec le statut 402 et un message indiquant "Non autorisé".
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY_TOKEN);


    //Décrypte le token en utilisant la clé secrète (process.env.SECRET_KEY_TOKEN) et récupère les informations encodées dans le token.

    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return res.status(401).json({ error: "Token invalide" });
    }
    //Vérifie l'existence de l'utilisateur associé à l'ID extrait du token. Si l'utilisateur n'est pas trouvé,
    // renvoie une réponse avec le statut 401 et un message indiquant "Token invalide".
    req.decodedToken = decodedToken;
    //Si tout est en ordre, ajoute les informations extraites du token à l'objet req pour une utilisation ultérieure
    //et passe le contrôle au middleware suivant dans la pile.
    next();
  } catch (error) {
    res.status(401).send("Error auth " + error.message);
    // En cas d'erreur pendant le processus d'authentification, renvoie une réponse avec le statut 401 et un message d'erreur.
  }
};
