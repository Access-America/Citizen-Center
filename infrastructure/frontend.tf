module "front_end" {
    source="./modules/front_end"

    front_end_module = {
        name = "ccusfrontend"
    }
}