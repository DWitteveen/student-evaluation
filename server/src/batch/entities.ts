import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'
// import Student  from '../students/entities'

@Entity()
export default class Batch extends BaseEntity {

  
  student: any;
  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable: true})
  startDate: string

  @IsString()
  @Column('text', {nullable: true})
  endDate: string

   // association between links two tables based on a Foreign Key

//   @OneToMany(_ => Student, student => student.batch)
//   students: Student[]
// }

}
