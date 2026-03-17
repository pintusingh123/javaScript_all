window.onload = () => {
    showAds()
}

const showAds = () => {
    const isShown = sessionStorage.getItem("isModelShown");
    if (isShown == null) {
        Swal.fire({
            icon: "info",
            title: "Great Deals",
            text: "50% discount on every products"
            
        })
        sessionStorage.setItem("isModelShown", true);
    }

}