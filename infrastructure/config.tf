provider "azurerm" {

    client_id       = "74036453-5cb8-403e-ae0e-0bb58f830a86"
    client_secret   = var.INFRA_DEPLOY_CLIENT_SECRET
    subscription_id = var.INFRA_SUBSCRIPTION_ID
    tenant_id       = "e4e01d27-a786-4129-bff4-bb3162c1772f"

    features {}
}