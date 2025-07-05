# PowerShell script to convert JSX files to TSX
$assets = @(
    @{ name = "DownArrow"; props = "color?: string" },
    @{ name = "DownArrow2"; props = $null },
    @{ name = "DownArrowIcon"; props = $null },
    @{ name = "DownArrowicon2"; props = $null },
    @{ name = "DownloadIcon"; props = $null },
    @{ name = "Draft"; props = $null },
    @{ name = "EditIcon"; props = $null },
    @{ name = "EyeIcon"; props = $null },
    @{ name = "FilterIcon"; props = $null },
    @{ name = "Hi"; props = $null },
    @{ name = "Hiddeneye"; props = $null },
    @{ name = "HomeIcon"; props = "color?: string" },
    @{ name = "InfoIcon"; props = "color?: string" },
    @{ name = "InProgress"; props = $null },
    @{ name = "Invite"; props = $null },
    @{ name = "InviteIcon"; props = $null },
    @{ name = "LeftArrow"; props = "className?: string" },
    @{ name = "LogOut"; props = $null },
    @{ name = "Mail"; props = $null },
    @{ name = "Manageassetsicon"; props = $null },
    @{ name = "ManageCustomersIcon"; props = $null },
    @{ name = "ManageService"; props = $null },
    @{ name = "ManageUserIcon"; props = $null },
    @{ name = "ManualHand"; props = $null },
    @{ name = "Notification"; props = $null },
    @{ name = "NotifyIcon"; props = $null },
    @{ name = "Pending"; props = $null },
    @{ name = "PopularEquipment"; props = $null },
    @{ name = "PrintRepport"; props = $null },
    @{ name = "ProfilesIcon"; props = $null },
    @{ name = "ResidualanalysisIcon"; props = $null },
    @{ name = "ResPlus"; props = $null },
    @{ name = "RightArrowIcon"; props = "color?: string" },
    @{ name = "RightArrowIcon2"; props = "className?: string" },
    @{ name = "Save"; props = $null },
    @{ name = "SearchDas"; props = $null },
    @{ name = "ServiceIcon"; props = $null },
    @{ name = "Setting"; props = $null },
    @{ name = "Shopimg"; props = $null },
    @{ name = "Success"; props = $null },
    @{ name = "TimeIcon"; props = "color?: string" },
    @{ name = "Token"; props = "color?: string" },
    @{ name = "TotalProjects"; props = $null },
    @{ name = "UploadsIcon"; props = $null },
    @{ name = "UserProfile"; props = $null }
)

foreach ($asset in $assets) {
    $jsxFile = "$($asset.name).jsx"
    $tsxFile = "$($asset.name).tsx"
    
    if (Test-Path $jsxFile) {
        $content = Get-Content $jsxFile -Raw
        
        # Create the interface if props exist
        if ($asset.props) {
            $interface = "interface $($asset.name)Props {`n  $($asset.props);`n}`n`n"
            $functionSignature = "const $($asset.name): React.FC<$($asset.name)Props> = ("
        } else {
            $interface = ""
            $functionSignature = "const $($asset.name): React.FC = ("
        }
        
        # Replace the function signature
        $content = $content -replace "const $($asset.name) = \(", $functionSignature
        
        # Fix clipPath attribute
        $content = $content -replace 'clip-path=', 'clipPath='
        
        # Add interface at the beginning
        $content = $interface + $content
        
        # Write to TSX file
        Set-Content -Path $tsxFile -Value $content
        Write-Host "Converted $jsxFile to $tsxFile"
    }
}
