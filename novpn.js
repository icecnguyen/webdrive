async function isVPN(ip) {
    const apiKey = '8186e0283eae42e8a4e91394b0c4c97d';
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.security.is_vpn;
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
            document.body.innerHTML = '<h1 class="centered">TẮT VPN ĐI THẰNG NGU</h1>';
        } else {
            document.body.innerHTML = '<h1 class="centered">TẮT VPN ĐI THẰNG NGU</h1>';
        }
    } catch (error) {
        console.error('Error fetching IP:', error);
        document.body.innerHTML = '<h1 class="centered">Something went wrong :(</h1>';
    }
}

checkVPN();

const style = document.createElement('style');
style.innerHTML = `
.centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 100px;
}
`;
document.head.appendChild(style);
