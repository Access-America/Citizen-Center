resource "azurerm_resource_group" "front_end_rg" {
  name     = "front-end"
  location = "eastus2"
}

resource "azurerm_storage_account" "front_end_storage" {
  name                     = "citizencenterfrontend"
  resource_group_name      = azurerm_resource_group.front_end_rg.name
  location                 = azurerm_resource_group.front_end_rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
  account_kind             = "StorageV2"

  static_website {
    index_document     = var.front_end_module.index_document
    error_404_document = var.front_end_module.error_document
  }
}