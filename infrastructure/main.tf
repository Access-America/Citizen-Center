module "front_end_test" {
    source = "./modules/front-end"
    
    front_end_module = {
        index_document = "index.html"
        error_document = "error.html"
    }
}