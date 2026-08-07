import dns from 'dns';
import net from 'net';

const hosts = [
  'ac-pdeh8br-shard-00-00.pknr3dw.mongodb.net',
  'ac-pdeh8br-shard-00-01.pknr3dw.mongodb.net',
  'ac-pdeh8br-shard-00-02.pknr3dw.mongodb.net',
];

for (const host of hosts) {
  console.log(`\nHost: ${host}`);
  dns.lookup(host, { all: true }, (err, addresses) => {
    if (err) {
      console.log('  DNS lookup failed:', err.message);
      return;
    }
    console.log('  Addresses:', addresses.map((a) => `${a.address} (family ${a.family})`).join(', '));
    for (const addr of addresses) {
      const socket = net.createConnection({ host: addr.address, port: 27017, family: addr.family, timeout: 10000 }, () => {
        console.log('  CONNECTED', addr.address, addr.family);
        socket.end();
      });
      socket.on('error', (e) => console.log('  ERROR', addr.address, addr.family, e.message));
      socket.on('timeout', () => {
        console.log('  TIMEOUT', addr.address, addr.family);
        socket.destroy();
      });
    }
  });
}
