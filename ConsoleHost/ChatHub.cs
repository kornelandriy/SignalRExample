using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace ConsoleHost
{
    public class ChatHub : Hub<IChat>
    {
        public async Task SendTimeToClients(DateTime dateTime)
        {
            await Clients.All.ShowTime(dateTime);
        }
        
        public async Task SendMessage(string user, string message)
        {
            Console.Write($"user = {user}, message = {message}");
            await Clients.All.SendMessage(user,message);
        }
    }
}