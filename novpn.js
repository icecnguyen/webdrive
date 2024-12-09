async function isVPN(ip) {
    const apiKey = 'your_api_key_here';
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.security.is_vpn || data.security.is_proxy;
    } catch (error) {
        console.error('Error fetching VPN status:', error);
        return false;
    }
}

async function checkVPN() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const ip = data.ip;

        if (await isVPN(ip)) {
            document.body.innerHTML = '<h1 class="centered">VPN/Proxy detected. Access blocked.</h1>';
        } else {
            document.body.innerHTML = '<h1 class="centered">Access granted.</h1>';
        }
    } catch (error) {
        console.error('Error fetching IP:', error);
        document.body.innerHTML = '<h1 class="centered">Something went wrong :(</h1>';
    }
}

checkVPN();

// CSS Styling
const style = document.createElement('style');
style.innerHTML = `
.centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 24px;
}
`;
document.head.appendChild(style);
