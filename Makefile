help:
	@echo "help     - this help"
	@echo "dist     - create archive for upload to google play"

dist:
	zip -R ../metacpan-redirect.zip * -x Makefile README NEW-BSD-LICENSE.txt
