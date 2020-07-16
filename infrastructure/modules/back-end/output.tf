output "back_end_rg" {
    value = azurerm_resource_group.back_end_rg
}

output "back_end_storage" {
    value = azurerm_storage_account.back_end_storage
}

output "back_end_compute" {
    value = azurerm_app_service_plan.back_end_compute
}

output "back_end_function" {
    value = azurerm_function_app.back_end_function
}