document
  .querySelectorAll(".copy-button")
  .forEach((button) => {

    button.addEventListener(
      "click",
      async () => {

        const target =
          document.getElementById(
            button.dataset.copyTarget
          );

        if (!target) {
          return;
        }

        const code =
          target.textContent;

        try {

          await navigator.clipboard.writeText(
            code
          );

          const originalText =
            button.textContent;

          button.textContent =
            "Copied!";

          button.classList.add(
            "copied"
          );

          setTimeout(() => {

            button.textContent =
              originalText;

            button.classList.remove(
              "copied"
            );

          }, 1500);

        } catch (error) {

          button.textContent =
            "Copy failed";

        }

      }
    );

  });