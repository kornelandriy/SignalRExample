import {Injectable} from '@angular/core';
import * as signalR from "@aspnet/signalr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  constructor(private router: Router) { }
  private hubConnection: signalR.HubConnection;
  public NodeState;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:53353/ChatHub')
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');

      })
      .catch(err => console.log('Error while starting connection: ' + err))
  };

  public addNodeStateListener = () => {
    this.hubConnection.on('ReceiveMessage', (user, message) => {
      console.log(`user = ${user}, state = ${message}`);


    });
  };

}

