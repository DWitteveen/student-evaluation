import { JsonController, Get, Param, Body, NotFoundError, Delete, Post } from 'routing-controllers'
import Evaluation from './entities'

@JsonController()
export default class EvaluationController {

    @Get('/evaluations')
    async allEvaluations() {
        const evaluations = await Evaluation.find()
        return { evaluations }
    }

    @Get('/evaluations/:id')
    getEvaluation(
        @Param('id') id: number) {
            return Evaluation.findOneById(id)
        }
    
    @Post('/evaluations')
    async createStudent(    
        @Body() evaluation: Evaluation
    ) {
        return await evaluation.save()
    
    }

    @Delete('/evaluations/:id')
    async deleteEvaluation(
      @Param('id') id: number
    ) {
      const evaluation = await Evaluation.findOneById(id)
      if(!evaluation) throw new NotFoundError('Cannot find Evaluation')
  
      Evaluation.remove(evaluation)
      return 'Evaluation deleted from database'
    }
}