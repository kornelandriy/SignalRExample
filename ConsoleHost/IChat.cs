using System;
using System.Threading.Tasks;

namespace ConsoleHost
{
    public interface IChat
    {
        Task ShowTime(DateTime currentTime);
        Task SendMessage(string user, string message);

    }
}