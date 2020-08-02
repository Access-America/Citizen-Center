resource "azurerm_resource_group" "front_end_rg" {
  name     = join("-", [var.front_end_module.environment, "front-end"])
  location = "eastus2"
}

resource "azurerm_storage_account" "front_end_storage" {
  name                     = join("", [var.front_end_module.environment, "ccfrontend"])
  resource_group_name      = azurerm_resource_group.front_end_rg.name
  location                 = azurerm_resource_group.front_end_rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
  account_kind             = "StorageV2"

  static_website {
    index_document     = "index.html"
    error_404_document = "index.html"
  }
}