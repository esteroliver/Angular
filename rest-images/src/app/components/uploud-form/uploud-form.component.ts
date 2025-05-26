import { Component } from '@angular/core';
import { UploudFileService } from '../../services/uploud-file.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-uploud-form',
  imports: [FormsModule],
  templateUrl: './uploud-form.component.html',
  styleUrl: './uploud-form.component.css'
})
export class UploudFormComponent {
  message : string = "";
  username : string = "";
  formData : FormData = new FormData();
  constructor(private uploudService: UploudFileService){}
  ngOnInit(){
    this.uploudService.getHello().subscribe(data => this.message = data);
  }
  onFileSelected(event : any){
    const file : File = event.target.files[0];
    this.formData.append("arquivo", file);
  }
  submitFile(){
    this.uploudService.postFile(this.username, this.formData).subscribe();
  }
}
