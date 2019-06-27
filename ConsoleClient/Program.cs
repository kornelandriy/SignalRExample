using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR.Client;

namespace ConsoleClient
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var _connection = new HubConnectionBuilder()
                .WithUrl("http://localhost:53353/ChatHub")
                .Build();

            _connection.Closed += async error =>
            {
                await Task.Delay(new Random().Next(0,5) * 1000);
                await _connection.StartAsync();
            };
            
            await _connection.StartAsync();

            while (true)
            {
                var id = new Random().Next(100);
                var cardId = new Random().Next(10000);
                
                await _connection.InvokeAsync("SendMessage", 
                    id.ToString(), cardId);
                
                Thread.Sleep(new Random().Next(10) * 1000);
            }
        }
    }
}