<script>
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.hash);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
</script>
