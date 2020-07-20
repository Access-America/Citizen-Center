resource "azurerm_resource_group" "front_end_rg" {
  name     = "front-end"
  location = "eastus2"
}

resource "azurerm_storage_account" "front_end_storage" {
  name                     = "storageaccountname"
  resource_group_name      = azurerm_resource_group.front_end_rg.name
  location                 = azurerm_resource_group.front_end_rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  static_website {
    index_document     = "index.vue"
    error_404_document = "error.vue"
  }

}