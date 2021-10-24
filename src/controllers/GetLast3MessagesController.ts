import { Request, Response } from 'express'
import { GetLast3MessagesService } from '../services/GetLast3MessagesServices'

class GetLast3MessagesController {
    async handle(request: Request, response: Response) {
        try {

            const service = new GetLast3MessagesService();

            const result = await service.execute();

            return response.json(result)
        } catch (err) {
            return response.json({ message: err.message })
        }
    }
}

export { GetLast3MessagesController }