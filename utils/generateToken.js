import jwt from 'jsonwebtoken'

const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  )
}

export default generateToken
