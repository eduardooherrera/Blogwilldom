import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/task';

import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  imgPre: string = '';

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  nuevo: Post = {
    title: '',
    description: '',
    hide: true,
    img: ''
  }

  addTask() {
    console.log( this.imgPre );
    if(this.nuevo.title.length > 0  && this.nuevo.description.length > 0 && this.imgPre.length > 0 )
    {
      this.taskService.addPost({
        title: this.nuevo.title,
        description: this.nuevo.description,
        hide: true,
        img: this.imgPre
      });

      this.nuevo.title = '';
      this.nuevo.description = '';
      
    }else
    {
      alert('Por favor revisar los campos del formulario para poder guardar la data');
    }


    // console.table(this.taskService.getPosts()); 
  }

  guardarImagen(img: HTMLInputElement) {
    console.log(img.files);

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      
      let result: string = reader.result as string;
      this.imgPre = result;
      console.log(this.imgPre);
    })
        // @ts-ignore: Object is possibly 'null'.
    let test = reader.readAsDataURL(img.files[0]);
    // let imgData = this.getBase64Images(img.value);
    // console.log(imgData);
  }

}
