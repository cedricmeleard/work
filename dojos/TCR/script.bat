ECHO =======================================
ECHO TCR initialized
ECHO =======================================

set /a jestresult = jest
ECHO %jestresult%
if %jestresult% == 0 goto :commit else goto :revert

:commit
  git add -A
  set /a timestamp=date +%c
  git commit -m "TCR @ "%timestamp%

:revert
  git reset --hard
