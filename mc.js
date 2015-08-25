var url = window.location.href

var disturl = /^http:\/\/search\.cpan\.org\/~[^\/]*\/(.*)-([0-9\.]+)\/((.*)\.pm|)$/

if(url.match(disturl)){
	var dist = url.replace(disturl, '$1')
	dist = dist.replace(/-/g, '::')
	window.location='https://metacpan.org/pod/' + dist
}

var authorurl = /^http:\/\/search\.cpan\.org\/~([^\/]*)\/$/

if(url.match(authorurl)){
	var author = url.replace(authorurl, '$1').toUpperCase();
	window.location='https://metacpan.org/author/' + author
}
