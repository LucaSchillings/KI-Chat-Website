import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  chat(message: string): Observable<string> {
    const initiateUrl = `${this.backendUrl}/Codsworth/chat/${message}`;
    
    // Use a Subject to emit updates to the chat component
    const chatUpdateSubject: Subject<string> = new Subject<string>();

    this.http.get(initiateUrl).subscribe(
      response => {
        console.log('Message sent successfully:', response);
      },
      error => {
        console.error('Error sending message:', error);
      }
    );

    const sseUrl = `${this.backendUrl}/Codsworth/chat/${message}`;
    const eventSource = new EventSource(sseUrl);

    eventSource.addEventListener('message', (event: MessageEvent) => {
      const serverResponse = JSON.parse(event.data);
      chatUpdateSubject.next(serverResponse.message);
    });

    return chatUpdateSubject.asObservable();
  }
}





  
