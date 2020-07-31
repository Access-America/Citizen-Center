module "front_end" {
    source = "./modules/front-end"
    
    front_end_module = {
        index_document = "index.html"
        error_document = "error.html"
    }
}