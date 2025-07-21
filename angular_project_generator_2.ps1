# Prompt user for project name (default: desi-soft)
$projectName = Read-Host "Enter Angular project name (default: desi-soft)"
if ([string]::IsNullOrWhiteSpace($projectName)) {
    $projectName = "desi-soft"
}
Write-Host "Project Name: $projectName" -ForegroundColor Cyan

# Prompt user for project directory (default: current directory)
$projectRoot = Read-Host "Enter project root directory (default: current directory)"
if ([string]::IsNullOrWhiteSpace($projectRoot)) {
    $projectRoot = (Get-Location).Path
}
Write-Host "Project Root Directory: $projectRoot" -ForegroundColor Cyan

# Prompt for host IP address
$hostIP = Read-Host "Enter host IP address (default: 127.0.0.1)"
if ([string]::IsNullOrWhiteSpace($hostIP)) {
    $hostIP = "127.0.0.1"
}
Write-Host "Host IP: $hostIP" -ForegroundColor Cyan

# Prompt for port number
$portNumber = Read-Host "Enter port number (default: 4200)"
if ([string]::IsNullOrWhiteSpace($portNumber)) {
    $portNumber = "4200"
}
Write-Host "Port Number: $portNumber" -ForegroundColor Cyan

# Navigate to project root directory
Write-Host "Navigating to project root: $projectRoot" -ForegroundColor Yellow
Set-Location -Path $projectRoot

# Run Angular CLI to create new project in current directory
Write-Host "Running Angular CLI to create project..." -ForegroundColor Yellow
$ngNewResult = ng new $projectName --directory . 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Angular project created successfully." -ForegroundColor Green

    # Define project source folder
    $srcAppDir = Join-Path $projectRoot "src\app"

    # Wait until src\app exists (simple retry loop)
    $maxRetries = 20
    $retryCount = 0
    while (-not (Test-Path $srcAppDir) -and $retryCount -lt $maxRetries) {
        Start-Sleep -Seconds 1
        $retryCount++
    }

    if (Test-Path $srcAppDir) {
        Set-Location -Path $srcAppDir

        # Directories to create inside src/app
        $dirs = @(
            "adminModule", "userModule\module", "userModule\services", "userModule\components",
            "userModule\routing", "guards", "interceptor", "shared/assets", "shared/environments"
        )

        foreach ($dir in $dirs) {
            if (-not (Test-Path -Path $dir)) {
                Write-Host "Creating directory: $dir" -ForegroundColor Yellow
                mkdir $dir | Out-Null
            }
        }

        Set-Location -Path $projectRoot

        # Generate modules
        ng generate module adminModule/admin_module --routing --module app 
        ng generate module userModule/user_module --routing --module app 

        # Generate components
        $components = @("order", "payment", "product", "user-profile")
        foreach ($comp in $components) {
            ng generate component userModule/components/$comp 
        }

        # Generate services
        $services = @("categories", "order", "payment", "products", "profiles", "reviews", "users")
        foreach ($svc in $services) {
            ng generate service userModule/services/$svc 
        }

        # Run dev server
       Write-Host "Starting Angular development server on ${hostIp}:${portNumber}" -ForegroundColor Cyan

        ng serve --host $hostIP --port $portNumber --open --disable-host-check 
    }
    else {
        Write-Host "ERROR: 'src\app' folder not found after project creation!" -ForegroundColor Red
    }
}
else {
    Write-Host "❌ ERROR: Angular project creation failed!" -ForegroundColor Red
    Write-Output $ngNewResult
}
