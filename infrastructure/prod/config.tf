terraform {
  backend "azurerm" {
    resource_group_name  = "prod-ccterraformbackend"
    storage_account_name = "prodccterraformbackend"
    container_name       = "prod-citizencenter-tfstate"
    key                  = "citizencenter.tfstate"
  }
}

provider "azurerm" {
    features {}
}

module "prod_tf_backend" {
  source = "../modules/tf_backend"

  tf_backend = {
    environment = "prod"
  }
}