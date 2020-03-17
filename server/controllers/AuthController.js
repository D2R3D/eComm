const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const {username, email, password} = req.body
    const db = req.app.get('db')
    const result = await db.find_user([username]);
    const userExists = result[0];
    if (userExists) {
        return res.status(409).send('Username or email already taken');
    }
    const salt = bcrypt.genSaltSync(15);
    const hash = bcrypt.hashSync(password, salt);
    const register = await db.register_user([username, email, hash]);
    const user = register[0];
    req.session.user = {username: user.username, id: user.id}
    res.status(200).send({message:"welcome", user: req.session.user, loggedIn: true})
}
const login = async (req, res) => {
    const {username, password} = req.body

    const foundUser = await req.app.get('db').find_user([username]);
    const user = foundUser[0];

    if(!user) {
        return res.status(403).send({message:"User not found"})
    }

const authPass = bcrypt.compareSync(password, user.password)
if (!authPass) {
    return res.status(401).send('invalid password')
}

    req.session.user = {id: user.id, username: user.username}

    res.status(200).send({message: "Welcome Back", user: req.session.user, loggedIn: true})
  }



const logout = (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
}

module.exports = {
    register,
    login,
    logout,
}