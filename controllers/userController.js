import User from '../models/user.js'
import bcrypt from 'bcryptjs'

export async function createUser(req, res){
    const body = req.body
    try {
        const user = new User(body)
        user.password = await bcrypt.hash(body.password, 10) // manipulando el objeto
        await user.save()
        res.status(201).json('created the user successfully')
    } catch (error) {
        res.status(500).json(error)
    }
}

export async function loginUser(req, res) {
    const { email, password } = req.body

    try {
        // Find the user by email
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        res.json({ message: 'Login successful'}) // Return the token if needed
    } catch (error) {
        res.status(500).json(error)
    }
}

export async function getUser(req, res){
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json('Error')
    }
}

//bcryptjs: Encriptar

//Create the method to Login use Post
