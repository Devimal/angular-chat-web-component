import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  messages: any[] = [
    {
      text: 'Drag & drop a file or a group of files.',
      date: new Date(),
      reply: true,
      user: {
        name: 'Bot',
        avatar: 'https://i.gifer.com/no.gif',
      },
    },
  ];

  sendMessage(event) {
    const files = !event.files
      ? []
      : event.files.map((file) => {
          return {
            url: file.src,
            type: file.type,
            icon: 'file-text-outline',
          };
        });

    this.messages.push({
      text: event.message,
      date: new Date(),
      files: files,
      type: files.length ? 'file' : 'text',
      reply: true,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
  }
}
