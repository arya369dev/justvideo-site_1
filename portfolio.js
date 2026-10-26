// Just Video Broadcast: original film list, searchable gallery and cinematic moving homepage preview.
(async () => {
  const grid = document.querySelector('#film-grid');
  const preview = document.querySelector('#portfolio-preview');
  if (!grid && !preview) return;
  let films = [];
  try {
    const response = await fetch('portfolio.json');
    if (!response.ok) throw new Error('Portfolio file unavailable');
    films = await response.json();
  } catch (error) {
    (grid || preview).textContent = 'The film gallery could not load. Please refresh the page.';
    return;
  }
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const card = (film, duplicate = false) => `<button type="button" class="poster-card" data-title="${escapeHTML(film.title)}" data-src="${escapeHTML(film.image)}" aria-label="View ${escapeHTML(film.title)} poster"${duplicate ? ' tabindex="-1" aria-hidden="true"' : ''}><img src="${escapeHTML(film.image)}" alt="${escapeHTML(film.title)} film poster from supplied archive" loading="lazy" decoding="async"><span>${escapeHTML(film.title)}</span></button>`;
  if (grid) {
    const search = document.querySelector('#film-search');
    const count = document.querySelector('#film-count');
    const empty = document.querySelector('#film-empty');
    function render() {
      const query = (search?.value || '').trim().toLowerCase();
      const filtered = films.filter(film => film.title.toLowerCase().includes(query));
      grid.innerHTML = filtered.map(film => card(film)).join('');
      if (count) count.textContent = `${filtered.length} of ${films.length} films`;
      if (empty) empty.hidden = filtered.length !== 0;
    }
    search?.addEventListener('input', render);
    render();
  }
  if (preview) {
    const featured = films.slice(0, 6);
    preview.classList.add('jv-marquee');
    preview.setAttribute('aria-label', 'Featured films, moving horizontally; pause by hovering');
    preview.innerHTML = `<div class="jv-marquee-track"><div class="jv-marquee-group">${featured.map(film => card(film)).join('')}</div><div class="jv-marquee-group" aria-hidden="true">${featured.map(film => card(film, true)).join('')}</div></div>`;
  }
  const dialog = document.querySelector('#poster-dialog');
  document.addEventListener('click', event => {
    const selected = event.target.closest('.poster-card');
    if (!selected) return;
    if (!dialog) { location.href = 'studios-portfolio.html#film-portfolio'; return; }
    const image = dialog.querySelector('img');
    const caption = dialog.querySelector('p');
    if (image) { image.src = selected.dataset.src; image.alt = `${selected.dataset.title} film poster`; }
    if (caption) caption.textContent = selected.dataset.title;
    dialog.showModal();
  });
  dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
})();
