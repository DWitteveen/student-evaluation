import {Student} from './entities'
import { JsonController, Get, Param } from 'routing-controllers';


@JsonController()
export default class StudentController {
    
  @Get('/students')
  async allStudents() {
      const students = await Student.find()
      return {students}
  }
}


