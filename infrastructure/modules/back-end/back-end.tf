resource "azurerm_resource_group" "back_end" {
  name     = "back-end"
  location = "eastus2"
}

resource "azurerm_storage_account" "back_end_storage" {
  name                     = "functionsapptestsa"
  resource_group_name      = azurerm_resource_group.back_end.name
  location                 = azurerm_resource_group.back_end.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_app_service_plan" "back_end_compute" {
  name                = "azure-functions-test-service-plan"
  location            = azurerm_resource_group.back_end.location
  resource_group_name = azurerm_resource_group.back_end.name
  kind                = "FunctionApp"
  reserved            = true

  sku {
    tier = "Dynamic"
    size = "Y1"
  }
}

resource "azurerm_function_app" "backe_end_function" {
  name                      = "test-azure-functions"
  location                  = azurerm_resource_group.back_end.location
  resource_group_name       = azurerm_resource_group.back_end.name
  app_service_plan_id       = azurerm_app_service_plan.back_end.id
  storage_connection_string = azurerm_storage_account.back_end.primary_connection_string
  os_type                   = "linux"
}