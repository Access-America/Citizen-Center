resource "azurerm_resource_group" "tf_backend_rg" {
  name     = join("-", [var.tf_backend.environment, "ccterraformbackend"])
  location = "eastus2"
}

resource "azurerm_storage_account" "tf_backend_storage" {
  name                     = join("", [var.tf_backend.environment, "ccterraformbackend"])
  resource_group_name      = azurerm_resource_group.tf_backend_rg.name
  location                 = azurerm_resource_group.tf_backend_rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
  account_kind             = "StorageV2"
}

resource "azurerm_storage_container" "tf_backend_container" {
  name                  = join("-", [var.tf_backend.environment, "citizencenter-tfstate"])
  storage_account_name  = azurerm_storage_account.tf_backend_storage.name
  container_access_type = "private"
}