namespace TeamWorkFlowApp.Models
{
    public class Order
    {
        public int id { get; set; }
        public string company_name { get; set; }
        public string description { get; set; }
        public float price { get; set; }
        public int stage_id { get; set; }
        public int contract_id { get; set; }
    }
}
