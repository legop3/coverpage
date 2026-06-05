function dropdown() {
    // The dropdown element is intentionally looked up at click time because the page is tiny,
    // and doing so keeps the handler simple if the markup is edited later.
    const dropdownElement = document.getElementById("dropdown");

    /*
        Tailwind's `hidden` utility maps directly to `display: none`, which replaces the old
        custom `dropdown-hide` and `dropdown-show` classes without needing a separate stylesheet.
    */
    dropdownElement.classList.toggle("hidden");
}
