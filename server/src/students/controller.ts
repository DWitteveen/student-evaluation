import Student from './entities'
import { JsonController, Get, Post, Body, Param, NotFoundError, Delete } from 'routing-controllers';


@JsonController()
export default class StudentController {
    
  @Get('/students')
  async allStudents() {
      const students = await Student.find()
      return {students}
  }

  @Get('/students/:id')
  getStudents(
  @Param('id') id: number) {
    return Student.findOneById(id)
  }

  @Post('/students')
  async createStudent(
    @Body() student: Student
  ) {
    const entity = await student.save()
    return entity.save()
  }

  @Delete('/students/:id')
  async deleteStudent(
    @Param('id') id: number
  ) {
    const student = await Student.findOneById(id)
    if(!student) throw new NotFoundError('Cannot find Student')

    Student.remove(student)
    return 'student deleted from database'
  }
}

