namespace TeamWorkFlowApp.Models
{
    public class User
    {
        public int id { get; set; }
        public string login { get; set; }
        public string password { get; set; }
        public int role_id { get; set; }
        //if its account of admin or employee (not default user (client))
        public int? employee_id { get; set; }  
    }
}
