import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsInt } from 'class-validator'
import Student  from '../students/entities'

@Entity()
export default class Evaluation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number
  
    @IsInt()
    @Column('int', { nullable: true })
    student: number
  
    @IsInt()
    @Column('int', { nullable: true })
    batch: number
  
    @IsString()
    @Column('text', { nullable: true })
    date: Date
    
    @IsString()
    @Column('text', { nullable: true })
    evaluation: string

     // association between links two tables based on a Foreign Key

    // @ManyToOne(_ => Student, student => student.evaluations)
    // students: Student
   
}

