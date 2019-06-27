using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace ConsoleHost
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly IHubContext<ChatHub, IChat> _clockHub;

        public Worker(ILogger<Worker> logger, IHubContext<ChatHub, IChat> clockHub)
        {
            _logger = logger;
            _clockHub = clockHub;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation($"Worker running at: {DateTime.Now}");
                await _clockHub.Clients.All.ShowTime(DateTime.Now);
                await Task.Delay(1000);
            }
        }
    }
}