terraform {
  backend "azurerm" {
    resource_group_name  = "ccusterraformbackend"
    storage_account_name = "ccusterraformbackend"
    container_name       = "citizencenter-tfstate"
    key                  = "citizencenter.tfstate"
  }
}

provider "azurerm" {
    features {}
}

module "tf_backend" {
  source = "./modules/tf_backend"
}