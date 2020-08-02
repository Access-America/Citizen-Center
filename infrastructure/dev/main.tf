module "dev_front_end" {
    source = "../modules/front_end"
    
    front_end_module = {
        environment = "dev"
    }
}