provider "azurerm" {

    client_id       = "74036453-5cb8-403e-ae0e-0bb58f830a86"
    client_secret   = var.client_secret
    subscription_id = var.subscription_id
    tenant_id       = "e4e01d27-a786-4129-bff4-bb3162c1772f"

    features {}
}