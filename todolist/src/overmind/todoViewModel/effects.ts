import { Context } from '../index'
import axios from 'axios'

export const getAllUsers = async () => {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users")
    return users.data
}