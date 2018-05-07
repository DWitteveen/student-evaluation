import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { MinLength, IsString } from 'class-validator';


@Entity()
export default class Student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(2)
  @Column('text')
  firstName: string

  @IsString()
  @MinLength(2)
  @Column('text')
  lastName: string

  @IsString()
  @Column('text')
  photo: string

  // association between links two tables based on a Foreign Key

  @OneToMany(_ => Student, batch => batch.student) 
  student: Student[]

}

