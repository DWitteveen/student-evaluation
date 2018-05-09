import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { IsString } from 'class-validator'
import Evaluation from '../evaluations/entities'
import Batch from '../batch/entities'

@Entity()
export default class Student extends BaseEntity {

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

  // @ManyToOne(_ => Batch, batch => batch.students)
  // batch: Batch

  // @OneToMany(_ => Evaluation, evaluation => evaluation.student)
  // evaluations: Evaluation[]

}

