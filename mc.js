var url = window.location.href

var disturlver = /^http:\/\/search\.cpan\.org\/~[^\/]*\/(.*)-([0-9\.]+)\/((.*)\.pm|)$/

if(url.match(disturlver)){
	var dist = url.replace(disturlver, '$1')
	dist = dist.replace(/-/g, '::')
	window.location.replace('https://metacpan.org/pod/' + dist)
}

var disturl = /^http:\/\/search\.cpan\.org\/dist\/(.*)$/

if(url.match(disturl)){
	var dist = url.replace(disturl, '$1')
	dist = dist.replace(/-/g, '::')
	window.location.replace('https://metacpan.org/pod/' + dist)
}

var authorurl = /^http:\/\/search\.cpan\.org\/~([^\/]*)\/$/

if(url.match(authorurl)){
	var author = url.replace(authorurl, '$1').toUpperCase();
	window.location.replace('https://metacpan.org/author/' + author)
}
