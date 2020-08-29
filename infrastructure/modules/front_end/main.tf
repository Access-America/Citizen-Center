resource "azurerm_resource_group" "front_end_rg" {
  name     = var.front_end_module.name
  location = "eastus"
}

resource "azurerm_storage_account" "front_end_storage" {
  name                     = var.front_end_module.name
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

resource "azurerm_storage_account" "front_end_storage_staging" {
  name                     = join("",["staging",var.front_end_module.name])
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

# resource "azurerm_template_deployment" "example" {
#   name                = "cc_azure_cdn_deploy"
#   resource_group_name = azurerm_resource_group.front_end_rg.name
#   deployment_mode = "Incremental"

#   parameters = {

#   }

#   template_file = file("../../cc_az_cdn.json")
# }