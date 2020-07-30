terraform {
  backend "azurerm" {
    resource_group_name  = "terraform-backend"
    storage_account_name = "citizencentertfbackend"
    container_name       = "citizen-center-tf-state"
    key                  = "citizencenter.tfstate"
  }
}

provider "azurerm" {

    client_id       = "74036453-5cb8-403e-ae0e-0bb58f830a86"
    client_secret   = var.INFRA_DEPLOY_CLIENT_SECRET
    subscription_id = var.AZ_SUBSCRIPTION_ID
    tenant_id       = "e4e01d27-a786-4129-bff4-bb3162c1772f"

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