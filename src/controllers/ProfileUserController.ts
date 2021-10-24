import { Request, Response } from 'express'
import { ProfileUserService } from '../services/ProfileUserService'

class ProfileUserController {
    async handle(request: Request, response: Response) {
        try {
            const {user_id} = request
            
            const service = new ProfileUserService();

            const result = await service.execute(user_id);

            return response.json(result)
        } catch (err) {
            return response.json({ message: err.message })
        }
    }
}

export { ProfileUserController }