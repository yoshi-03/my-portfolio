function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
  
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    } else {
      sidebar.classList.add("open");
    }
  }
  const links = document.querySelectorAll(".sidebar a");

  links.forEach(link =>{
      link.addEventListener("click",() =>{
          sidebar.classList.remove("open");
      });
  });