import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  [x: string]: any;
  bookForm: FormGroup
  constructor(public formBuilder: FormBuilder, 
    private router: Router, 
    private ngZone: NgZone,
    private crudService: CrudService) {
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
  }

  ngOnInit(): void { }
  onSubmit(): any {
    this.crudService.AddBook(this.bookForm.value)
      .subscribe(() => {
        console.log('Data Added Successfully');
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))

      }, (err) => {
        console.log(err);
    });
  }
}
