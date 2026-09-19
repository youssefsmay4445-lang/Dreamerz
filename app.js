document.addEventListener('DOMContentLoaded', function () {
  // Change this one number to update every WhatsApp button on the site
  var phone = '201016614482';

  document.querySelectorAll('a[data-wa]').forEach(function (link) {
    var msg = link.getAttribute('data-msg') ||
      'Hello Dreamerz Hub, I would like to inquire about your services. | مرحباً دريمرز هب، عايز أستفسر عن خدماتكم';
    link.href = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(msg);
    link.target = '_blank';
    link.rel = 'noopener';
  });
});
