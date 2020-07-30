resource "azurerm_resource_group" "back_end_rg" {
  name     = "back-end"
  location = "eastus2"
}

resource "azurerm_storage_account" "back_end_storage" {
  name                     = "functionsapptestsa"
  resource_group_name      = azurerm_resource_group.back_end_rg.name
  location                 = azurerm_resource_group.back_end_rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_app_service_plan" "back_end_compute" {
  name                = "azure-functions-test-service-plan"
  location            = azurerm_resource_group.back_end_rg.location
  resource_group_name = azurerm_resource_group.back_end_rg.name
  kind                = "FunctionApp"
  reserved            = true

  sku {
    tier = "Dynamic"
    size = "Y1"
  }
}

resource "azurerm_function_app" "back_end_function" {
  name                      = "test-azure-functions"
  location                  = azurerm_resource_group.back_end_rg.location
  resource_group_name       = azurerm_resource_group.back_end_rg.name
  app_service_plan_id       = azurerm_app_service_plan.back_end_compute.id
  storage_connection_string = azurerm_storage_account.back_end_storage.primary_connection_string
  os_type                   = "linux"
}