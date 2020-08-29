output "front_end_rg" {
    value = azurerm_resource_group.front_end_rg
}

output "front_end_storage" {
    value = azurerm_storage_account.front_end_storage
}

output "front_end_storage_staging" {
    value = azurerm_storage_account.front_end_storage_staging
}