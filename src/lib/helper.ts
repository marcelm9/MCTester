import * as fs from 'node:fs';

export function ban_ip(ip: string) {
    let banned_ips;
    try {
        banned_ips = JSON.parse(fs.readFileSync('./bans.json', 'utf8'));
    } catch {
        banned_ips = [];
    }
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

export function log_leaderboard_entry(ip: string, name: string, points: number, time: number, mode: string) {

    let path;
    if (mode === 'hard') {
        path = './leaderboard_hard_log.json';
    } else if (mode === 'regular') {
        path = './leaderboard_log.json';
    } else {
        throw Error("invalid mode");
    }

    let log;
    try {
        log = JSON.parse(fs.readFileSync(path, 'utf8'));
    } catch {
        log = [];
    }

    log.push({ ip, name, points, time, created_at: new Date().toISOString() });

    fs.writeFileSync(path, JSON.stringify(log));
}
