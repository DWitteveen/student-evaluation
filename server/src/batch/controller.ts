import { JsonController, Get, Param, Put, Body, NotFoundError, Delete } from 'routing-controllers'
import Batch from './entities'

@JsonController()
export default class BatchController {

   
    @Get('/batches')
    async allBatches() {
        const batches = await Batch.find()
        return { batches }
    }
    

    @Get('/batches/:id')
    getBatch(
    @Param('id') id: number) {
        return Batch.findOneById(id)
    }


    @Put('/batches/:id')
    async updateBatch(
    @Param('id') id: number,
    @Body() update: Partial<Batch>) {
        const batch = await Batch.findOneById(id)
        if (!batch) throw new NotFoundError('Batch not found')
        return Batch.merge(batch, update).save()
    }

    @Delete('/batches/:id')
    async deleteBatch(
    @Param('id') id: number) {
        const batch = await Batch.findOneById(id)
        if (!batch) throw new NotFoundError('Batch not found')
        return Batch.remove(batch)
    }
    
}