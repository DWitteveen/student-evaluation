import Student from './entities'
import { JsonController, Get, } from 'routing-controllers';


@JsonController()
export default class StudentController {
    
  @Get('/students')
  async allStudents() {
      const students = await Student.find()
      return {students}
  }
}

// @Post('/students')
//     @HttpCode(201)
//     async createStudent(
//     @Body() student: Student) {
//         const {password, ...rest} = student
//         const entity = Student.create(rest)
//         console.log(entity)
//         await entity.setPassword(password)
//         console.log(entity, 'again')
//         return entity.save()
//     }
// }