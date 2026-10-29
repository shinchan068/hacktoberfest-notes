(() => {
  const menu = document.querySelector('.sidebar-menu');
  const narrow = window.matchMedia('(max-width: 820px)');
  const adapt = () => { menu.open = !narrow.matches; };
  adapt();
  narrow.addEventListener('change', adapt);
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    if (narrow.matches) menu.open = false;
  }));
  document.querySelectorAll('.check').forEach(check => {
    check.addEventListener('toggle', () => {
      if (!check.open) check.querySelectorAll('.answer-reveal').forEach(answer => { answer.open = false; });
    });
  });
  const status = document.querySelector('#copy-status');
  document.querySelectorAll('.copy').forEach(button => {
    button.addEventListener('click', async () => {
      const code = button.parentElement.querySelector('code');
      const text = code.textContent;
      let copied = false;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
          copied = true;
        }
      } catch (_) { /* Local-file browsers may deny the Clipboard API. */ }
      if (!copied) {
        const field = document.createElement('textarea');
        field.value = text;
        field.setAttribute('readonly', '');
        field.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.append(field);
        field.select();
        try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
        field.remove();
        button.focus({preventScroll:true});
      }
      if (copied) {
        button.textContent = 'Copied!';
        status.textContent = 'Code copied to clipboard.';
      } else {
        button.textContent = 'Select code';
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges(); selection.addRange(range);
        status.textContent = 'Copy was blocked. Code is selected; use your device’s copy command.';
      }
      setTimeout(() => { button.textContent = 'Copy'; }, 2500);
    });
  });
  const search = document.querySelector('#term-search');
  if (search) {
    const terms = [...document.querySelectorAll('.term')];
    const filter = () => {
      const query = search.value.trim().toLowerCase();
      let count = 0;
      terms.forEach(term => { term.hidden = !term.textContent.toLowerCase().includes(query); if (!term.hidden) count++; });
      document.querySelector('#term-count').textContent = `${count} of ${terms.length} terms`;
      document.querySelector('#no-terms').hidden = count > 0;
    };
    search.addEventListener('input', filter); filter();
  }
})();
