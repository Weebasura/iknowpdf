// Shared utilities for I Know PDF

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function showToast(msg, duration = 3000) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

function setupDropZone(zone, onFiles, acceptMultiple = false, acceptTypes = '.pdf') {
  const input = zone.querySelector('input[type="file"]');
  if (input) {
    input.multiple = acceptMultiple;
    input.accept = acceptTypes;
    input.addEventListener('change', () => { if(input.files.length) onFiles(Array.from(input.files)); });
  }
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
  zone.addEventListener('drop', e => {
    e.preventDefault(); zone.classList.remove('dragover');
    const files = Array.from(e.dataTransfer.files).filter(f =>
      acceptTypes === '*' || f.name.toLowerCase().endsWith(acceptTypes.replace('*','').replace('.',''))
      || f.type.includes('pdf') || f.type.includes('image')
    );
    if (files.length) onFiles(files);
  });
}

function showError(container, msg) {
  let el = container.querySelector('.error-msg');
  if (!el) { el = document.createElement('div'); el.className = 'error-msg'; container.appendChild(el); }
  el.textContent = msg; el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 5000);
}

function showResult(container, downloadFn, label = 'Processing complete!', note = 'Your file is ready to download.') {
  let el = container.querySelector('.result-card');
  if (!el) {
    el = document.createElement('div'); el.className = 'result-card';
    el.innerHTML = `<div class="result-icon">✅</div>
      <h3>${label}</h3><p>${note}</p>
      <a class="btn-download" href="#">⬇ Download File</a>`;
    container.appendChild(el);
  } else {
    el.querySelector('h3').textContent = label;
    el.querySelector('p').textContent = note;
  }
  el.querySelector('.btn-download').onclick = e => { e.preventDefault(); downloadFn(); };
}

function createFileItem(file, onRemove) {
  const div = document.createElement('div');
  div.className = 'file-item';
  div.innerHTML = `
    <span class="file-icon-sm">📄</span>
    <span class="file-name">${file.name}</span>
    <span class="file-size">${formatBytes(file.size)}</span>
    <button class="file-remove" title="Remove">✕</button>
  `;
  div.querySelector('.file-remove').onclick = () => { div.remove(); if(onRemove) onRemove(); };
  return div;
}

function setProgress(wrap, pct) {
  const fill = wrap.querySelector('.progress-bar-fill');
  if (fill) fill.style.width = pct + '%';
}
