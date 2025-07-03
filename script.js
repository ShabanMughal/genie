      const images = {
      light: {
        desktop: './lay.png',
        mobile: './laylay.png'
      },
      dark: {
        desktop: './lay-black.png',
        mobile: './laylay-black.png'
      }
    };

    function updateImages(theme) {
    const desktopImgs = document.querySelectorAll('.desktop-img');
    const mobileImgs = document.querySelectorAll('.mobile-img');
    

    desktopImgs.forEach(img => {
      img.src = images[theme].desktop;
    });

    mobileImgs.forEach(img => {
      img.src = images[theme].mobile;
    });
  }

      const menuBtn = document.getElementById("menu-btn");
      const menu = document.getElementById("menu");
      menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });

      // Theme toggle functionality
      const themeToggle = document.getElementById("theme-toggle");
      const themeToggleMobile = document.getElementById("theme-toggle-mobile");
      const shadeBoxes = document.querySelectorAll('.theme-shade')
      
      function toggleTheme() {
        const isDark = document.documentElement.classList.toggle("dark");
        const newTheme = isDark ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        updateImages(newTheme);

        shadeBoxes.forEach(shadeBox => {
        if (!isDark) {
          shadeBox.classList.remove('shade-box-light');
          shadeBox.classList.add('shade-box');
        } else {
          shadeBox.classList.remove('shade-box');
          shadeBox.classList.add('shade-box-light');
        }
      });
      }

      // Check for saved user preference
      if (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
     
      } else {
        document.documentElement.classList.remove("dark");
      
      }

      themeToggle.addEventListener("click", toggleTheme);
      themeToggleMobile.addEventListener("click", toggleTheme);