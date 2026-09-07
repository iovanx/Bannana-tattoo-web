//Codigo para la ventana de las cookies extraido de inteligencia artificial, 
// adaptado a las necesidades de la pagina y con el consentimiento de su uso. 
// Se muestra un mensaje informativo sobre las cookies utilizadas en el sitio web, 
// y se solicita el consentimiento del usuario para su uso. El mensaje se muestra
// solo si el usuario no ha aceptado previamente el uso de cookies, y se almacena
(function () {
  const COOKIE_KEY = 'banana_cookie_consent';
  const COOKIE_DAYS = 1460; // el banner de cookies no aparecera por 4 años

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  function init() {
    // Si ya aceptó antes, no mostrar nada
    if (getCookie(COOKIE_KEY)) return;

    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-inner">
        <strong>Este sitio web utiliza cookies de proveedores externos</strong>
        <p>
          Esta web utiliza únicamente cookies técnicas, necesarias para su correcto funcionamiento.<br><br>
          <strong>Google Fonts</strong>Este sitio utiliza las cookies de google fonts para mostrar la tipografía personalizada<br>
          <strong>Remix icons</strong>Este sitio utiliza las cookies de remix icons para mostrar los iconos<br>
          <strong>Importante:</strong>
          No se usan cookies de análisis, publicidad ni rastreo.<br>
          Al continuar navegando aceptas su uso. No es necesario ningún consentimiento adicional.
        </p>
        <button id="btn-aceptar-cookies" class="btn-aceptar">Entendido</button>
      </div>
    `;
    document.body.appendChild(banner);
    banner.classList.add('visible');

    document.getElementById('btn-aceptar-cookies').addEventListener('click', function () {
      setCookie(COOKIE_KEY, 'accepted', COOKIE_DAYS);
      banner.classList.remove('visible');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();º