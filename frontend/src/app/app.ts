import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  photoUrl: string | null = null;
  photoDate: string | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    this.photoUrl = URL.createObjectURL(file);

    const formData = new FormData();
    formData.append('file', file);
    fetch('http://localhost:8080/upload', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => this.photoDate = data.date)
      .catch(err => console.error(err));
  }
}
