# terraform {
#   backend "azurerm" {
#     resource_group_name  = "terraform-backend"
#     storage_account_name = "citizencentertfbackend"
#     container_name       = "citizen-center-tf-state"
#     key                  = "citizencenter.tfstate"
#   }
# }

provider "azurerm" {
    features {}
}

resource "azurerm_resource_group" "tf_backend_rg" {
  name     = "terraform-backend"
  location = "eastus2"
}

resource "azurerm_storage_account" "tf_backend_storage" {
  name                     = "citizencentertfbackend"
  resource_group_name      = azurerm_resource_group.tf_backend_rg.name
  location                 = azurerm_resource_group.tf_backend_rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
}

resource "azurerm_storage_container" "tf_backend_container" {
  name                  = "citizen-center-tf-state"
  storage_account_name  = azurerm_storage_account.tf_backend_storage.name
  container_access_type = "private"
}