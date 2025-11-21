import { Section, Threat, Mitigation } from './types';

export const MITIGATIONS_DB: Record<string, string> = {
  'M1': 'Security Controls are applied to back-end systems to minimise the risk of insider attack.',
  'M2': 'Security Controls are applied to back-end systems to minimise unauthorised access. Example Security Controls can be found in OWASP.',
  'M3': 'Security Controls are applied to back-end systems. Where back-end servers are critical to the provision of services there are recovery measures in case of system outage. Example Security Controls can be found in OWASP.',
  'M4': 'Security Controls are applied to minimise risks associated with cloud computing. Example Security Controls can be found in OWASP and NCSC cloud computing guidance.',
  'M5': 'Security Controls are applied to back-end systems to prevent data breaches. Example Security Controls can be found in OWASP.',
  'M6': 'Systems shall implement security by design to minimize risks.',
  'M7': 'Access control techniques and designs shall be applied to protect system data/code. Example Security Controls can be found in OWASP.',
  'M8': 'Through system design and access control it should not be possible for unauthorised personnel to access personal or system critical data. Example of Security Controls can be found in OWASP.',
  'M9': 'Measures to prevent and detect unauthorized access shall be employed.',
  'M10': 'The vehicle shall verify the authenticity and integrity of messages it receives.',
  'M11': 'Security controls shall be implemented for storing cryptographic keys (e.g., use of Hardware Security Modules).',
  'M12': 'Confidential data transmitted to or from the vehicle shall be protected.',
  'M13': 'Measures to detect and recover from a denial of service attack shall be employed.',
  'M14': 'Measures to protect systems against embedded viruses/malware should be considered.',
  'M15': 'Measures to detect malicious internal messages or activity should be considered.',
  'M16': 'Secure software update procedures shall be employed.',
  'M18': 'Measures shall be implemented for defining and controlling user roles and access privileges, based on the principle of least access privilege.',
  'M19': 'Organizations shall ensure security procedures are defined and followed including logging of actions and access related to the management of the security functions.',
  'M20': 'Security controls shall be applied to systems that have remote access.',
  'M21': 'Software shall be security assessed, authenticated and integrity protected. Security controls shall be applied to minimise the risk from third party software that is intended or foreseeable to be hosted on the vehicle.',
  'M22': 'Security controls shall be applied to external interfaces.',
  'M23': 'Cybersecurity best practices for software and hardware development shall be followed. Cybersecurity testing with adequate coverage. Cybersecurity best practices for system design and system integration shall be followed.',
  'M24': 'Best practices for the protection of data integrity and confidentiality shall be followed for storing personal data. Example Security Controls can be found in ISO/SC27/WG5.'
};

export const THREATS_DATA: Threat[] = [
  // 4.3.1 Threats regarding back-end servers
  {
    id: '1.1',
    category: 'Back-end servers',
    description: 'Back-end servers used as a means to attack a vehicle or extract data',
    example: 'Abuse of privileges by staff (insider attack)',
    mitigationRefs: ['M1']
  },
  {
    id: '1.2',
    category: 'Back-end servers',
    description: 'Back-end servers used as a means to attack a vehicle or extract data',
    example: 'Unauthorized internet access to the server (enabled for example by backdoors, unpatched system software vulnerabilities, SQL attacks or other means)',
    mitigationRefs: ['M2']
  },
  {
    id: '1.3',
    category: 'Back-end servers',
    description: 'Back-end servers used as a means to attack a vehicle or extract data',
    example: 'Unauthorized physical access to the server (conducted by for example USB sticks or other media connecting to the server)',
    mitigationRefs: ['M8']
  },
  {
    id: '2.1',
    category: 'Back-end servers',
    description: 'Services from back-end server being disrupted, affecting the operation of a vehicle',
    example: 'Attack on back-end server stops it functioning, for example it prevents it from interacting with vehicles and providing services they rely on',
    mitigationRefs: ['M3']
  },
  {
    id: '3.1',
    category: 'Back-end servers',
    description: 'Vehicle related data held on back-end servers being lost or compromised ("data breach")',
    example: 'Abuse of privileges by staff (insider attack)',
    mitigationRefs: ['M1']
  },
  {
    id: '3.2',
    category: 'Back-end servers',
    description: 'Vehicle related data held on back-end servers being lost or compromised ("data breach")',
    example: 'Loss of information in the cloud. Sensitive data may be lost due to attacks or accidents when data is stored by third-party cloud service providers',
    mitigationRefs: ['M4']
  },
  {
    id: '3.3',
    category: 'Back-end servers',
    description: 'Vehicle related data held on back-end servers being lost or compromised ("data breach")',
    example: 'Unauthorized internet access to the server (enabled for example by backdoors, unpatched system software vulnerabilities, SQL attacks or other means)',
    mitigationRefs: ['M2']
  },
  {
    id: '3.4',
    category: 'Back-end servers',
    description: 'Vehicle related data held on back-end servers being lost or compromised ("data breach")',
    example: 'Unauthorized physical access to the server (conducted for example by USB sticks or other media connecting to the server)',
    mitigationRefs: ['M8']
  },
  {
    id: '3.5',
    category: 'Back-end servers',
    description: 'Vehicle related data held on back-end servers being lost or compromised ("data breach")',
    example: 'Information breach by unintended sharing of data (e.g. admin errors)',
    mitigationRefs: ['M5']
  },

  // 4.3.2 Threats to vehicles regarding their communication channels
  {
    id: '4.1',
    category: 'Vehicle communication channels',
    description: 'Spoofing of messages or data received by the vehicle',
    example: 'Spoofing of messages by impersonation (e.g. 802.11p V2X during platooning, GNSS messages, etc.)',
    mitigationRefs: ['M10']
  },
  {
    id: '4.2',
    category: 'Vehicle communication channels',
    description: 'Spoofing of messages or data received by the vehicle',
    example: 'Sybil attack (in order to spoof other vehicles as if there are many vehicles on the road)',
    mitigationRefs: ['M11']
  },
  {
    id: '5.1',
    category: 'Vehicle communication channels',
    description: 'Communication channels used to conduct unauthorized manipulation, deletion or other amendments to vehicle held code/data',
    example: 'Communications channels permit code injection, for example tampered software binary might be injected into the communication stream',
    mitigationRefs: ['M10', 'M6']
  },
  {
    id: '5.2',
    category: 'Vehicle communication channels',
    description: 'Communication channels used to conduct unauthorized manipulation, deletion or other amendments to vehicle held code/data',
    example: 'Communications channels permit manipulate of vehicle held data/code',
    mitigationRefs: ['M7']
  },
  {
    id: '5.3',
    category: 'Vehicle communication channels',
    description: 'Communication channels used to conduct unauthorized manipulation, deletion or other amendments to vehicle held code/data',
    example: 'Communications channels permit overwrite of vehicle held data/code',
    mitigationRefs: ['M7']
  },
  {
    id: '5.4',
    category: 'Vehicle communication channels',
    description: 'Communication channels used to conduct unauthorized manipulation, deletion or other amendments to vehicle held code/data',
    example: 'Communications channels permit erasure of vehicle held data/code',
    mitigationRefs: ['M7']
  },
  {
    id: '5.5',
    category: 'Vehicle communication channels',
    description: 'Communication channels used to conduct unauthorized manipulation, deletion or other amendments to vehicle held code/data',
    example: 'Communications channels permit introduction of data/code to the vehicle (write data code)',
    mitigationRefs: ['M7']
  },
  {
    id: '6.1',
    category: 'Vehicle communication channels',
    description: 'Communication channels permit untrusted/unreliable messages to be accepted or are',
    example: 'Accepting information from an unreliable or untrusted source',
    mitigationRefs: ['M10']
  },
  {
    id: '6.2',
    category: 'Vehicle communication channels',
    description: 'Communication channels permit untrusted/unreliable messages to be accepted or are',
    example: 'Man in the middle attack/ session hijacking',
    mitigationRefs: ['M10']
  },
  {
    id: '6.3',
    category: 'Vehicle communication channels',
    description: 'Communication channels permit untrusted/unreliable messages to be accepted or are vulnerable to session hijacking/replay attacks',
    example: 'Replay attack, for example an attack against a communication gateway allows the attacker to downgrade software of an ECU or firmware of the gateway',
    mitigationRefs: ['M10']
  },
  {
    id: '7.1',
    category: 'Vehicle communication channels',
    description: 'Information can be readily disclosed. For example, through eavesdropping on communications or through allowing unauthorized access to sensitive files or folders',
    example: 'Interception of information / interfering radiations / monitoring communications',
    mitigationRefs: ['M12']
  },
  {
    id: '7.2',
    category: 'Vehicle communication channels',
    description: 'Information can be readily disclosed. For example, through eavesdropping on communications or through allowing unauthorized access to sensitive files or folders',
    example: 'Gaining unauthorized access to files or data',
    mitigationRefs: ['M8']
  },
  {
    id: '8.1',
    category: 'Vehicle communication channels',
    description: 'Denial of service attacks via communication channels to disrupt vehicle functions',
    example: 'Sending a large number of garbage data to vehicle information system, so that it is unable to provide services in the normal manner',
    mitigationRefs: ['M13']
  },
  {
    id: '8.2',
    category: 'Vehicle communication channels',
    description: 'Denial of service attacks via communication channels to disrupt vehicle functions',
    example: 'Black hole attack, in order to disrupt communication between vehicles the attacker is able to block messages between the vehicles',
    mitigationRefs: ['M13']
  },
  {
    id: '9.1',
    category: 'Vehicle communication channels',
    description: 'An unprivileged user is able to gain privileged access to vehicle systems',
    example: 'An unprivileged user is able to gain privileged access, for example root access',
    mitigationRefs: ['M9']
  },
  {
    id: '10.1',
    category: 'Vehicle communication channels',
    description: 'Viruses embedded in communication media are able to infect vehicle systems',
    example: 'Virus embedded in communication media infects vehicle systems',
    mitigationRefs: ['M14']
  },
  {
    id: '11.1',
    category: 'Vehicle communication channels',
    description: 'Messages received by the vehicle or transmitted within it, contain malicious content',
    example: 'Malicious internal (e.g. CAN) messages',
    mitigationRefs: ['M15']
  },
  {
    id: '11.2',
    category: 'Vehicle communication channels',
    description: 'Messages received by the vehicle or transmitted within it, contain malicious content',
    example: 'Malicious V2X messages, e.g. infrastructure to vehicle or vehicle-vehicle messages (e.g. CAM, DENM)',
    mitigationRefs: ['M10']
  },
  {
    id: '11.3',
    category: 'Vehicle communication channels',
    description: 'Messages received by the vehicle or transmitted within it, contain malicious content',
    example: 'Malicious diagnostic messages',
    mitigationRefs: ['M10']
  },
  {
    id: '11.4',
    category: 'Vehicle communication channels',
    description: 'Messages received by the vehicle or transmitted within it, contain malicious content',
    example: 'Malicious proprietary messages (e.g. those normally sent from OEM or component/system/function supplier)',
    mitigationRefs: ['M10']
  },

  // 4.3.3 Threats to vehicles regarding their update procedures
  {
    id: '12.1',
    category: 'Update process',
    description: 'Misuse or compromise of update procedures',
    example: 'Compromise of over the air software update procedures. This includes fabricating the system update program or firmware',
    mitigationRefs: ['M16']
  },
  {
    id: '12.2',
    category: 'Update process',
    description: 'Misuse or compromise of update procedures',
    example: 'Compromise of local/physical software update procedures. This includes fabricating the system update program or firmware',
    mitigationRefs: ['M16']
  },
  {
    id: '12.3',
    category: 'Update process',
    description: 'Misuse or compromise of update procedures',
    example: 'The software is manipulated before the update process (and is therefore corrupted), although the update process is intact',
    mitigationRefs: ['M16']
  },
  {
    id: '12.4',
    category: 'Update process',
    description: 'Misuse or compromise of update procedures',
    example: 'Compromise of cryptographic keys of the software provider to allow invalid update',
    mitigationRefs: ['M11']
  },
  {
    id: '13.1',
    category: 'Update process',
    description: 'It is possible to deny legitimate updates',
    example: 'Denial of Service attack against update server or network to prevent rollout of critical software updates and/or unlock of customer specific features',
    mitigationRefs: ['M3']
  },

  // 4.3.4 Threats to vehicles regarding unintended human actions
  {
    id: '15.1',
    category: 'Unintended human actions',
    description: 'Legitimate actors are able to take actions that would unwittingly facilitate a cyber-attack',
    example: 'Innocent victim (e.g. owner, operator or maintenance engineer) being tricked into taking an action to unintentionally load malware or enable an attack',
    mitigationRefs: ['M18']
  },
  {
    id: '15.2',
    category: 'Unintended human actions',
    description: 'Legitimate actors are able to take actions that would unwittingly facilitate a cyber-attack',
    example: 'Defined security procedures are not followed',
    mitigationRefs: ['M19']
  },

  // 4.3.5 Threats to vehicles regarding their external connectivity
  {
    id: '16.1',
    category: 'External connectivity',
    description: 'Manipulation of the connectivity of vehicle functions enables a cyber-attack',
    example: 'Manipulation of functions designed to remotely operate systems, such as remote key, immobilizer, and charging pile',
    mitigationRefs: ['M20']
  },
  {
    id: '16.2',
    category: 'External connectivity',
    description: 'Manipulation of the connectivity of vehicle functions enables a cyber-attack',
    example: 'Manipulation of vehicle telematics (e.g. manipulate temperature measurement of sensitive goods, remotely unlock cargo doors)',
    mitigationRefs: ['M20']
  },
  {
    id: '16.3',
    category: 'External connectivity',
    description: 'Manipulation of the connectivity of vehicle functions enables a cyber-attack',
    example: 'Interference with short range wireless systems or sensors',
    mitigationRefs: ['M20']
  },
  {
    id: '17.1',
    category: 'External connectivity',
    description: 'Hosted 3rd party software, e.g. entertainment applications, used as a means to attack vehicle systems',
    example: 'Corrupted applications, or those with poor software security, used as a method to attack vehicle systems',
    mitigationRefs: ['M21']
  },
  {
    id: '18.1',
    category: 'External connectivity',
    description: 'Devices connected to external interfaces e.g. USB ports, OBD port, used as a means to attack vehicle systems',
    example: 'External interfaces such as USB or other ports used as a point of attack, for example through code injection',
    mitigationRefs: ['M22']
  },
  {
    id: '18.2',
    category: 'External connectivity',
    description: 'Devices connected to external interfaces e.g. USB ports, OBD port, used as a means to attack vehicle systems',
    example: 'Media infected with a virus connected to a vehicle system',
    mitigationRefs: ['M22']
  },
  {
    id: '18.3',
    category: 'External connectivity',
    description: 'Devices connected to external interfaces e.g. USB ports, OBD port, used as a means to attack vehicle systems',
    example: 'Diagnostic access (e.g. dongles in OBD port) used to facilitate an attack, e.g. manipulate vehicle parameters (directly or indirectly)',
    mitigationRefs: ['M22']
  },

  // 4.3.6 Threats to vehicle data/code
  {
    id: '19.1',
    category: 'Vehicle data/code',
    description: 'Extraction of vehicle data/code',
    example: 'Extraction of copyright or proprietary software from vehicle systems (product piracy)',
    mitigationRefs: ['M7']
  },
  {
    id: '19.2',
    category: 'Vehicle data/code',
    description: 'Extraction of vehicle data/code',
    example: 'Unauthorized access to the owner’s privacy information such as personal identity, payment account information, address book information, location information, vehicle’s electronic ID, etc.',
    mitigationRefs: ['M8']
  },
  {
    id: '19.3',
    category: 'Vehicle data/code',
    description: 'Extraction of vehicle data/code',
    example: 'Extraction of cryptographic keys',
    mitigationRefs: ['M11']
  },
  {
    id: '20.1',
    category: 'Vehicle data/code',
    description: 'Manipulation of vehicle data/code',
    example: 'Illegal/unauthorized changes to vehicle’s electronic ID',
    mitigationRefs: ['M7']
  },
  {
    id: '20.2',
    category: 'Vehicle data/code',
    description: 'Manipulation of vehicle data/code',
    example: 'Identity fraud. For example, if a user wants to display another identity when communicating with toll systems, manufacturer backend',
    mitigationRefs: ['M7']
  },
  {
    id: '20.3',
    category: 'Vehicle data/code',
    description: 'Manipulation of vehicle data/code',
    example: 'Action to circumvent monitoring systems (e.g. hacking/ tampering/ blocking of messages such as ODR Tracker data, or number of runs)',
    mitigationRefs: ['M7']
  },
  {
    id: '20.4',
    category: 'Vehicle data/code',
    description: 'Manipulation of vehicle data/code',
    example: 'Data manipulation to falsify vehicle’s driving data (e.g. mileage, driving speed, driving directions, etc.)',
    mitigationRefs: ['M7']
  },
  {
    id: '20.5',
    category: 'Vehicle data/code',
    description: 'Manipulation of vehicle data/code',
    example: 'Unauthorized changes to system diagnostic data',
    mitigationRefs: ['M7']
  },
  {
    id: '21.1',
    category: 'Vehicle data/code',
    description: 'Erasure of data/code',
    example: 'Unauthorized deletion/manipulation of system event logs',
    mitigationRefs: ['M7']
  },
  {
    id: '22.2',
    category: 'Vehicle data/code',
    description: 'Introduction of malware',
    example: 'Introduce malicious software or malicious software activity',
    mitigationRefs: ['M7']
  },
  {
    id: '23.1',
    category: 'Vehicle data/code',
    description: 'Introduction of new software or overwrite existing software',
    example: 'Fabrication of software of the vehicle control system or information system',
    mitigationRefs: ['M7']
  },
  {
    id: '24.1',
    category: 'Vehicle data/code',
    description: 'Disruption of systems or operations',
    example: 'Denial of service, for example this may be triggered on the internal network by flooding a CAN bus, or by provoking faults on an ECU via a high rate of messaging',
    mitigationRefs: ['M13']
  },
  {
    id: '25.1',
    category: 'Vehicle data/code',
    description: 'Manipulation of vehicle parameters',
    example: 'Unauthorized access of falsify the configuration parameters of vehicle’s key functions, such as brake data, airbag deployed threshold, etc.',
    mitigationRefs: ['M7']
  },
  {
    id: '25.2',
    category: 'Vehicle data/code',
    description: 'Manipulation of vehicle parameters',
    example: 'Unauthorized access of falsify the charging parameters, such as charging voltage, charging power, battery temperature, etc.',
    mitigationRefs: ['M7']
  },

  // 4.3.7 Potential vulnerabilities
  {
    id: '26.1',
    category: 'Vulnerabilities',
    description: 'Cryptographic technologies can be compromised or are insufficiently applied',
    example: 'Combination of short encryption keys and long period of validity enables attacker to break encryption',
    mitigationRefs: ['M23']
  },
  {
    id: '26.2',
    category: 'Vulnerabilities',
    description: 'Cryptographic technologies can be compromised or are insufficiently applied',
    example: 'Insufficient use of cryptographic algorithms to protect sensitive systems',
    mitigationRefs: ['M23']
  },
  {
    id: '26.3',
    category: 'Vulnerabilities',
    description: 'Cryptographic technologies can be compromised or are insufficiently applied',
    example: 'Using already or soon to be deprecated cryptographic algorithms',
    mitigationRefs: ['M23']
  },
  {
    id: '27.1',
    category: 'Vulnerabilities',
    description: 'Parts or supplies could be compromised to permit vehicles to be attacked',
    example: 'Hardware or software, engineered to enable an attack or fails to meet design criteria to stop an attack',
    mitigationRefs: ['M23']
  },
  {
    id: '28.1',
    category: 'Vulnerabilities',
    description: 'Software or hardware development permits vulnerabilities',
    example: 'Software bugs. The presence of software bugs can be a basis for potential exploitable vulnerabilities.',
    mitigationRefs: ['M23']
  },
  {
    id: '28.2',
    category: 'Vulnerabilities',
    description: 'Software or hardware development permits vulnerabilities',
    example: 'Using remainders from development (e.g. debug ports, JTAG ports, microprocessors, development certificates, developer passwords, …) can permit access to ECUs or permit attackers to gain higher privileges',
    mitigationRefs: ['M23']
  },
  {
    id: '29.1',
    category: 'Vulnerabilities',
    description: 'Network design introduces vulnerabilities',
    example: 'Superfluous internet ports left open, providing access to network systems',
    mitigationRefs: ['M23']
  },
  {
    id: '29.2',
    category: 'Vulnerabilities',
    description: 'Network design introduces vulnerabilities',
    example: 'Circumvent network separation to gain control. Specific example is the use of unprotected gateways, or access points (such as truck-trailer gateways)',
    mitigationRefs: ['M23']
  },
  {
    id: '31.1',
    category: 'Data loss (Part B)',
    description: 'Unintended transfer of data can occur',
    example: 'Information breach. Personal data may be leaked when the car changes user (e.g. is sold or is used as hire vehicle with new hirers)',
    mitigationRefs: ['M24']
  },
  {
    id: '32.1',
    category: 'Physical manipulation',
    description: 'Physical manipulation of systems can enable an attack',
    example: 'Manipulation of electronic hardware, e.g. unauthorized electronic hardware added to a vehicle to enable "man-in-the-middle" attack',
    mitigationRefs: ['M9']
  },

  // Part C - Physical loss of data (outside vehicle)
  {
    id: '30.1',
    category: 'Physical loss of data',
    description: 'Physical loss of data',
    example: 'Damage caused by a third party. Sensitive data may be lost or compromised due to physical damages in cases of traffic accident or theft',
    mitigationRefs: ['M24']
  },
  {
    id: '30.2',
    category: 'Physical loss of data',
    description: 'Physical loss of data',
    example: 'Loss from DRM (digital right management) conflicts. User data may be deleted due to DRM issues',
    mitigationRefs: ['M24']
  },
  {
    id: '30.3',
    category: 'Physical loss of data',
    description: 'Physical loss of data',
    example: 'The (integrity of) sensitive data may be lost due to IT components wear and tear, causing potential cascading issues (in case of key alteration, for example)',
    mitigationRefs: ['M24']
  }
];

export const SECTIONS: Section[] = [
  {
    id: '1',
    title: '1. Scope',
    tags: ['Scope', 'Categories'],
    content: `1.1. This Regulation applies to vehicles, with regard to cyber security, of the Categories M and N. This Regulation also applies to vehicles of Category O if fitted with at least one electronic control unit.

1.2. This Regulation also applies to vehicles of the Categories L6 and L7 if equipped with automated driving functionalities from level 3 onwards.

1.3. This Regulation is without prejudice to other UN Regulations, regional or national legislations governing the access by authorized parties to the vehicle, its data, functions and resources.`
  },
  {
    id: '2',
    title: '2. Definitions',
    tags: ['Definitions', 'Glossary'],
    subsections: [
      {
        id: '2.1',
        title: '2.1 Vehicle type',
        content: 'Means vehicles which do not differ in at least the following essential respects: (a) The manufacturer’s designation of the vehicle type; (b) Essential aspects of the electric/electronic architecture and external interfaces with respect to cyber security.'
      },
      {
        id: '2.2',
        title: '2.2 Cyber security',
        content: 'Means the condition in which road vehicles and their functions are protected from cyber threats to electrical or electronic components.'
      },
      {
        id: '2.3',
        title: '2.3 Cyber Security Management System (CSMS)',
        content: 'Means a systematic risk-based approach defining organisational processes, responsibilities and governance to treat risk associated with cyber threats to vehicles and protect them from cyber attacks.'
      },
      {
        id: '2.8',
        title: '2.8 Mitigation',
        content: 'Means a measure that is reducing risk.'
      },
      {
        id: '2.9',
        title: '2.9 Risk',
        content: 'Means the potential that a given threat will exploit vulnerabilities of a vehicle and thereby cause harm to the organization or to an individual.'
      }
    ]
  },
  {
    id: '5',
    title: '5. Approval',
    tags: ['Approval', 'Requirements'],
    content: `5.1. Approval Authorities shall grant, as appropriate, type approval with regard to cyber security, only to such vehicle types that satisfy the requirements of this Regulation.
    
5.1.1. The Approval Authority or the Technical Service shall verify by means of document checks that the vehicle manufacturer has taken the necessary measures relevant for the vehicle type to:
(a) Collect and verify the information required under this Regulation through the supply chain;
(b) Document risks assessment, test results and mitigations applied to the vehicle type;
(c) Implement appropriate cyber security measures in the design of the vehicle type;
(d) Detect and respond to possible cyber security attacks;
(e) Log data to support the detection of cyber-attacks and provide data forensic capability.`
  },
  {
    id: '7',
    title: '7. Specifications',
    tags: ['Specifications', 'CSMS', 'Risk Assessment'],
    subsections: [
        {
            id: '7.2',
            title: '7.2 Requirements for the Cyber Security Management System',
            content: `7.2.2. The Cyber Security Management System shall cover the following aspects:
(a) The processes used within the manufacturer’s organization to manage cyber security;
(b) The processes used for the identification of risks to vehicle types;
(c) The processes used for the assessment, categorization and treatment of the risks identified;
(d) The processes in place to verify that the risks identified are appropriately managed;
(e) The processes used for testing the cyber security of a vehicle type;
(f) The processes used for ensuring that the risk assessment is kept current;`
        },
        {
            id: '7.3',
            title: '7.3 Requirements for vehicle types',
            content: `7.3.1. The manufacturer shall have a valid Certificate of Compliance for the Cyber Security Management System relevant to the vehicle type being approved.
            
7.3.3. The vehicle manufacturer shall identify the critical elements of the vehicle type and perform an exhaustive risk assessment for the vehicle type and shall treat/manage the identified risks appropriately.`
        }
    ]
  },
  {
    id: 'annex-5',
    title: 'Annex 5: Threats & Mitigations',
    type: 'threat_table',
    tags: ['Annex', 'Threats', 'Mitigations', 'Table A1'],
    content: 'Interactive explorer for Table A1 (Threats) and Tables B/C (Mitigations).'
  }
];