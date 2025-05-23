import { Component } from '@angular/core';
import { UploudFileService } from '../../services/uploud-file.service';

@Component({
  selector: 'app-uploud-form',
  imports: [],
  templateUrl: './uploud-form.component.html',
  styleUrl: './uploud-form.component.css'
})
export class UploudFormComponent {
  message : string = "m";
  constructor(private uploudService: UploudFileService){}
  ngOnInit(){
    this.uploudService.getHello().subscribe(data => this.message = data);
  }
}
