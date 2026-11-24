// Busca a postagem mais recente do blog (feed público do Blogger).
// Se a busca falhar, o card continua como link para o blog.
(function () {
  var FEED = 'https://blogreencontrandojesus.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=1&callback=mostrarPostagem';
  window.mostrarPostagem = function (d) {
    try {
      var e = d.feed.entry[0];
      if (!e) return;
      var link = (e.link || []).filter(function (l) { return l.rel === 'alternate'; })[0];
      var html = (e.content && e.content.$t) || (e.summary && e.summary.$t) || '';
      var txt = new DOMParser().parseFromString(html, 'text/html').body.textContent.replace(/\s+/g, ' ').trim();
      if (txt.length > 180) txt = txt.slice(0, 180).replace(/\s\S*$/, '') + '…';
      var data = new Date(e.published.$t).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
      document.getElementById('post-label').textContent = 'Última postagem do blog · ' + data;
      document.getElementById('post-title').textContent = e.title.$t;
      document.getElementById('post-text').textContent = txt;
      if (link) document.getElementById('post').href = link.href;
    } catch (err) {}
  };
  var sc = document.createElement('script');
  sc.src = FEED; sc.async = true;
  document.body.appendChild(sc);
})();
