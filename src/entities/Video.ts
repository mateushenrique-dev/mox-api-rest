import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from './Category'

@Entity('videos')
class Video{
  @PrimaryColumn()
  id:string
  
  @Column()
  name:string

  @Column()
  duration:number

  @Column()
  description:string

  @Column()
  category_id:string

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category:Category

  @CreateDateColumn()
  created_at:Date

  constructor(){ 
    if(!this.id){ 
      this.id = uuid();
    }
  }
}

export { Video }
