import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-membre',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './table-membre.component.html',
  styleUrl: './table-membre.component.scss',
})
export class TableMembreComponent implements OnInit {
  membreForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.membreForm = this.fb.group({
      idMbr: [null], // null pour un nouvel membre
      nom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      parcours: ['', Validators.required],
      genre: ['', Validators.required],
      devise: ['', Validators.required],
      equipe: ['', Validators.required],
    });
  }
}
