import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { IsString } from 'class-validator';


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

  @OneToMany(_ => Student, batch => batch.student) 
  student: Student[]

}

