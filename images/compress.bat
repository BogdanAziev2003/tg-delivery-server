@Echo Off
Setlocal
color 0a
set "Source=%~dp0"
cd /d "%~dp0"
if not exist ".\*.jpg" (
echo.
echo FAILED! Files *.jpg not found.
echo.
 pause
 endlocal & exit
) else (
echo.
echo Compress all JPG in a Directory:
echo %Source%
if not exist Compressed mkdir Compressed
for %%i in (*.jpg) do (
	convert ^
	-quality 80 ^
	-filter Lanczos ^
	-sampling-factor 4:2:0 ^
	-define jpeg:dct-method=float ^
	-thumbnail 800x ^
	"%%i" ".\Compressed\%%~ni.jpg"
)
)&& cls
echo. 
echo  Process done!
echo.
pause
endlocal & exit