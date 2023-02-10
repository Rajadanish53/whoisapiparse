import * as React from 'react';
import './style.css';
let data = `% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer: whois.verisign-grs.com

domain: COM

organisation: VeriSign Global Registry Services
address: 12061 Bluemont Way
address: Reston VA 20190
address: United States of America (the)

contact: administrative
name: Registry Customer Service
organisation: VeriSign Global Registry Services
address: 12061 Bluemont Way
address: Reston VA 20190
address: United States of America (the)
phone: +1 703 925-6999
fax-no: +1 703 948 3978
e-mail: info@verisign-grs.com

contact: technical
name: Registry Customer Service
organisation: VeriSign Global Registry Services
address: 12061 Bluemont Way
address: Reston VA 20190
address: United States of America (the)
phone: +1 703 925-6999
fax-no: +1 703 948 3978
e-mail: info@verisign-grs.com

nserver: A.GTLD-SERVERS.NET 192.5.6.30 2001:503:a83e:0:0:0:2:30
nserver: B.GTLD-SERVERS.NET 192.33.14.30 2001:503:231d:0:0:0:2:30
nserver: C.GTLD-SERVERS.NET 192.26.92.30 2001:503:83eb:0:0:0:0:30
nserver: D.GTLD-SERVERS.NET 192.31.80.30 2001:500:856e:0:0:0:0:30
nserver: E.GTLD-SERVERS.NET 192.12.94.30 2001:502:1ca1:0:0:0:0:30
nserver: F.GTLD-SERVERS.NET 192.35.51.30 2001:503:d414:0:0:0:0:30
nserver: G.GTLD-SERVERS.NET 192.42.93.30 2001:503:eea3:0:0:0:0:30
nserver: H.GTLD-SERVERS.NET 192.54.112.30 2001:502:8cc:0:0:0:0:30
nserver: I.GTLD-SERVERS.NET 192.43.172.30 2001:503:39c1:0:0:0:0:30
nserver: J.GTLD-SERVERS.NET 192.48.79.30 2001:502:7094:0:0:0:0:30
nserver: K.GTLD-SERVERS.NET 192.52.178.30 2001:503:d2d:0:0:0:0:30
nserver: L.GTLD-SERVERS.NET 192.41.162.30 2001:500:d937:0:0:0:0:30
nserver: M.GTLD-SERVERS.NET 192.55.83.30 2001:501:b1f9:0:0:0:0:30
ds-rdata: 30909 8 2 e2d3c916f6deeac73294e8268fb5885044a833fc5459588f4a9184cfc41a5766

whois: whois.verisign-grs.com

status: ACTIVE
remarks: Registration information: http://www.verisigninc.com

created: 1985-01-01
changed: 2019-08-14
source: IANA
`;
export default function App() {
  React.useEffect(() => {
    let currentData = null;
    let finalObject = {};
    let splittedLines = data
      .split('\n')
      .slice(4)
      .filter((v) => v)
      .forEach((line) => {
        let key = line.split(':')[0].trim().replace('-', '');
        let value = line.split(':')[1].trim();
        if (key === 'contact') {
          currentData =
            value === 'administrative'
              ? 'admin'
              : value === 'technical'
              ? 'tech'
              : '';
        }
        if (key === 'nserver') {
          currentData = '';
        }

        finalObject[currentData || '' + key] = value;
      });
    console.log(finalObject);
    // console.log(splittedLines)
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
