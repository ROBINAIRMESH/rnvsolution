// Load IP & Location Info
function loadVisitorInfo() {
    fetch("https://ipapi.co/json/")
        .then(res => res.json())
        .then(data => {
            document.getElementById("ip").textContent = data.ip;
            document.getElementById("city").textContent = data.city;
            document.getElementById("country").textContent = data.country_name;
            document.getElementById("isp").textContent = data.org;

            let ua = navigator.userAgent;

            // Device
            document.getElementById("device").textContent =
                /mobile/i.test(ua) ? "Mobile" : "Desktop";

            // Browser
            let browser = "Unknown";
            if (ua.includes("Chrome")) browser = "Chrome";
            else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari";
            else if (ua.includes("Firefox")) browser = "Firefox";
            else if (ua.includes("Edg")) browser = "Edge";
            else if (ua.includes("Opera") || ua.includes("OPR")) browser = "Opera";
            document.getElementById("browser").textContent = browser;

            // OS
            let os = "Unknown";
            if (ua.includes("Win")) os = "Windows";
            else if (ua.includes("Mac")) os = "macOS / iOS";
            else if (ua.includes("Android")) os = "Android";
            else if (ua.includes("Linux")) os = "Linux";
            document.getElementById("os").textContent = os;
        })
        .catch(err => console.log(err));
}

// Run
loadVisitorInfo();
