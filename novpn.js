async function isVPN(ip) {
    const apiKey = '8186e0283eae42e8a4e91394b0c4c97d';
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.security.is_vpn;
}

async function checkVPN() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ip = data.ip;

    if (await isVPN(ip)) {
        document.body.innerHTML = '<h1>TẮT VPN ĐI THẰNG NGU</h1>';
    }
}

checkVPN();