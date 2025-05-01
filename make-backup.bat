echo off
for /f %%x in ('wmic path win32_utctime get /format:list ^| findstr "="') do set %%x
rem This will set the variables Day, DayofWeek, Hour, Minute, Month, Quarter, Second, WeekInMonth and Year which you can use, the
echo %Year%
echo %Month%
echo %Day%
echo %Hour%
echo %Minute%
echo %Second%

for %%a in ("%~p0.") do set "parent_folder_name=%%~nxa"
echo %parent_folder_name%

SET archive_filename=%parent_folder_name%.%Year%-%Month%-%Day%--%Hour%-%Minute%-%Second%Z.7z 
"C:\Program Files\7-Zip\7z.exe" a -t7z %archive_filename% * -mx7 -xr!node_modules
copy %archive_filename% d:\OneDrive\Backup\projects\
move %archive_filename% d:\lex\backup\projects




