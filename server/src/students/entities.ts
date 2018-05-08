import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { IsString } from 'class-validator'
import Evaluation from '../evaluations/entities'
import Batch from '../batch/entities'

@Entity()
export default class Student extends BaseEntity {

  
  batch: any;
  evaluation: any;
  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  firstName: string

  @IsString()
  @Column('text')
  lastName: string

  @IsString()
  @Column('text')
  photo: string

  // association between links two tables based on a Foreign Key

  @OneToMany(_ => Evaluation, evaluation => evaluation.student) 
  student: Student[]
  
  @ManyToOne(_ => Batch, batch => batch.studentsbatch)
  studentbatch: Student

}

