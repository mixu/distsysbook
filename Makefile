build:
	@node generate.js

ebook:
	@echo "\n... generating $@"
	ebook-convert output/ebook.html output/mixu-distributed-systems-book.mobi \
		--max-levels 0 \
		--chapter "//*[@class = 'chapter']" \
		--chapter-mark=none \
		--sr1-search "<blockquote>" \
		--sr1-replace "<hr><blockquote>" \
		--sr2-search "</blockquote>" \
		--sr2-replace "</blockquote><hr>" \
		--page-breaks-before='/' \
		--linearize-tables \
		--authors "Mikito Takada" \
		--language en \
		--output-profile kindle
	@echo "\n... generating $@"
	ebook-convert output/ebook.html output/mixu-distributed-systems-book.epub \
		--max-levels 0 \
		--chapter "//*[@class = 'chapter']" \
		--chapter-mark=none \
		--sr1-search "<blockquote>" \
		--sr1-replace "<hr><blockquote>" \
		--sr2-search "</blockquote>" \
		--sr2-replace "</blockquote><hr>" \
		--page-breaks-before='/' \
		--linearize-tables \
		--authors "Mikito Takada" \
		--no-default-epub-cover \
		--language en

.PHONY: build ebook
