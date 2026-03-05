$src = "$env:USERPROFILE\.gemini\antigravity\brain\40c22552-da42-4c92-9105-fe1904d314e1"
$dest = "public\cars"
if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Force -Path $dest }
Copy-Item "$src\f150_front_*.png" -Destination "$dest\f150-1.png" -Force
Copy-Item "$src\f150_angle_*.png" -Destination "$dest\f150-2.png" -Force
Copy-Item "$src\f150_side_*.png" -Destination "$dest\f150-3.png" -Force
Copy-Item "$src\f150_rear_*.png" -Destination "$dest\f150-4.png" -Force
Copy-Item "$src\f150_interior_*.png" -Destination "$dest\f150-5.png" -Force
