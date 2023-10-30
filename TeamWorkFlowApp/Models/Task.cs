namespace TeamWorkFlowApp.Models
{
    public class Task
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public int order_id { get; set; }
        public int task_status_id { get; set; }
    }
}
