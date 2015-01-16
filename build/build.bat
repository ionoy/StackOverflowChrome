@echo OFF
cd ..
mkdir ..\sochromerelease
rd release /s /q
del release.zip
xcopy *.* ..\sochromerelease /S /y
rd ..\sochromerelease\build /s /q
rd ..\sochromerelease\.hg /s /q
mkdir release
xcopy ..\sochromerelease\*.* release /S /y
rd ..\sochromerelease /s /q
cd build

ajaxmin.exe -hc ..\release\sochrome.js -o ..\release\sochrome.min.js
ajaxmin.exe -hc ..\release\ui.js -o ..\release\ui.min.js

del ..\release\sochrome.js
del ..\release\ui.js

ren ..\release\sochrome.min.js sochrome.js
ren ..\release\ui.min.js ui.js