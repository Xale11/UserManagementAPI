import { z } from 'zod'
import { UserRole } from '../../constants/userRoles.js'

export const createUserSchema= z.object({
    name: z.string().min(3, 'Name must be greater than 3 chars'),
    password: z.string().min(8, 'Password must be greater than 8 chars'),
    email: z.email('Not a valid email').min(3, 'Email must be greater than 3 chars'),
    role: z.string().refine(
        (val) => Object.values(UserRole).includes(val as UserRole),
        {
            message: `Role must be one of: ${Object.values(UserRole).join(', ')}`
        }
    )
})
