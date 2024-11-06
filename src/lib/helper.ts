import * as fs from 'fs';

export function ban_ip(ip: string) {
    const banned_ips = JSON.parse(fs.readFileSync('./bans.json', 'utf8'));
    banned_ips.push(ip);
    fs.writeFileSync('./bans.json', JSON.stringify(banned_ips));
}

export function is_banned(ip: string) {
    let banned_ips;
    try {
        banned_ips = JSON.parse(fs.readFileSync('./bans.json', 'utf8'));
    } catch {
        banned_ips = [];
    }
    return banned_ips.includes(ip);
}
