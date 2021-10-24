import { Request, Response } from 'express'
import { CreateMessageService } from '../services/CreateMessageService'

class CreateMessageController {
    async handle(request: Request, response: Response) {
        try {
            const { message } = request.body;
            const { user_id } = request

            const service = new CreateMessageService()

            const result = await service.execute(message, user_id)

            return response.json(result)
            
        } catch (err) {
            return response.json({ message: err.message })
        }
    }
}

export { CreateMessageController }