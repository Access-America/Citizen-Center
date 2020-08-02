terraform {
  backend "azurerm" {
    resource_group_name  = "dev-ccterraformbackend"
    storage_account_name = "devccterraformbackend"
    container_name       = "dev-citizencenter-tfstate"
    key                  = "dev-citizencenter.tfstate"
  }
}

provider "azurerm" {
    features {}
}

module "dev_tf_backend" {
  source = "../modules/tf_backend"
  
  tf_backend = {
    environment = "dev"
  }
}