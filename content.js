function createSolanaFMButton() {
    const button = document.createElement("button");
    button.textContent = "Open on SolanaFM";
    button.style.background = "linear-gradient(135deg, #7B1FA2, #4A148C)";
    button.style.border = "none";
    button.style.color = "white";
    button.style.padding = "12px 24px";
    button.style.textAlign = "center";
    button.style.textDecoration = "none";
    button.style.display = "inline-block";
    button.style.fontSize = "16px";
    button.style.fontWeight = "bold";
    button.style.margin = "10px";
    button.style.cursor = "pointer";
    button.style.borderRadius = "25px";
    button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    button.style.transition = "all 0.3s ease";

    button.addEventListener("mouseover", () => {
        button.style.transform = "translateY(-2px)";
        button.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "translateY(0)";
        button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });

    button.addEventListener("click", openOnSolanaFM);

    return button;
}

function openOnSolanaFM() {
    const currentURL = window.location.href;
    const solanaFMURL = currentURL.replace("solscan.io", "solana.fm");
    window.open(solanaFMURL, "_blank");
}

function addSolanaFMButton() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
                const tabsNavWrapElement =
                    document.querySelector(".ant-tabs-nav-wrap");
                if (
                    tabsNavWrapElement &&
                    !document.querySelector(".solana-fm-button")
                ) {
                    const solanaFMButton = createSolanaFMButton();
                    solanaFMButton.classList.add("solana-fm-button");
                    tabsNavWrapElement.parentNode.insertBefore(
                        solanaFMButton,
                        tabsNavWrapElement.nextSibling,
                    );
                }
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

addSolanaFMButton();
