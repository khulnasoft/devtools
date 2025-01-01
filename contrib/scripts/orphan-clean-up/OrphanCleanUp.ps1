<#
.DESCRIPTION
Cleanes up orphaned entities for the provided Devtools URL, defaults to the local backend
#>
param(
    [string]$devtoolsUrl = "http://localhost:7007"
)

$orphanApiUrl = "$devtoolsUrl/api/catalog/entities?filter=metadata.annotations.devtools.khulnasoft.com/orphan=true"
$orphanDeleteApiUrl = "$devtoolsUrl/api/catalog/entities/by-uid"

$orphans = Invoke-RestMethod -Method Get -Uri $orphanApiUrl

Write-Host ""
Write-Host "Found $($orphans.length) orphaned entities"
Write-Host ""

foreach($orphan in $orphans){
    Write-Host "Deleting orphan $($orphan.metadata.name) of kind $($orphan.kind)"
    
    Invoke-RestMethod -Method Delete -Uri "$orphanDeleteApiUrl/$($orphan.metadata.uid)"
}
