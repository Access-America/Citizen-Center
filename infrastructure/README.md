# Terraform Infrastructure Modules

<b>Description:</b>

All Citizen Center infrastructure is represented within Terraform code. The base models enforce common design goals and governance in order to encourage consistent implementation from contributors. As additional functionality is required, the modules should be updated to support it. Infrastructure should not be created or modified directly.

<b>Usage:</b>

Modules in this repository use Terraform >=v.12 and are currently sourced using [local paths](https://www.terraform.io/docs/modules/sources.html#local-paths). 

Example:
```terraform
module "new_hampshire_back_end" {
    source = "../modules//back_end"
}
```
Each module has a set of required parameters that need to be provided when it is sourced. Please visit the reference documentation for each module for examples on how to structure module calls.

<b>Required tools:</b>

[Terraform v.12](https://www.terraform.io/downloads.html)

<b>Reference Documentation:</b>

Terraform Modules:
https://www.terraform.io/docs/configuration/modules.html

Terraform Module Sourcing:
https://www.terraform.io/docs/modules/sources.html

Terraform CLI:
https://www.terraform.io/docs/cli-index.html

=======

# Submitting and Testing Infrastructure Code

Coming soon™