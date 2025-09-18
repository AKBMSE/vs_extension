param(
    [string]$TestCaseName,
    [string]$SQL,
    [string]$Description,
    [string]$ExcelPath = "./TestCases.xlsx"
)

# Requires ImportExcel module: Install-Module -Name ImportExcel -Scope CurrentUser
if (-not (Get-Module -ListAvailable -Name ImportExcel)) {
    Write-Error "ImportExcel PowerShell module is required. Install it with 'Install-Module -Name ImportExcel -Scope CurrentUser'"
    exit 1
}

$data = [PSCustomObject]@{
    TestCaseName = $TestCaseName
    SQL          = $SQL
    Description  = $Description
}

if (Test-Path $ExcelPath) {
    $existing = Import-Excel -Path $ExcelPath
    $allData = $existing + $data
    $allData | Export-Excel -Path $ExcelPath -WorksheetName 'TestCases' -AutoSize -TableName 'TestCases' -Force
} else {
    $data | Export-Excel -Path $ExcelPath -WorksheetName 'TestCases' -AutoSize -TableName 'TestCases' -Force
}
